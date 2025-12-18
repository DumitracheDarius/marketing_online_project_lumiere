import { useRoute, Link } from "wouter";
import { Layout } from "@/components/layout";
import { products, assets } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Star, Truck, ShieldCheck, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import NotFound from "./not-found";

export default function Product() {
  const [match, params] = useRoute("/product/:id");
  const { toast } = useToast();
  const [size, setSize] = useState("M");

  if (!match) return <NotFound />;

  const productId = parseInt(params.id);
  const product = products.find((p) => p.id === productId);

  if (!product) return <NotFound />;

  const handleAddToCart = () => {
    // In a real app, this would update context
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push({ ...product, size, cartId: Date.now() });
    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new CustomEvent('cart-updated'));

    toast({
      title: "Added to cart",
      description: `${product.name} - Size ${size}`,
    });
  };

  return (
    <Layout>
      <div className="container px-4 md:px-6 py-8 md:py-12">
        <Link href="/shop">
          <a className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Shop
          </a>
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-secondary w-full overflow-hidden">
              <img 
                src={product.images[0]} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <div key={index} className="aspect-square bg-secondary overflow-hidden">
                  <img src={image} alt={`${product.name} detail ${index + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <div className="mb-2 text-sm font-medium text-accent">New Arrival</div>
            <h1 className="font-heading text-4xl md:text-5xl font-medium mb-4">{product.name}</h1>
            <div className="text-2xl font-medium mb-8">${product.price}</div>

            <p className="text-muted-foreground leading-relaxed mb-8">
              {product.description} Designed for superior comfort and durability, 
              this piece features our proprietary heavyweight cotton fleece 
              and signature relaxed fit.
            </p>

            <div className="space-y-6 mb-8">
              <div>
                <label className="text-sm font-medium block mb-3">Size</label>
                <div className="flex gap-3">
                  {["XS", "S", "M", "L", "XL"].map((s) => (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      className={`h-12 w-12 flex items-center justify-center border transition-all ${
                        size === s 
                          ? "border-primary bg-primary text-primary-foreground" 
                          : "border-input hover:border-primary"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <Button onClick={handleAddToCart} size="lg" className="w-full h-14 text-base rounded-none mb-8">
              Add to Cart - ${product.price}
            </Button>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t">
              <div className="flex flex-col items-center text-center gap-2">
                <Truck className="h-5 w-5 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">Free Shipping Over $150</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <ShieldCheck className="h-5 w-5 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">Lifetime Guarantee</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <Star className="h-5 w-5 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">4.9/5 Average Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
