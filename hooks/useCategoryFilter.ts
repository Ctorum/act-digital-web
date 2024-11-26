import { Category } from "@/types/categoryProps";
import { useState } from "react";

export const useCategoryFilter = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const handleCategoryChange = (categoryId: string) => {
    setCategories(
      categories.map((cat: Category) =>
        cat.id === categoryId ? { ...cat, checked: !cat.checked } : cat
      )
    );
  };

  const checkedCategories = categories
    .filter((cat) => cat.checked)
    .map((cat) => cat.name);

  return { categories, setCategories, handleCategoryChange, checkedCategories };
};
