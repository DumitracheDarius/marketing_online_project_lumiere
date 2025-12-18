import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { CheckCircle2, Loader2 } from "lucide-react";

const checkoutSchema = z.object({
  email: z.string().email(),
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  address: z.string().min(5),
  city: z.string().min(2),
  zip: z.string().min(2),
  cardNumber: z.string().min(16).max(16),
  expiry: z.string().min(5), // MM/YY
  cvc: z.string().min(3).max(4),
});

export default function Checkout() {
  const { toast } = useToast();
  const [, setLocation] = useLocation();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartItems, setCartItems] = useState<any[]>([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart") || "[]");
    const total = items.reduce((sum: number, item: any) => sum + item.price, 0);
    setCartTotal(total);
    setCartItems(items);
  }, []);

  const form = useForm<z.infer<typeof checkoutSchema>>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      zip: "",
      cardNumber: "",
      expiry: "",
      cvc: "",
    },
  });

  function onSubmit(values: z.infer<typeof checkoutSchema>) {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      localStorage.removeItem("cart");
      toast({
        title: "Order Confirmed",
        description: "Thank you for your purchase!",
      });
    }, 2000);
  }

  if (isSuccess) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex flex-col items-center justify-center p-4 text-center">
          <CheckCircle2 className="h-16 w-16 text-accent mb-6" />
          <h1 className="font-heading text-3xl font-medium mb-2">Order Confirmed</h1>
          <p className="text-muted-foreground mb-8">
            Thank you for your order! We'll send a confirmation email shortly.
          </p>
          <Link href="/">
            <Button size="lg">Return Home</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container px-4 md:px-6 py-12 md:py-20">
        <h1 className="font-heading text-3xl font-medium mb-12">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              
              {/* Contact Info */}
              <div className="space-y-4">
                <h3 className="font-medium text-lg">Contact Information</h3>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="you@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Shipping Address */}
              <div className="space-y-4">
                <h3 className="font-medium text-lg">Shipping Address</h3>
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Input placeholder="123 Street Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>City</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="zip"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>ZIP Code</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Payment Mockup */}
              <div className="space-y-4 pt-8 border-t">
                <h3 className="font-medium text-lg">Payment Details</h3>
                <div className="bg-secondary/30 p-4 rounded-md text-sm text-muted-foreground mb-4">
                  This is a secure mockup payment. No real charge will be made.
                </div>
                <FormField
                  control={form.control}
                  name="cardNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Card Number</FormLabel>
                      <FormControl>
                        <Input placeholder="0000 0000 0000 0000" maxLength={16} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="expiry"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Expiry (MM/YY)</FormLabel>
                        <FormControl>
                          <Input placeholder="MM/YY" maxLength={5} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="cvc"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>CVC</FormLabel>
                        <FormControl>
                          <Input placeholder="123" maxLength={4} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full rounded-none" disabled={isProcessing}>
                {isProcessing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing...
                  </>
                ) : (
                  `Pay $${cartTotal}`
                )}
              </Button>
            </form>
          </Form>

          {/* Order Summary */}
          <div className="hidden lg:block bg-secondary/20 p-8 h-fit">
             <h3 className="font-medium text-lg mb-6">Order Summary</h3>
             <div className="space-y-4">
                {cartItems.map((item) => (
                    <div key={item.cartId} className="flex gap-4">
                        <div className="h-20 w-16 bg-secondary flex-shrink-0 overflow-hidden">
                            <img src={item.images[0]} alt={item.name} className="h-full w-full object-cover" />
                        </div>
                        <div className="flex-1 flex justify-between">
                            <div>
                                <h4 className="font-medium text-sm">{item.name}</h4>
                                <p className="text-xs text-muted-foreground mt-1">Size: {item.size}</p>
                            </div>
                            <p className="text-sm font-medium">${item.price}</p>
                        </div>
                    </div>
                ))}
               <div className="flex justify-between font-medium text-xl pt-4 border-t">
                 <span>Total</span>
                 <span>${cartTotal}</span>
               </div>
             </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
