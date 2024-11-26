import { ProductCardProps } from "@/types/productCardProps";
import Image from "next/image";
export function ProductCard({
  src,
  alt,
  width,
  height,
  title,
  price,
  inStock = true,
}: ProductCardProps) {
  return (
    <div className="group">
      <div className="aspect-square bg-muted rounded-lg overflow-hidden">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform"
        />
      </div>
      <div className="mt-3 space-y-1">
        <h3 className="font-medium">{title}</h3>
        <div className="flex items-center justify-between text-sm">
          {inStock ? (
            <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded">
              IN STOCK
            </span>
          ) : (
            <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded">
              OUT OF STOCK
            </span>
          )}
          <span className="font-semibold">{price}</span>
        </div>
      </div>
    </div>
  );
}
