"use client";
import { PromotionBanner } from "@/components/PromotionBanner";
import { Header } from "@/components/Header";
import { cartProducts, mainNavigation } from "@/lib/constants";
import { Product } from "@/components/Product";
import { OrderSummary } from "@/components/OrderSummary";
import { DynamicBreadcrumb } from "@/components/DynamicBreadcrumb";

export default function CartPage() {
  return (
    <div className="min-h-screen bg-background">
      <PromotionBanner />
      <Header navItems={mainNavigation} />

      <main className="container mx-auto px-4 py-8">
        <DynamicBreadcrumb />

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold my-4">Seu Carrinho</h2>
            <div className="space-y-4">
              {cartProducts.map((product) => (
                <Product
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  quantity={product.quantity}
                  formatPrice={(price) => `R$${price.toFixed(2)}`}
                />
              ))}
            </div>
          </div>

          <OrderSummary subtotal={100} shipping="Grátis" tax={10} total={110} />
        </div>
      </main>
    </div>
  );
}
