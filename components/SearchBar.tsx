import { Search } from "lucide-react";
import { Input } from "./ui/input";

export function SearchBar() {
  return (
    <div className="relative hidden md:block w-[200px] lg:w-[300px]">
      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input placeholder="Procure um produto" className="pl-8" />
    </div>
  );
}
