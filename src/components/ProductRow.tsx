import { Link } from "react-router-dom";
import type { Product } from "../types/product";

type ProductRowProps = {
  product: Product;
    handleDeleteProduct: (id: number | string) => void;
};

function ProductRow({ product,handleDeleteProduct }: ProductRowProps) {
  return (
    <div className="grid md:grid-cols-5  p-3 border-t items-center">
      <span>{product.name}</span>
      <span>{product.category}</span>
      <span>₹ {product.price}</span>
      <span>{product.stock}</span>
      <div>
     <Link to={`${product.id}/edit`}> <button className=" text-blue-500 underline p-3 rounded-xl text-sm" >Edit</button> </Link> 
      <button className="text-red-600 hover:bg-red-300 p-3 underline text-sm" onClick={()=>handleDeleteProduct(product.id)} >Delete</button>
      </div>
    </div>
  );
}

export default ProductRow;
