import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-ballroom.jpg";
import gardenImage from "@/assets/venue-garden.jpg";
import tableImage from "@/assets/table-setting.jpg";
import chandelierImage from "@/assets/chandelier.jpg";

const galleryImages = [
  { src: heroImage, alt: "Grand Ballroom", span: "col-span-2 row-span-2" },
  { src: gardenImage, alt: "Garden Venue", span: "col-span-1 row-span-1" },
  { src: tableImage, alt: "Table Setting", span: "col-span-1 row-span-1" },
  { src: chandelierImage, alt: "Crystal Chandelier", span: "col-span-2 row-span-1" },
];

export function GalleryPreview() {
  return (
    <section className="py-section bg-gradient-section">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-gold text-sm tracking-[0.3em] uppercase font-medium mb-4">
            Gallery
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-heading-xl text-foreground mb-6">
            Glimpses of <span className="text-gradient-gold">Elegance</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our stunning venue through the lens of countless magical celebrations.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={cn(
                "relative overflow-hidden rounded-sm image-zoom image-frame aspect-square",
                image.span
              )}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-charcoal/0 hover:bg-charcoal/30 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="gold-outline" asChild>
            <Link to="/venue" className="inline-flex items-center gap-2">
              View Full Gallery
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
