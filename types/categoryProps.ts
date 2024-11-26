export interface Category {
  id: string;
  name: string;
  checked?: boolean;
}

export interface CategoryFilterProps {
  categories: Category[];
  onCategoryChange: (categoryId: string) => void;
}
