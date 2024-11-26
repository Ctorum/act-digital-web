import { Search, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="border-b bg-primary-foreground">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary" />
          <span className="text-xl font-semibold">Ecommerce</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium">
            Home
          </Link>
          <Link href="/categorias" className="text-sm font-medium">
            Categorias
          </Link>
          <Link href="/sobre" className="text-sm font-medium">
            Sobre
          </Link>
          <Link href="/contato" className="text-sm font-medium">
            Contato
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <div className="relative hidden md:block w-[200px] lg:w-[300px]">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Procure um produto" className="pl-8" />
          </div>
          <Link href="/cart">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </Link>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
