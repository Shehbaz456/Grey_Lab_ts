import { useState, useEffect } from "react";
import type { Product } from "../types/product";
import type { ChangeEvent, FormEvent } from "react";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
type ProductFormProps = {
  onSubmit: (product: Product) => void;
  editingProduct?: Product | null;
};

type Errors = {
  name?: string;
  price?: string;
  category?: string;
};

export default function ProductForm({ onSubmit, editingProduct}: ProductFormProps) {
  const [formData, setFormData] = useState<Product>({
    id: nanoid(),
    name: "",
    price: 0,
    category: "",
    stock: 0,
    description: "",
  });
  const navigate = useNavigate();

  const CATEGORY_OPTIONS = [
    "Electronics",
    "Accessories",
    "Wearables",
    "Storage",
    "Furniture",
    "Networking",
  ];

  const [errors, setErrors] = useState<Errors>({});

  useEffect(() => {
    if (editingProduct) {
      setFormData(editingProduct);
    }
  }, [editingProduct]);

  function validate() {
    const newErrors: Errors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Product name is required";
    }

    if (formData.price <= 0) {
      newErrors.price = "Price must be greater than 0";
    }

    if (!formData.category.trim()) {
      newErrors.category = "Category is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const handleChange = ( e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData({...formData, [name]: type === "number" ? Number(value) : value, });
  };

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    onSubmit(formData);

    if (!editingProduct) {
      setFormData({
        id: Date.now(),
        name: "",
        price: 0,
        category: "",
        stock: 0,
        description: "",
      });
    }

     navigate("/product");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto space-y-4"
    >
      <h2 className="text-xl font-semibold">
        {editingProduct ? "Edit Product" : "Add Product"}
      </h2>

      {/* Name */}
      <div>
        <label className="block text-sm font-medium">Name *</label>
        <input
          type="text"
          value={formData.name}
          onChange={handleChange}
          name="name"
          className="w-full border rounded px-3 py-2"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>

       {/*  Price  */}
      <div>
        <label className="block text-sm font-medium">Price *</label>
        <input type="number" name="price" value={formData.price}
          onChange={handleChange}  className="w-full border rounded px-3 py-2"
        />
        {errors.price && <p className="text-red-500 text-sm">{errors.price}</p>}
      </div>

      {/* Category */}
      <div>
        <label className="block text-sm font-medium">
          Category <span className="text-red-500">*</span>
        </label>

        <select
          value={formData.category}
          name="category"
          onChange={handleChange}
          className="w-full border rounded px-3 py-2 bg-white"
        >
          <option value="">Select category</option>

          {CATEGORY_OPTIONS.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        {errors.category && (
          <p className="text-red-500 text-sm">{errors.category}</p>
        )}
      </div>

      {/* Stock */}
      <div>
        <label className="block text-sm font-medium">Stock</label>
        <input
          type="number"
          name="stock"
          value={formData.stock}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        />
      </div>
      {/* Description */}
      <div>
        <label className="block text-sm font-medium">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-400 text-white py-2 rounded hover:bg-blue-500"
      >
        {editingProduct ? "Update Product" : "Add Product"}
      </button>
    </form>
  );
}
