import { mainNavigation } from "@/lib/constants";
import { CategoryFilter } from "./CategoryFilter";
import { DynamicBreadcrumb } from "./DynamicBreadcrumb";
import { Header } from "./Header";
import { ProductGrid } from "./ProductGrid";
import { PromotionBanner } from "./PromotionBanner";
import { ProductViewProps } from "@/types/productViewProps";

export const ProductView = ({
  products,
  categories,
  onCategoryChange,
  checkedCategories,
}: ProductViewProps) => (
  <div className="min-h-screen bg-background">
    <PromotionBanner />
    <Header navItems={mainNavigation} />
    <DynamicBreadcrumb />
    <main className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <CategoryFilter
          categories={categories}
          onCategoryChange={onCategoryChange}
        />
        <ProductGrid products={products} show={checkedCategories} />
      </div>
    </main>
  </div>
);
