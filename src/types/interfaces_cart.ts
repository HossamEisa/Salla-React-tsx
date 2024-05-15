import { Product } from "./interfaces_product";

export interface Cart {
  id: number;
  products: Array<Product>,
  quantity: number,
}


export interface DisplayCart {
  id: number;
  name: string;
  imageURL: string;
  price: number;
  description: string;
  categoryId: number;
  qty: number
}

