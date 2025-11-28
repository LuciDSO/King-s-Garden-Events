import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-ballroom.jpg";

export function HeroSection() {
  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="King's Garden Events Grand Ballroom"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-gold/20 rounded-full animate-float opacity-30" />
      <div className="absolute bottom-40 right-20 w-20 h-20 border border-gold/20 rounded-full animate-float delay-500 opacity-30" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Tagline */}
        <p className="text-gold-light text-sm md:text-base tracking-[0.3em] uppercase font-medium mb-6 animate-fade-in-up opacity-0" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
          Suceava's Most Spectacular Wedding Venue
        </p>

        {/* Main Heading */}
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl xl:text-display-xl text-primary-foreground font-semibold mb-6 animate-fade-in-up opacity-0" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
          Where Elegance<br />
          <span className="text-gradient-gold">Becomes Experience</span>
        </h1>

        {/* Subheading */}
        <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light animate-fade-in-up opacity-0" style={{ animationDelay: "600ms", animationFillMode: "forwards" }}>
          A royal setting for unforgettable moments. Create your dream wedding at the most luxurious venue in Suceava.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up opacity-0" style={{ animationDelay: "800ms", animationFillMode: "forwards" }}>
          <Button variant="hero-gold" size="xl" asChild>
            <Link to="/contact">Book a Tour</Link>
          </Button>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">Request an Offer</Link>
          </Button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 animate-fade-in-up opacity-0" style={{ animationDelay: "1000ms", animationFillMode: "forwards" }}>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Star className="w-5 h-5 text-gold fill-gold" />
              <span className="text-2xl md:text-3xl font-serif font-semibold text-primary-foreground">4.8</span>
            </div>
            <p className="text-primary-foreground/60 text-sm">Rating</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-serif font-semibold text-primary-foreground mb-1">297+</p>
            <p className="text-primary-foreground/60 text-sm">Google Reviews</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-serif font-semibold text-primary-foreground mb-1">500+</p>
            <p className="text-primary-foreground/60 text-sm">Flawless Events</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-gold transition-colors duration-300 animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
