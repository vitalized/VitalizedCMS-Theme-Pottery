import craftsmanshipImage from "@assets/generated_images/pottery_craftsmanship_background_b336f122.jpg";

export default function CraftsmanshipSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
      <div
        className="relative bg-cover bg-center min-h-[400px] lg:min-h-0"
        style={{ backgroundImage: `url(${craftsmanshipImage})` }}
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="flex items-center justify-center bg-background p-8 md:p-12 lg:p-16">
        <div className="max-w-xl">
          <h2 className="font-serif font-light text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 tracking-tight leading-tight">
            Traditional Craft,
            <br />
            Modern Life
          </h2>
          <p className="font-sans text-base md:text-lg leading-relaxed text-foreground mb-6">
            Each piece begins as raw clay on the wheel, shaped by skilled hands that understand the delicate balance between intention and intuition.
          </p>
          <p className="font-sans text-base md:text-lg leading-relaxed text-foreground mb-6">
            We fire our work slowly, allowing natural variations in glaze and form that make every piece unique. These beautiful imperfections are a reminder of the human touch behind each creation.
          </p>
          <p className="font-sans text-sm uppercase tracking-wider text-muted-foreground">
            Made in Devon since 2015
          </p>
        </div>
      </div>
    </section>
  );
}
