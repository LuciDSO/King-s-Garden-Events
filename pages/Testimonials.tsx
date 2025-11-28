import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/shared/PageHero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star, Quote } from "lucide-react";
import heroImage from "@/assets/hero-ballroom.jpg";

const testimonials = [
  {
    name: "Ana & Mihai Popescu",
    event: "Wedding, June 2024",
    text: "From the moment we stepped into King's Garden, we knew it was the venue for our wedding. The grand ballroom took our breath away, and the staff made us feel like royalty throughout the entire planning process. On our wedding day, everything was absolutely perfect—the décor, the food, the service. Our guests are still talking about it!",
    rating: 5,
  },
  {
    name: "Elena & Cristian Ionescu",
    event: "Wedding, September 2024",
    text: "A truly unforgettable experience! The attention to detail was impeccable, from the stunning chandeliers to the beautifully plated dishes. The staff anticipated our every need, and our coordinator was always one step ahead. This venue exceeded all our expectations.",
    rating: 5,
  },
  {
    name: "Maria & Andrei Dumitrescu",
    event: "Wedding, August 2024",
    text: "The most spectacular venue in Suceava! We visited many places before finding King's Garden, and nothing else came close. The hall is breathtaking, the gardens are perfect for photos, and the food was praised by every single guest. Highly recommended!",
    rating: 5,
  },
  {
    name: "Diana Munteanu",
    event: "Baptism, July 2024",
    text: "We celebrated our daughter's baptism at King's Garden and it was magical. The team helped us create a beautiful celebration that was both elegant and family-friendly. The staff was incredibly kind with our little ones, and the food was exceptional.",
    rating: 5,
  },
  {
    name: "Alexandru & Simona Vasilescu",
    event: "Wedding, May 2024",
    text: "A fairytale wedding venue! The chandeliers, the elegant décor, the amazing food—everything exceeded our expectations. The owners personally ensured everything ran smoothly. We couldn't have asked for a more perfect day.",
    rating: 5,
  },
  {
    name: "Ioana & Gabriel Popa",
    event: "Wedding, April 2024",
    text: "We're still in awe of our wedding day. King's Garden provided the most romantic, elegant setting we could have imagined. The staff was professional yet warm, making us feel like family. Our guests unanimously agreed it was the best wedding they'd attended!",
    rating: 5,
  },
  {
    name: "Raluca Stanescu",
    event: "Corporate Event, March 2024",
    text: "Hosted our company's annual gala at King's Garden and it was a huge success. The venue impressed all our clients, the catering was exceptional, and the event staff was incredibly professional. Will definitely return for future events.",
    rating: 5,
  },
  {
    name: "Andreea & Florin Matei",
    event: "Wedding, October 2024",
    text: "Dream wedding achieved! The venue is absolutely stunning—the photos speak for themselves. But what truly set King's Garden apart was the warmth of the staff and owners. They treated our wedding as if it were their own family celebration.",
    rating: 5,
  },
];

const highlights = [
  { phrase: "Everything was perfect!", count: 150 },
  { phrase: "A dream wedding", count: 120 },
  { phrase: "Impeccable service", count: 180 },
  { phrase: "Delicious food", count: 200 },
  { phrase: "Spectacular décor", count: 160 },
  { phrase: "Highly recommended", count: 230 },
];

const Testimonials = () => {
  return (
    <Layout>
      <PageHero
        title="Testimonials"
        subtitle="Stories from couples who celebrated their love with us"
        tagline="Guest Experiences"
        image={heroImage}
      />

      {/* Stats Section */}
      <section className="py-section-sm bg-gradient-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Star className="w-6 h-6 text-gold fill-gold" />
                <span className="text-4xl font-serif font-semibold text-foreground">4.8</span>
              </div>
              <p className="text-muted-foreground">Average Rating</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-serif font-semibold text-foreground mb-2">297+</p>
              <p className="text-muted-foreground">Google Reviews</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-serif font-semibold text-foreground mb-2">500+</p>
              <p className="text-muted-foreground">Happy Celebrations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Phrases */}
      <section className="py-section bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-gold text-sm tracking-[0.3em] uppercase font-medium mb-4">
              What Guests Say Most
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Words That <span className="text-gradient-gold">Repeat</span>
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {highlights.map((item) => (
              <div
                key={item.phrase}
                className="px-6 py-3 bg-accent/50 rounded-full border border-border hover:border-gold/30 transition-colors duration-300"
              >
                <span className="text-foreground font-medium">"{item.phrase}"</span>
                <span className="text-gold ml-2 text-sm">×{item.count}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-section bg-gradient-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-gold text-sm tracking-[0.3em] uppercase font-medium mb-4">
              Reviews
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Stories of <span className="text-gradient-gold">Unforgettable Moments</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 bg-background rounded-sm border border-border hover:border-gold/30 hover:shadow-elegant transition-all duration-500"
              >
                <Quote className="w-8 h-8 text-gold/30 mb-4" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-foreground/80 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-serif font-medium text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-muted-foreground text-sm">{testimonial.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section bg-charcoal text-ivory">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-gold text-sm tracking-[0.3em] uppercase font-medium mb-4">
            Join Our Happy Couples
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-ivory mb-6 max-w-2xl mx-auto">
            Ready to Create Your Own <span className="text-gradient-gold">Love Story?</span>
          </h2>
          <p className="text-ivory/70 max-w-xl mx-auto mb-8">
            Let us help you create memories that will last a lifetime. Contact us to schedule your venue tour.
          </p>
          <Button variant="gold" size="xl" asChild>
            <Link to="/contact">Start Your Journey</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
