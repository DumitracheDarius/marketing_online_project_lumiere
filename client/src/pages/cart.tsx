import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

export default function Cart() {
  const [cartItems, setCartItems] = useState<any[]>([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(items);
  }, []);

  const removeFromCart = (cartId: number) => {
    const newItems = cartItems.filter(item => item.cartId !== cartId);
    setCartItems(newItems);
    localStorage.setItem("cart", JSON.stringify(newItems));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <Layout>
      <div className="container px-4 md:px-6 py-12 md:py-20">
        <h1 className="font-heading text-4xl font-medium mb-12">Your Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-20 border rounded-lg bg-secondary/20">
            <p className="text-lg text-muted-foreground mb-6">Your bag is empty.</p>
            <Link href="/shop">
              <Button size="lg">Continue Shopping</Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <div key={item.cartId} className="flex gap-6 py-6 border-b">
                  <div className="h-24 w-20 bg-secondary flex-shrink-0 overflow-hidden">
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex-1 flex justify-between">
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">Size: {item.size}</p>
                      <p className="text-sm text-muted-foreground mt-1">${item.price}</p>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.cartId)}
                      className="text-muted-foreground hover:text-destructive self-start"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-secondary/30 p-8 h-fit space-y-6">
              <h3 className="font-heading text-xl font-medium">Summary</h3>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="pt-4 border-t flex justify-between font-medium text-base">
                  <span>Total</span>
                  <span>${subtotal}</span>
                </div>
              </div>
              <Link href="/checkout">
                <Button className="w-full h-12 rounded-none">Proceed to Checkout</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
