"use client";
import { useProducts } from "@/hooks/useProducts";
import { useCategoryFilter } from "@/hooks/useCategoryFilter";
import { ProductView } from "@/components/ProductView";

export default function EcommercePage() {
  const { categories, handleCategoryChange, checkedCategories, setCategories } =
    useCategoryFilter();
  const { products } = useProducts(setCategories);

  return (
    <ProductView
      products={products}
      categories={categories}
      onCategoryChange={handleCategoryChange}
      checkedCategories={checkedCategories}
    />
  );
}
