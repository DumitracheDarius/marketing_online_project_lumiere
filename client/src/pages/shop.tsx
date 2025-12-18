import { Layout } from "@/components/layout";
import { products } from "@/lib/data";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";

export default function Shop() {
  return (
    <Layout>
      <div className="pt-12 pb-24 container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-12 space-y-4 md:space-y-0">
          <div>
            <h1 className="font-heading text-4xl md:text-5xl font-medium">Shop All</h1>
            <p className="text-muted-foreground mt-2">The complete collection.</p>
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
            <Button variant="default" size="sm" className="rounded-full px-6">All</Button>
            <Button variant="outline" size="sm" className="rounded-full px-6">Essentials</Button>
            <Button variant="outline" size="sm" className="rounded-full px-6">Limited</Button>
            <Button variant="outline" size="sm" className="rounded-full px-6">Accessories</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-12 gap-x-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {/* Duplicating products to fill grid for demo */}
          {products.map((product) => (
            <ProductCard key={`${product.id}-dup`} product={{...product, id: product.id + 10}} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
