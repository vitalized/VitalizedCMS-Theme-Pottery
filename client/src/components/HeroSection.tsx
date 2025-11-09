import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/pottery_bowls_hero_background_7c0e0809.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 text-center prose prose-invert mx-auto">
        <h1 className="text-white mb-6 leading-tight">
          Dartmoor
          <br />
          Pottery
        </h1>
        <p className="text-white/90 mb-12 max-w-2xl mx-auto">
          Handcrafted ceramics from the heart of Devon
        </p>
        <Button
          size="lg"
          className="rounded-full px-8 py-6 text-base backdrop-blur-md bg-white/10 border border-white/30 text-white hover:bg-white/20"
          data-testid="button-explore"
        >
          Explore Collection
        </Button>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
