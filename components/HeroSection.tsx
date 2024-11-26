import Image from "next/image";
import { Button } from "./ui/button";
import { HeroSectionProps } from "@/types/heroProps";

export function HeroSection({
  title,
  description,
  buttonText,
  imageSrc,
  imageAlt,
}: HeroSectionProps) {
  return (
    <section className="bg-muted">
      <div className="container mx-auto px-4 py-16 grid gap-8 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{description}</p>
          <Button className="mt-6" size="lg">
            {buttonText}
          </Button>
        </div>
        <div className="aspect-[4/3] relative">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
