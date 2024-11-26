import { CategoryFilterProps } from "@/types/categoryProps";
import { Checkbox } from "./ui/checkbox";

export function CategoryFilter({
  categories,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg">Categories</h2>
      <div className="space-y-2">
        {categories.map((category) => (
          <label key={category.id} className="flex items-center space-x-2">
            <Checkbox
              checked={category.checked}
              onCheckedChange={() => onCategoryChange(category.id)}
            />
            <span>{category.name}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
