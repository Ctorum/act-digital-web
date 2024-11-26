import { Category } from "@/types/categoryProps";
import { useState } from "react";

export const useCategoryFilter = (initialCategories: Category[]) => {
  const [categories, setCategories] = useState<Category[]>(initialCategories);

  const handleCategoryChange = (categoryId: string) => {
    setCategories(
      categories.map((cat: Category) =>
        cat.id === categoryId ? { ...cat, checked: !cat.checked } : cat
      )
    );
  };

  return { categories, handleCategoryChange };
};
