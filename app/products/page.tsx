"use client";
import { Header } from "@/components/Header";
import { PromotionBanner } from "@/components/PromotionBanner";
import { ProductGrid } from "@/components/ProductGrid";
import { baseCategories, mainNavigation } from "@/lib/constants";
import { DynamicBreadcrumb } from "@/components/DynamicBreadcrumb";
import { CategoryFilter } from "@/components/CategoryFilter";
import { useCategoryFilter } from "@/hooks/useCategoryFilter";

export default function EcommercePage() {
  const { categories, handleCategoryChange } =
    useCategoryFilter(baseCategories);

  return (
    <div className="min-h-screen bg-background">
      <PromotionBanner />
      <Header navItems={mainNavigation} />
      <DynamicBreadcrumb />

      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <CategoryFilter
            categories={categories}
            onCategoryChange={handleCategoryChange}
          />
          <ProductGrid />
        </div>
      </main>
    </div>
  );
}
