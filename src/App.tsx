import { useState,useEffect } from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Navbar from "./components/Navbar.js"
import ProductForm from "./components/ProductForm.js";
import ProductList from "./page/ProductPage.js";
import ProductsData from "./products.json"
import type { Product } from "./types/product.js";
import { Navigate } from "react-router-dom";

const STORAGE_KEY = "products";

function App() {
  // const data:Product[] = ProductsData.products;
  const [products, setProducts] = useState<Product[]>(()=>{
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : ProductsData.products;
  });
  // local storage - product
   useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  }, [products]);

  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // debounce logic
  useEffect(()=>{
    const timer = setTimeout(()=>{
      setDebouncedSearch(searchTerm);
    },500)
    return ()=>clearTimeout(timer);
  },[searchTerm])

  // filter 
  const filteredProducts = products.filter(product=>product.name.toLowerCase().includes(debouncedSearch.toLowerCase())) 


  const addProduct = (product:Product)=>{
    setProducts((prev)=>[...prev,product])
  }

  const handleDeleteProduct = (id:number | string)=>{
    setProducts(prev=>prev.filter(product=>product.id !==id))
  }
  
  const updateProduct = (updated: Product) => {
    setProducts(prev =>
      prev.map(p => (p.id === updated.id ? updated : p))
    );
  };

  return (
    <>
    <BrowserRouter>
    <Navbar onSearch={setSearchTerm} />   
    <Routes> 
    <Route path="/" element={<Navigate to="/product" replace />} />
      <Route path="/product" element={<ProductList  handleDeleteProduct={handleDeleteProduct} data={filteredProducts} />} ></Route>
      <Route path="/product/add" element={<ProductForm onSubmit={addProduct} />} />
      <Route path="/product/:id/edit" element={<EditWrapper products={products} onSubmit={updateProduct} />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App


function EditWrapper({ products, onSubmit}: {products: Product[]; onSubmit: (p: Product) => void;}) {
  const { id } = useParams();
  const editingProduct = products.find( p => String(p.id) === id);
  if (!editingProduct)   return <Navigate to="/product" replace />;
  return <ProductForm editingProduct={editingProduct} onSubmit={onSubmit} />
}



