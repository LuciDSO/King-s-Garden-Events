import { Crown, Sparkles, Heart, Users } from "lucide-react";
import chandelierImage from "@/assets/chandelier.jpg";

const highlights = [
  {
    icon: Crown,
    title: "Royal Ambiance",
    description: "Spectacular chandeliers, elegant décor, and an opulent atmosphere that transforms every event into a fairytale.",
  },
  {
    icon: Sparkles,
    title: "Impeccable Service",
    description: "Our dedicated staff ensures every detail is perfect, with warm hospitality and professional attention throughout.",
  },
  {
    icon: Heart,
    title: "Personalized Experience",
    description: "Work directly with our team to customize every aspect of your celebration, from décor to menu selections.",
  },
  {
    icon: Users,
    title: "Grand Capacity",
    description: "Our magnificent hall accommodates up to 600 guests, perfect for intimate gatherings or grand celebrations.",
  },
];

export function HighlightsSection() {
  return (
    <section className="py-section bg-gradient-section relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-gold text-sm tracking-[0.3em] uppercase font-medium mb-4">
            Why Choose Us
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-heading-xl text-foreground mb-6">
            A Venue Built for <span className="text-gradient-gold">Fairytales</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Every detail at King's Garden Events is designed to create an unforgettable experience for you and your guests.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden image-zoom image-frame">
              <img
                src={chandelierImage}
                alt="Spectacular chandelier at King's Garden Events"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -right-6 bg-background p-6 shadow-elegant border border-gold/20 rounded-sm">
              <p className="text-4xl font-serif font-semibold text-gold mb-1">15+</p>
              <p className="text-muted-foreground text-sm">Years of Excellence</p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="order-1 lg:order-2 grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="group p-6 bg-background rounded-sm border border-border hover:border-gold/30 hover:shadow-elegant transition-all duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mb-4 group-hover:bg-gold/10 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-serif text-lg font-medium text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
