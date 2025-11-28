import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/shared/PageHero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Baby, Briefcase, PartyPopper, CalendarCheck, Users } from "lucide-react";
import gardenImage from "@/assets/venue-garden.jpg";
import heroImage from "@/assets/hero-ballroom.jpg";

const services = [
  {
    icon: Heart,
    title: "Weddings",
    description: "Create the wedding of your dreams in our spectacular venue. From intimate ceremonies to grand celebrations, we bring your vision to life with elegance and perfection.",
    features: [
      "Breathtaking grand ballroom",
      "Stunning outdoor ceremony options",
      "Customizable décor packages",
      "Full coordination services",
      "Bridal suite amenities",
    ],
  },
  {
    icon: Baby,
    title: "Baptisms & Family Celebrations",
    description: "Welcome your little one into the world surrounded by loved ones in an elegant, family-friendly atmosphere designed for joy and celebration.",
    features: [
      "Intimate venue options",
      "Child-friendly menu choices",
      "Adaptable décor themes",
      "Photography-ready spaces",
      "Dedicated event coordinator",
    ],
  },
  {
    icon: Briefcase,
    title: "Corporate Events",
    description: "Impress clients and colleagues in a venue that speaks volumes about your commitment to excellence. Professional settings with world-class hospitality.",
    features: [
      "Conference room setups",
      "Presentation equipment",
      "Gourmet catering options",
      "Breakout session spaces",
      "Team building opportunities",
    ],
  },
  {
    icon: PartyPopper,
    title: "Private Celebrations",
    description: "Whether it's a milestone birthday, anniversary, or special gathering, celebrate life's moments in style with our exceptional venue and services.",
    features: [
      "Flexible space configurations",
      "Custom theme execution",
      "Entertainment coordination",
      "Personalized menus",
      "Full-service planning",
    ],
  },
];

const planningServices = [
  {
    icon: CalendarCheck,
    title: "Event Planning Support",
    description: "Our experienced team guides you through every step, from initial consultation to the final farewell. We handle the details so you can enjoy the moment.",
  },
  {
    icon: Users,
    title: "Dedicated Coordinators",
    description: "A personal event coordinator works closely with you to understand your vision and ensure every element is executed flawlessly on your special day.",
  },
];

const Services = () => {
  return (
    <Layout>
      <PageHero
        title="Our Services"
        subtitle="Perfect events, seamlessly delivered"
        tagline="Exceptional Experiences"
        image={heroImage}
      />

      {/* Services Grid */}
      <section className="py-section bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-gold text-sm tracking-[0.3em] uppercase font-medium mb-4">
              What We Offer
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Events for <span className="text-gradient-gold">Every Occasion</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              From dream weddings to corporate excellence, we provide exceptional venues and services for all your celebration needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group p-8 bg-card rounded-sm border border-border hover:border-gold/30 hover:shadow-elegant transition-all duration-500"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center group-hover:bg-gold/10 transition-colors duration-300">
                    <service.icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="font-serif text-2xl font-medium text-foreground">
                    {service.title}
                  </h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                      <span className="text-foreground/80 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planning Services */}
      <section className="py-section bg-gradient-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-sm overflow-hidden image-zoom image-frame">
                <img
                  src={gardenImage}
                  alt="Event planning at King's Garden"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-gold text-sm tracking-[0.3em] uppercase font-medium mb-4">
                Full Support
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">
                Planning Made <span className="text-gradient-gold">Effortless</span>
              </h2>
              <div className="space-y-6">
                {planningServices.map((service) => (
                  <div key={service.title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-medium text-foreground mb-2">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-section bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-gold text-sm tracking-[0.3em] uppercase font-medium mb-4">
              Our Process
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              From Vision to <span className="text-gradient-gold">Reality</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Consultation", desc: "Share your vision and requirements" },
              { step: "02", title: "Planning", desc: "Design every detail together" },
              { step: "03", title: "Coordination", desc: "We handle all the logistics" },
              { step: "04", title: "Celebration", desc: "Enjoy your perfect event" },
            ].map((item) => (
              <div key={item.step} className="text-center p-6">
                <span className="text-5xl font-serif font-bold text-gold/20 mb-4 block">
                  {item.step}
                </span>
                <h3 className="font-serif text-xl font-medium text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section bg-charcoal text-ivory">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-gold text-sm tracking-[0.3em] uppercase font-medium mb-4">
            Ready to Begin?
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-ivory mb-6 max-w-2xl mx-auto">
            Let's Create Something <span className="text-gradient-gold">Extraordinary</span>
          </h2>
          <p className="text-ivory/70 max-w-xl mx-auto mb-8">
            Contact us to discuss your event needs and discover how we can make your celebration unforgettable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="xl" asChild>
              <Link to="/contact">Request Information</Link>
            </Button>
            <Button variant="hero" size="xl" asChild>
              <Link to="/venue">Explore Our Venue</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
