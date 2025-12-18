import { Link } from "wouter";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    images: string[];
    category: string;
  };
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`}>
      <a className="group block cursor-pointer">
        <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            src={product.images[0]}
            alt={product.name}
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/5" />
        </div>
        <div className="mt-4 flex justify-between items-start">
          <div>
            <h3 className="text-sm font-medium text-foreground group-hover:underline decoration-1 underline-offset-4">
              {product.name}
            </h3>
            <p className="mt-1 text-xs text-muted-foreground">{product.category}</p>
          </div>
          <p className="text-sm font-medium">${product.price}</p>
        </div>
      </a>
    </Link>
  );
}
