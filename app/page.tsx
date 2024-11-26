import Image from "next/image";

import { Button } from "@/components/ui/button";
import { PromotionBanner } from "@/components/PromotionBanner";
import { Header } from "@/components/Header";
import { HighlightProducts } from "@/components/HighlightProducts";
import { CategoryCard } from "@/components/CategoryCard";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <PromotionBanner />
      <Header />
      <section className="bg-muted">
        <div className="container mx-auto px-4 py-16 grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Nova Coleção</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Descubra nossa nova coleção de roupas. Qualidade premium e estilo
              incomparável.
            </p>
            <Button className="mt-6" size="lg">
              Comprar Agora
            </Button>
          </div>
          <div className="aspect-[4/3] relative">
            <Image
              src="/placeholder.svg"
              alt="Collection Preview"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-8">Produtos em Destaque</h2>
        <HighlightProducts />
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-8">Categorias</h2>
        <CategoryCard />
      </section>

      <Footer />
    </div>
  );
}
