import { Category } from "./categoryProps";
import { Product } from "./fakeStore";

export interface ProductViewProps {
  products: Product[];
  categories: Category[];
  onCategoryChange: (id: string) => void;
  checkedCategories: string[];
}
