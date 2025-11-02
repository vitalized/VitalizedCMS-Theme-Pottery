import { Instagram, Facebook, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-card-border py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-serif text-xl mb-4 text-card-foreground">Shop</h3>
            <ul className="space-y-3 font-sans text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors" data-testid="link-bowls">
                  Bowls
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors" data-testid="link-cups">
                  Cups & Mugs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors" data-testid="link-plates">
                  Plates & Platters
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors" data-testid="link-vases">
                  Vases
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-xl mb-4 text-card-foreground">About</h3>
            <ul className="space-y-3 font-sans text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors" data-testid="link-our-story">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors" data-testid="link-process">
                  The Process
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors" data-testid="link-workshops">
                  Workshops
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors" data-testid="link-sustainability">
                  Sustainability
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-xl mb-4 text-card-foreground">Connect</h3>
            <ul className="space-y-3 mb-6">
              <li className="font-sans text-sm text-muted-foreground">
                hello@dartmoorpottery.co.uk
              </li>
              <li className="font-sans text-sm text-muted-foreground">
                +44 (0) 1364 621 234
              </li>
            </ul>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-card-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-sm text-muted-foreground">
            © 2025 Dartmoor Pottery. All rights reserved.
          </p>
          <div className="flex gap-6 font-sans text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors" data-testid="link-privacy">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors" data-testid="link-terms">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
