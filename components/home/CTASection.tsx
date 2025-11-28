import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Phone } from "lucide-react";
import gardenImage from "@/assets/venue-garden.jpg";

export function CTASection() {
  return (
    <section className="relative py-section overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={gardenImage}
          alt="King's Garden Events"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <p className="text-gold text-sm tracking-[0.3em] uppercase font-medium mb-4">
          Begin Your Journey
        </p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ivory mb-6 max-w-3xl mx-auto">
          Ready to Create Your <span className="text-gradient-gold">Dream Event?</span>
        </h2>
        <p className="text-ivory/80 text-lg max-w-2xl mx-auto mb-10">
          Let us transform your vision into reality. Schedule a private tour of our venue and discover why King's Garden Events is the premier choice for unforgettable celebrations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="gold" size="xl" asChild>
            <Link to="/contact" className="inline-flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Book a Private Tour
            </Link>
          </Button>
          <Button variant="hero" size="xl" asChild>
            <a href="tel:+40123456789" className="inline-flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
