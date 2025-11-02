import locationBg from "@assets/generated_images/dartmoor_landscape_background_6d2d9057.jpg";
import { MapPin, Clock } from "lucide-react";

export default function LocationSection() {
  return (
    <section id="studio" className="relative py-20 md:py-32 lg:py-40">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${locationBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/60" />

      <div className="relative z-10 max-w-2xl mx-auto px-8 text-center">
        <h2 className="font-serif font-light text-5xl md:text-6xl text-white mb-8 tracking-tight">
          Visit Our Studio
        </h2>
        <p className="font-sans text-lg md:text-xl text-white/90 mb-12 leading-relaxed">
          Experience the making process firsthand in our workshop on the edge of Dartmoor National Park.
        </p>

        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-md p-8 md:p-12 space-y-8">
          <div className="flex items-start gap-4 text-left">
            <MapPin className="h-6 w-6 text-white/80 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-sans text-base font-medium text-white mb-2">Location</h3>
              <p className="font-sans text-base text-white/80 leading-relaxed">
                The Old Mill House
                <br />
                Widecombe-in-the-Moor
                <br />
                Devon, TQ13 7TB
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 text-left">
            <Clock className="h-6 w-6 text-white/80 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-sans text-base font-medium text-white mb-2">Studio Hours</h3>
              <p className="font-sans text-base text-white/80 leading-relaxed">
                Thursday - Saturday: 10am - 5pm
                <br />
                Sunday: 11am - 4pm
                <br />
                <span className="text-sm text-white/60 mt-2 block">
                  Appointments recommended for workshop visits
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
