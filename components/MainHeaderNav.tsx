import { MainNavProps } from "@/types/navProps";
import Link from "next/link";

export function MainHeaderNav({ items }: MainNavProps) {
  return (
    <nav className="hidden md:flex items-center gap-6">
      {items.map((item) => (
        <Link key={item.href} href={item.href} className="text-sm font-medium">
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
