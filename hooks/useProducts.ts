import { useState, useEffect } from "react";
import { Category } from "@/types/categoryProps";
import { Product } from "@/types/fakeStore";
import { fetchProducts, transformCategories } from "@/services/product.service";

export const useProducts = (
  setCategories?: (categories: Category[]) => void
) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const fetchedProducts = await fetchProducts(20);
      setProducts(fetchedProducts);
      if (setCategories) {
        const newCategories = transformCategories(fetchedProducts);
        setCategories(newCategories);
      }
    };

    loadData();
  }, [setCategories]);

  return { products };
};
