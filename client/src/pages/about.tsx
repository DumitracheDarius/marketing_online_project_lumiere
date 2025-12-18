import { Layout } from "@/components/layout";
import { assets } from "@/lib/data";

export default function About() {
  return (
    <Layout>
      <div className="w-full">
        {/* Hero */}
        <div className="relative h-[60vh] w-full overflow-hidden">
          <img
            src={assets.studio}
            alt="Design Studio"
            className="absolute inset-0 h-full w-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative container h-full flex items-center justify-center text-center px-4">
            <div className="max-w-2xl space-y-6">
              <h1 className="font-heading text-5xl md:text-6xl font-bold text-white">
                The Art of Slow Fashion.
              </h1>
            </div>
          </div>
        </div>

        {/* Story */}
        <section className="py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto space-y-8 text-center md:text-left">
              <h2 className="font-heading text-3xl font-medium">From Sketch to Stitch.</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                LUMIÈRE was born from a simple frustration: the inability to find the perfect hoodie. 
                One that wasn't too sporty, too sloppy, or too thin. We wanted something that felt 
                substantial, looked elevated, and could be worn from a coffee run to a casual dinner.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our design process is reductive. We strip away the unnecessary logos, strings, excessive
                hardware to focus on what matters: the fabric and the fit.
              </p>
            </div>
          </div>
        </section>

        {/* Founders */}
        <section className="bg-muted py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto space-y-8 text-center">
              <h2 className="font-heading text-3xl font-medium">Meet the Founders</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                LUMIÈRE was founded by two friends, Radu Maria-Cristina and Porumboiu Diana, who share a passion for design and a commitment to quality. Their vision was to create a brand that offers timeless pieces that are both beautiful and functional.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
