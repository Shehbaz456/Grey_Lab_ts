import { useState } from "react";
import ProductCard from "../components/ProductCard";
import ProductRow from "../components/ProductRow";
import type { Product } from "../types/product";
import { CiGrid2H } from "react-icons/ci";
import { IoGridOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

type ProductPageProps = {
  data: Product[];
  handleDeleteProduct: (id: number | string) => void;
};

function ProductPage({ data, handleDeleteProduct }: ProductPageProps) {
  const [view, setView] = useState<"grid" | "list">("grid");
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 8;

  // total page, 
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const paginatedData = data.slice(startIndex, endIndex);


  if (!data || data.length === 0) {
    return (
      <div className="max-w-4xl mx-auto text-center py-16 text-gray-600">
        No products found.
      </div>
    );
  }
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex justify-between mb-4">
        <button
          onClick={() => navigate("/product/add")}
          className="bg-green-400 p-3 rounded-xl hover:bg-green-500"
        >
          Add Product
        </button>
        <div>
          <div className="flex bg-gray-200 rounded-lg p-1 gap-2">
            <button
              onClick={() => setView("grid")}
              className={`p-2 rounded ${
                view === "grid" ? "bg-white shadow" : ""
              }`}
            >
              <IoGridOutline className="text-xl" />
            </button>

            <button
              onClick={() => setView("list")}
              className={`p-2 rounded ${
                view === "list" ? "bg-white shadow" : ""
              }`}
            >
              <CiGrid2H className="text-xl" />
            </button>
          </div>
        </div>
      </div>
      {view === "grid" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {paginatedData.map((product) => (
            <ProductCard
              handleDeleteProduct={handleDeleteProduct}
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}

      {view === "list" && (
        <div className="border rounded-lg overflow-hidden">
          <div className="grid md:grid-cols-5 bg-gray-100 font-semibold p-3">
            <span>Name</span>
            <span>Category</span>
            <span>Price</span>
            <span>Stock</span>
            <span>Action</span>
          </div>

          {paginatedData.map((product) => (
            <ProductRow
              handleDeleteProduct={handleDeleteProduct}
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}

      {/* pagenate */}
    <div className="flex justify-center items-center gap-4 mt-8">
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage((p) => p - 1)}
        className="px-4 py-2 rounded bg-gray-200 disabled:opacity-50"
      > Prev </button>
      
      <span className="font-medium"> Page {currentPage} of {totalPages} </span>
      <button
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage((p) => p + 1)}
        className="px-4 py-2 rounded bg-gray-200 disabled:opacity-50"
      >  Next </button>
    </div>


    </div>
  );
}

export default ProductPage;
