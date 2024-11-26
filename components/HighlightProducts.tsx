import Image from "next/image";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";

export function HighlightProducts() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {[
        {
          name: "Raw Black T-Shirt Lineup",
          price: "R$75.00",
          image: "/placeholder.svg",
        },
        {
          name: "Essential Neutrals",
          price: "R$22.00",
          image: "/placeholder.svg",
        },
        {
          name: "Classic White Tee",
          price: "R$45.00",
          image: "/placeholder.svg",
        },
        {
          name: "Premium Cotton Blend",
          price: "R$65.00",
          image: "/placeholder.svg",
        },
      ].map((product, index) => (
        <Card key={index}>
          <CardContent className="p-0">
            <div className="aspect-square relative">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
          </CardContent>
          <CardFooter className="p-4 flex-col items-start gap-2">
            <h3 className="font-medium">{product.name}</h3>
            <div className="flex items-center justify-between w-full">
              <span className="text-lg font-bold">{product.price}</span>
              <Button size="sm">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Adicionar
              </Button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
