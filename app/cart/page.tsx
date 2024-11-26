import { Minus, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { PromotionBanner } from "@/components/PromotionBanner";
import { Header } from "@/components/Header";

export default function CartPage() {
  return (
    <div className="min-h-screen bg-white">
      <PromotionBanner />
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="text-sm mb-6">
          <Link href="/" className="text-muted-foreground">
            Ecommerce
          </Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <span>Carrinho</span>
        </div>

        <h1 className="text-2xl font-semibold mb-8">Carrinho</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Seu Carrinho</h2>

            <div className="space-y-4">
              {/* Product 1 */}
              <div className="flex gap-4 p-4 border rounded-lg">
                <Image
                  src="/placeholder.svg"
                  alt="Raw Black T-Shirt"
                  width={80}
                  height={80}
                  className="rounded-md"
                />
                <div className="flex-1">
                  <h3 className="font-medium">Raw Black T-Shirt Lineup</h3>
                  <p className="text-lg font-semibold mt-1">R$75.00</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Button variant="outline" size="icon">
                      <Minus className="h-4 w-4" />
                    </Button>
                    <Input
                      type="number"
                      value="1"
                      className="w-16 text-center"
                    />
                    <Button variant="outline" size="icon">
                      <Plus className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="ml-auto">
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Product 2 */}
              <div className="flex gap-4 p-4 border rounded-lg">
                <Image
                  src="/placeholder.svg"
                  alt="Essential Neutrals"
                  width={80}
                  height={80}
                  className="rounded-md"
                />
                <div className="flex-1">
                  <h3 className="font-medium">Essential Neutrals</h3>
                  <p className="text-lg font-semibold mt-1">R$22.00</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Button variant="outline" size="icon">
                      <Minus className="h-4 w-4" />
                    </Button>
                    <Input
                      type="number"
                      value="1"
                      className="w-16 text-center"
                    />
                    <Button variant="outline" size="icon">
                      <Plus className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="ml-auto">
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="border rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">R$ 90.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Frete</span>
                  <span className="font-medium text-green-600">Gratis</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax</span>
                  <span className="font-medium">R$ 3.00</span>
                </div>
                <div className="border-t pt-3 flex justify-between font-medium">
                  <span>Total</span>
                  <span>R$ 100.00</span>
                </div>
              </div>
              <Button className="w-full mt-6">Checkout</Button>
              <Button variant="link" className="w-full mt-2">
                Continue na loja
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
