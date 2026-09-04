import { Product } from "./product";

export interface CartItem {
  id: string; // Unique cart item ID (e.g. productId + size + color)
  product: Product;
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
}

export interface CartSummary {
  subtotal: number;
  tax?: number;
  discount?: number;
  total: number;
  itemCount: number;
}
