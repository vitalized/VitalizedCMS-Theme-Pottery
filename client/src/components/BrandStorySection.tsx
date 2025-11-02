export default function BrandStorySection() {
  return (
    <section id="about" className="py-20 md:py-32 lg:py-40 bg-background">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-2">
            <blockquote className="font-serif text-3xl md:text-4xl font-light leading-tight text-foreground">
              "Every piece tells a story of earth, fire, and human touch."
            </blockquote>
          </div>

          <div className="lg:col-span-3 space-y-6 font-sans text-base md:text-lg leading-relaxed text-foreground">
            <p>
              In our small studio nestled in the Devon countryside, we create pottery that honors both tradition and contemporary life. Each piece is shaped by hand, guided by generations of craft knowledge and a deep respect for the materials we work with.
            </p>
            <p>
              Our ceramics are made to be used daily—to hold your morning coffee, serve family meals, or bring beauty to quiet moments. We believe that functional objects should nourish both body and soul.
            </p>
            <p className="text-muted-foreground">
              From locally sourced clay to hand-mixed glazes inspired by Dartmoor's ancient landscape, every choice we make reflects our commitment to sustainability and timeless design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
