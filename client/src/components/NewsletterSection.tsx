import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    toast({
      title: "Thank you for subscribing!",
      description: "We'll keep you updated on new collections and studio news.",
    });
    setEmail("");
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="max-w-3xl mx-auto px-8 text-center">
        <h2 className="text-foreground mb-6">
          Stay Connected
        </h2>
        <p className="font-sans text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
          Subscribe to receive updates about new collections, studio workshops, and the occasional story from the wheel.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
          <Input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 h-12 text-base"
            data-testid="input-email"
          />
          <Button
            type="submit"
            size="lg"
            className="h-12 px-8 whitespace-nowrap"
            data-testid="button-subscribe"
          >
            Subscribe
          </Button>
        </form>

        <p className="font-sans text-sm text-muted-foreground mt-6">
          We respect your privacy and send emails sparingly.
        </p>
      </div>
    </section>
  );
}
