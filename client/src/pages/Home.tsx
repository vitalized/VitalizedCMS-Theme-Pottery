import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import BrandStorySection from "@/components/BrandStorySection";
import FeaturedCollectionSection from "@/components/FeaturedCollectionSection";
import CraftsmanshipSection from "@/components/CraftsmanshipSection";
import LocationSection from "@/components/LocationSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <BrandStorySection />
      <FeaturedCollectionSection />
      <CraftsmanshipSection />
      <LocationSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}
