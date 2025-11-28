import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/shared/PageHero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, Users, Car, Wind, Music, Camera, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-ballroom.jpg";
import gardenImage from "@/assets/venue-garden.jpg";
import tableImage from "@/assets/table-setting.jpg";
import chandelierImage from "@/assets/chandelier.jpg";

const amenities = [
  { icon: Users, text: "Capacity up to 600 guests" },
  { icon: Car, text: "Large parking with attendants" },
  { icon: Wind, text: "Climate-controlled venue" },
  { icon: Music, text: "State-of-the-art sound system" },
  { icon: Camera, text: "Perfect photo opportunities" },
  { icon: Sparkles, text: "Professional lighting design" },
];

const galleryImages = [
  { src: heroImage, alt: "Grand Ballroom", category: "Hall" },
  { src: gardenImage, alt: "Garden Venue", category: "Exterior" },
  { src: tableImage, alt: "Table Setting", category: "Décor" },
  { src: chandelierImage, alt: "Crystal Chandelier", category: "Details" },
  { src: heroImage, alt: "Wedding Setup", category: "Weddings" },
  { src: gardenImage, alt: "Outdoor Area", category: "Exterior" },
];

const Venue = () => {
  return (
    <Layout>
      <PageHero
        title="Explore Our Venue"
        subtitle="A breathtaking setting for your most cherished celebrations"
        tagline="The Grand Hall"
        image={heroImage}
      />

      {/* Grand Hall Section */}
      <section className="py-section bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-sm overflow-hidden image-zoom image-frame">
                <img
                  src={heroImage}
                  alt="The Grand Hall"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-gold text-sm tracking-[0.3em] uppercase font-medium mb-4">
                The Heart of Celebrations
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                The <span className="text-gradient-gold">Grand Hall</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                <p>
                  Step into a world of opulence and grandeur. Our magnificent ballroom features spectacular crystal chandeliers that cast a warm, romantic glow over every celebration.
                </p>
                <p>
                  With soaring ceilings, elegant drapery, and impeccable décor, the Grand Hall provides the perfect canvas for your wedding vision. Accommodating up to 600 guests, it offers the flexibility for both intimate gatherings and grand celebrations.
                </p>
                <p>
                  Every detail has been carefully considered—from the state-of-the-art lighting system that can transform the ambiance throughout your event, to the acoustically-designed space that ensures every word and note is heard perfectly.
                </p>
              </div>
              <Button variant="gold" asChild>
                <Link to="/contact" className="inline-flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Schedule a Tour
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Garden Section */}
      <section className="py-section bg-gradient-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-gold text-sm tracking-[0.3em] uppercase font-medium mb-4">
                Outdoor Elegance
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                The <span className="text-gradient-gold">Gardens</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Our beautifully landscaped gardens offer a stunning backdrop for outdoor ceremonies, cocktail hours, and unforgettable photographs.
                </p>
                <p>
                  Manicured hedges, seasonal flower displays, and elegant pathways create an enchanting outdoor experience. As the sun sets, romantic string lights illuminate the space, creating a magical atmosphere that guests will remember forever.
                </p>
                <p>
                  The outdoor areas seamlessly connect to the Grand Hall, allowing your celebration to flow naturally between indoor elegance and outdoor charm.
                </p>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="aspect-[4/3] rounded-sm overflow-hidden image-zoom image-frame">
                <img
                  src={gardenImage}
                  alt="The Gardens"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-section bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-gold text-sm tracking-[0.3em] uppercase font-medium mb-4">
              Amenities
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Everything You <span className="text-gradient-gold">Need</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {amenities.map((amenity) => (
              <div
                key={amenity.text}
                className="text-center p-6 bg-accent/30 rounded-sm hover:bg-accent/50 transition-colors duration-300"
              >
                <amenity.icon className="w-8 h-8 text-gold mx-auto mb-3" />
                <p className="text-foreground/80 text-sm">{amenity.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-section bg-gradient-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-gold text-sm tracking-[0.3em] uppercase font-medium mb-4">
              Photo Gallery
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              A Visual <span className="text-gradient-gold">Journey</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-sm overflow-hidden image-zoom image-frame group"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/50 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-ivory opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm tracking-wider uppercase">
                    {image.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Venue;
