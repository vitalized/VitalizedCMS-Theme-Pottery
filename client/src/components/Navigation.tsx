import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="font-serif text-2xl font-light tracking-tight text-white">
            Dartmoor Pottery
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wider text-white/90">
            <a
              href="#collection"
              className="hover:text-white transition-colors"
              data-testid="link-collection"
            >
              Collection
            </a>
            <a
              href="#about"
              className="hover:text-white transition-colors"
              data-testid="link-about"
            >
              About
            </a>
            <a
              href="#studio"
              className="hover:text-white transition-colors"
              data-testid="link-studio"
            >
              Studio
            </a>
            <a
              href="#contact"
              className="hover:text-white transition-colors"
              data-testid="link-contact"
            >
              Contact
            </a>
          </div>

          <Button
            size="icon"
            variant="ghost"
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-menu-toggle"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-6 pt-6 border-t border-white/20">
            <div className="flex flex-col gap-4 text-sm uppercase tracking-wider text-white/90">
              <a
                href="#collection"
                className="hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                data-testid="link-mobile-collection"
              >
                Collection
              </a>
              <a
                href="#about"
                className="hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                data-testid="link-mobile-about"
              >
                About
              </a>
              <a
                href="#studio"
                className="hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                data-testid="link-mobile-studio"
              >
                Studio
              </a>
              <a
                href="#contact"
                className="hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                data-testid="link-mobile-contact"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
