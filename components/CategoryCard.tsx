import Image from "next/image";
import Link from "next/link";
import Shirts from "@/public/shirts.jpg";
import Jeans from "@/public/jeans.jpg";
import Acessories from "@/public/acessories.jpg";

export function CategoryCard() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {[
        {
          name: "Camisetas",
          image: Shirts,
        },
        { name: "Calças", image: Jeans },
        { name: "Acessórios", image: Acessories },
      ].map((category, index) => (
        <Link key={index} href={`/categorias/${category.name.toLowerCase()}`}>
          <div className="group relative aspect-[2/1] overflow-hidden rounded-lg">
            <Image
              src={category.image}
              alt={category.name}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <h3 className="text-white text-2xl font-bold">{category.name}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
