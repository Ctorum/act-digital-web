"use client";
import { ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { MainHeaderNav } from "./MainHeaderNav";
import { SearchBar } from "./SearchBar";
import { NavItem } from "@/types/navProps";

export function Header({ navItems }: { navItems: NavItem[] }) {
  return (
    <header className="border-b bg-background">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary" />
          <span className="text-xl font-semibold">Ecommerce</span>
        </Link>
        <MainHeaderNav items={navItems} />
        <div className="flex items-center gap-4">
          <SearchBar />
          <ThemeToggle />
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
