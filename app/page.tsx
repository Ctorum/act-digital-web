import { PromotionBanner } from "@/components/PromotionBanner";
import { Header } from "@/components/Header";
import { HighlightProducts } from "@/components/HighlightProducts";
import { CategoryCard } from "@/components/CategoryCard";
import { Footer } from "@/components/Footer";
import { mainNavigation } from "@/lib/constants";
import { HeroSection } from "@/components/HeroSection";
import { ProductSection } from "@/components/ProductsSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <PromotionBanner />
      <Header navItems={mainNavigation} />

      <HeroSection
        buttonText="Comprar agora"
        description="Descubra nossa nova coleção de roupas. Qualidade premium e estilo incomparável."
        imageAlt="Banner de promoções"
        imageSrc="/banner.jpg"
        title="Nova Coleção"
      />

      <ProductSection title="Produtos em destaque">
        <HighlightProducts />
      </ProductSection>

      <ProductSection title="Categorias">
        <CategoryCard />
      </ProductSection>

      <Footer />
    </div>
  );
}
