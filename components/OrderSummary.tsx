import { OrderSummaryProps } from "@/types/orderSummaryProps";
import { Button } from "./ui/button";

export const OrderSummary = ({
  subtotal,
  shipping,
  tax,
  total,
}: OrderSummaryProps) => {
  return (
    <div className="lg:col-span-1">
      <div className="border rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Subtotal</span>
            <span className="font-medium">R$ {subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Frete</span>
            <span className="font-medium text-green-600">{shipping}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Tax</span>
            <span className="font-medium">R$ {tax.toFixed(2)}</span>
          </div>
          <div className="border-t pt-3 flex justify-between font-medium">
            <span>Total</span>
            <span>R$ {total.toFixed(2)}</span>
          </div>
        </div>
        <Button className="w-full mt-6">Checkout</Button>
        <Button variant="link" className="w-full mt-2">
          Continue na loja
        </Button>
      </div>
    </div>
  );
};
