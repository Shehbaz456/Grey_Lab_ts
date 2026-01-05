import type { Product } from "../types/product";
import { Link } from "react-router-dom";

type ProductCardProps = {
  product: Product;
    handleDeleteProduct: (id: number | string) => void;
};

function ProductCard({ product , handleDeleteProduct }: ProductCardProps) {
  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white group">
      <h2 className="font-semibold text-lg">{product.name}</h2>
      <p className="text-sm text-gray-600 bg-blue-200 p-1 w-fit rounded-xl ">
        {product.category}
      </p>
      <p className="mt-2 font-bold">₹{product.price}</p>
      <p className="text-sm">Stock: {product.stock}</p>
      <p className="text-sm text-gray-600">
        {product.description && product.description.length > 30
          ? product.description.slice(0, 30) + "..."
          : product.description}
      </p>

      <div className="flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <Link to={`${product.id}/edit`}>
          <button className="bg-blue-300 p-2 rounded-xl">✏️</button>
        </Link>
        <button
          className="bg-red-300 p-2 rounded-xl"
          onClick={() => handleDeleteProduct(product.id)}
        >
          ❌
        </button>
      </div>
    </div>
  );
}

export default ProductCard;