import { ProductCard } from "./ProductCard";

export function ProductGrid() {
  return (
    <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <ProductCard
        src="/path/to/image.jpg"
        alt="Product image"
        width={300}
        height={300}
        title="Product Title"
        price="$99.99"
      />
      <ProductCard
        src="/path/to/image.jpg"
        alt="Product image"
        width={300}
        height={300}
        title="Product Title"
        price="$99.99"
        inStock={false}
      />
    </div>
  );
}
