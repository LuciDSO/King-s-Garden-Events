import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/shared/PageHero";
import { Heart, Users, Sparkles, Award, Clock, Shield } from "lucide-react";
import gardenImage from "@/assets/venue-garden.jpg";
import chandelierImage from "@/assets/chandelier.jpg";

const values = [
  {
    icon: Heart,
    title: "Passion for Perfection",
    description: "Every event we host is crafted with love and dedication, ensuring every detail exceeds expectations.",
  },
  {
    icon: Users,
    title: "Family-Owned Warmth",
    description: "Our family welcomes yours with genuine hospitality and personalized attention throughout your journey.",
  },
  {
    icon: Sparkles,
    title: "Attention to Detail",
    description: "From the grand chandeliers to the smallest décor element, we obsess over every detail of your celebration.",
  },
  {
    icon: Award,
    title: "Excellence in Service",
    description: "Our professional staff is trained to deliver impeccable service with warmth and efficiency.",
  },
  {
    icon: Clock,
    title: "15+ Years Experience",
    description: "Over a decade of creating magical moments has given us unmatched expertise in event excellence.",
  },
  {
    icon: Shield,
    title: "Trust & Reliability",
    description: "We treat every celebration as our own, ensuring peace of mind on your most important day.",
  },
];

const About = () => {
  return (
    <Layout>
      <PageHero
        title="Our Story"
        subtitle="Where every celebration becomes a cherished memory"
        tagline="A Venue Built for Fairytales"
        image={gardenImage}
      />

      {/* Story Section */}
      <section className="py-section bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-gold text-sm tracking-[0.3em] uppercase font-medium mb-4">
                About Us
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                A Legacy of <span className="text-gradient-gold">Elegance</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  King's Garden Events was born from a dream to create a venue where elegance meets warmth, where grand celebrations unfold in an atmosphere of pure magic. For over 15 years, we have been Suceava's premier destination for couples seeking the wedding of their dreams.
                </p>
                <p>
                  Our family-owned venue combines European sophistication with Romanian hospitality. Every crystal chandelier, every carefully placed flower, and every smile from our staff reflects our commitment to making your day extraordinary.
                </p>
                <p>
                  Described by our guests as "spectacular," "unforgettable," and "like a fairytale," King's Garden Events has become synonymous with perfection in the region. We don't just host events—we create lasting memories that families treasure for generations.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-sm overflow-hidden image-zoom image-frame">
                <img
                  src={chandelierImage}
                  alt="King's Garden Events interior"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-background p-6 shadow-elegant border border-gold/20 rounded-sm">
                <p className="text-4xl font-serif font-semibold text-gold mb-1">500+</p>
                <p className="text-muted-foreground text-sm">Happy Couples</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-section bg-gradient-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-gold text-sm tracking-[0.3em] uppercase font-medium mb-4">
              Our Values
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              What Makes Us <span className="text-gradient-gold">Special</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Our commitment to excellence is reflected in everything we do, guided by values that put your celebration first.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="group p-8 bg-background rounded-sm border border-border hover:border-gold/30 hover:shadow-elegant transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors duration-300">
                  <value.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Quote */}
      <section className="py-section bg-charcoal text-ivory">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gold text-sm tracking-[0.3em] uppercase font-medium mb-6">
              From Our Family
            </p>
            <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-ivory/90 font-light italic leading-relaxed mb-8">
              "We believe every couple deserves a wedding that feels like a dream come true. That's why we pour our hearts into every celebration, treating each event as if it were our own."
            </blockquote>
            <p className="text-ivory/70">— The King's Garden Family</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
