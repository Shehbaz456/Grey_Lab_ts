export type Product = {
  id: string | number;
  name: string;
  price: number;
  category: string;
  stock: number;
  description?: string;  // optional 
};