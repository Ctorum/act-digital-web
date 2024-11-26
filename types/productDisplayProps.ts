export interface ProductDisplayProps {
  name: string;
  price: number;
  image: string;
  quantity: number;
  formatPrice?: (price: number) => string;
}
