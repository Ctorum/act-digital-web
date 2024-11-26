import customFetch from "@/services/api.service";
import { Product } from "@/types/fakeStore";

export const fetchProducts = async (limit: number) => {
  const response = await customFetch(`/products?limit=${limit}`);
  return response.json();
};

export const transformCategories = (products: Product[]) =>
  Array.from(new Set(products.map((product) => product.category))).map(
    (category) => ({
      id: Math.random().toString(36).substring(7),
      name: category,
    })
  );
