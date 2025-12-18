import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { products, assets } from "@/lib/data";
import { ProductCard } from "@/components/product-card";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full overflow-hidden bg-secondary">
        <img
          src={assets.hero}
          alt="Lumière Hero"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container h-full flex flex-col justify-end pb-24 md:pb-32 px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-xl space-y-6"
          >
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-white leading-tight">
              Elevated Essentials.
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-md">
              Premium heavyweight cotton. Modern silhouettes. Designed for the everyday iconic.
            </p>
            <Link href="/shop">
              <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-none px-8">
                Shop Collection
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-medium">New Arrivals</h2>
              <p className="text-muted-foreground mt-2">Fresh form the studio.</p>
            </div>
            <Link href="/shop">
              <a className="hidden md:flex items-center gap-2 text-sm font-medium hover:underline underline-offset-4">
                View All <ArrowRight className="h-4 w-4" />
              </a>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link href="/shop">
              <Button variant="outline" className="w-full">View All Products</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Story Snippet */}
      <section className="py-20 bg-secondary/30">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square md:aspect-[4/5] overflow-hidden">
              <img 
                src={assets.studio} 
                alt="Fabric Detail" 
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="space-y-6 md:pl-12">
              <span className="text-sm uppercase tracking-widest text-muted-foreground">The Craft</span>
              <h2 className="font-heading text-3xl md:text-5xl font-medium leading-tight">
                Not just another hoodie.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We spent 18 months perfecting the weight, the drop-shoulder fit, and the wash. 
                Using 100% organic heavyweight cotton, our pieces are designed to age beautifully 
                with every wear.
              </p>
              <Link href="/about">
                <Button variant="link" className="px-0 text-base h-auto underline decoration-1 underline-offset-4">
                  Read our story
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
