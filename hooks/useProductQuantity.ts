import { useState } from "react";

export const useProductQuantity = (initialQuantity: number) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => quantity > 1 && setQuantity(quantity - 1);

  return { quantity, increment, decrement };
};
