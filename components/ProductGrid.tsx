import { Product } from "@/types/fakeStore";
import { ProductCard } from "./ProductCard";

export function ProductGrid({
  products,
  show = [],
}: {
  products: Product[];
  show?: string[];
}) {
  return (
    <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          src={product.image}
          alt={product.description}
          width={300}
          height={300}
          title={product.title}
          price={product.price.toString()}
          inStock={product.id % 2 === 0}
          show={show.length === 0 || show.includes(product.category)}
        />
      ))}
    </div>
  );
}
