import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import collectionBg from "@assets/generated_images/pottery_bowls_hero_background_7c0e0809.jpg";

const products = [
  {
    id: 1,
    name: "Morning Bowl",
    description: "Perfect for porridge, soup, or pasta",
    price: "£42",
  },
  {
    id: 2,
    name: "Tea Cup Set",
    description: "Handthrown cups with organic forms",
    price: "£56",
  },
  {
    id: 3,
    name: "Serving Platter",
    description: "Large oval platter for sharing",
    price: "£78",
  },
];

export default function FeaturedCollectionSection() {
  return (
    <section id="collection" className="relative py-20 md:py-32 lg:py-40">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${collectionBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/60" />

      <div className="relative z-10 max-w-5xl mx-auto px-8">
        <div className="text-center mb-16 prose prose-invert mx-auto">
          <h2 className="text-white mb-6">
            Featured Collection
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto">
            Timeless pieces for everyday rituals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="backdrop-blur-sm bg-white/10 border-white/20 overflow-hidden hover-elevate"
              data-testid={`card-product-${product.id}`}
            >
              <CardContent className="p-8 prose prose-invert">
                <h3 className="text-white mb-3">
                  {product.name}
                </h3>
                <p className="text-white/80 mb-4">
                  {product.description}
                </p>
                <p className="text-lg font-medium text-white not-prose" data-testid={`text-price-${product.id}`}>
                  {product.price}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="rounded-full px-8 py-6 text-base backdrop-blur-md bg-white/10 border border-white/30 text-white hover:bg-white/20"
            data-testid="button-view-all"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}
