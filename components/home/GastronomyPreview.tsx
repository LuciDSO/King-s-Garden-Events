import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import gourmetDish from "@/assets/gourmet-dish.jpg";
import tableSetting from "@/assets/table-setting.jpg";

export function GastronomyPreview() {
  return (
    <section className="py-section bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-gold text-sm tracking-[0.3em] uppercase font-medium mb-4">
              Culinary Excellence
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-heading-xl text-foreground mb-6">
              Fine Dining for <span className="text-gradient-gold">Every Guest</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Our award-winning culinary team creates sophisticated menus that delight every palate. From elegant starters to decadent desserts, each dish is a masterpiece of flavor and presentation.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Personalized menu consultations with our chef",
                "Fresh, locally-sourced premium ingredients",
                "Customizable options for all dietary needs",
                "Exclusive menu tasting sessions",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
            <Button variant="gold-outline" asChild>
              <Link to="/menu" className="inline-flex items-center gap-2">
                Explore Our Menu
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-5 gap-4">
              <div className="col-span-3 aspect-[4/5] rounded-sm overflow-hidden image-zoom image-frame">
                <img
                  src={gourmetDish}
                  alt="Gourmet cuisine at King's Garden Events"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-2 mt-12 aspect-[3/4] rounded-sm overflow-hidden image-zoom image-frame">
                <img
                  src={tableSetting}
                  alt="Elegant table setting"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-gold/10 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
