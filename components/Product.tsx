import { Minus, Plus, X } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import { Input } from "./ui/input";
import { ProductDisplayProps } from "@/types/productDisplayProps";
import { useProductQuantity } from "@/hooks/useProductQuantity";

export function Product({
  name,
  price,
  image,
  quantity: initialQuantity,
  formatPrice = (price) => `R$${price.toFixed(2)}`,
}: ProductDisplayProps) {
  const { quantity, increment, decrement } =
    useProductQuantity(initialQuantity);

  return (
    <div className="flex gap-4 p-4 border rounded-lg">
      <Image
        src={image}
        alt={name}
        width={80}
        height={80}
        className="rounded-md"
      />
      <div className="flex-1">
        <h3 className="font-medium">{name}</h3>
        <p className="text-lg font-semibold mt-1">{formatPrice(price)}</p>
        <div className="flex items-center gap-2 mt-2">
          <Button variant="outline" size="icon" onClick={decrement}>
            <Minus className="h-4 w-4" />
          </Button>
          <Input
            type="number"
            value={quantity}
            className="w-16 text-center"
            readOnly
          />
          <Button variant="outline" size="icon" onClick={increment}>
            <Plus className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="ml-auto">
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
