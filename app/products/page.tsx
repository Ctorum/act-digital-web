import { Checkbox } from "@/components/ui/checkbox";
import { Header } from "@/components/Header";
import { PromotionBanner } from "@/components/PromotionBanner";
import { TextLink } from "@/components/TextLink";
import { ProductGrid } from "@/components/ProductGrid";

export default function EcommercePage() {
  return (
    <div className="min-h-screen bg-background">
      <PromotionBanner />
      <Header />

      <div className="container mx-auto px-4 py-3 text-sm">
        <TextLink href="/">Home</TextLink>
        <span className="mx-2 text-muted-foreground">/</span>
        <span>Products</span>
      </div>

      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="space-y-4">
            <h2 className="font-semibold text-lg">Categories</h2>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <Checkbox />
                <span>Perfume</span>
              </label>
              <label className="flex items-center space-x-2">
                <Checkbox />
                <span>Camisetas</span>
              </label>
              <label className="flex items-center space-x-2">
                <Checkbox />
                <span>Joias</span>
              </label>
            </div>
          </div>

          <ProductGrid />
        </div>
      </main>
    </div>
  );
}
