import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Ana & Mihai",
    event: "Wedding, June 2024",
    text: "Everything was absolutely perfect! The venue was breathtaking, the food was exquisite, and the staff made us feel like royalty. Our dream wedding came true at King's Garden.",
    rating: 5,
  },
  {
    name: "Elena Popescu",
    event: "Wedding, September 2024",
    text: "A truly unforgettable experience. The attention to detail was impeccable, from the stunning décor to the delicious menu. Every guest was impressed!",
    rating: 5,
  },
  {
    name: "Cristina & Andrei",
    event: "Wedding, August 2024",
    text: "The most spectacular venue in Suceava! The grand hall took our breath away, and the staff went above and beyond to make our day perfect. Highly recommended!",
    rating: 5,
  },
  {
    name: "Maria Ionescu",
    event: "Baptism, July 2024",
    text: "We celebrated our daughter's baptism here and it was magical. The team helped us with every detail, and the food was praised by all our guests.",
    rating: 5,
  },
  {
    name: "Alexandru & Diana",
    event: "Wedding, May 2024",
    text: "A fairytale wedding venue! The chandeliers, the elegant décor, the amazing food - everything exceeded our expectations. Thank you, King's Garden!",
    rating: 5,
  },
];

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-section bg-charcoal text-ivory relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-gold">
          <Quote className="w-32 h-32" />
        </div>
        <div className="absolute bottom-10 right-10 text-gold transform rotate-180">
          <Quote className="w-32 h-32" />
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-gold text-sm tracking-[0.3em] uppercase font-medium mb-4">
            Testimonials
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-heading-xl text-ivory mb-6">
            Stories of <span className="text-gradient-gold">Unforgettable Moments</span>
          </h2>
        </div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Testimonial Card */}
            <div className="bg-charcoal/50 border border-ivory/10 rounded-sm p-8 md:p-12 text-center">
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-gold mx-auto mb-6 opacity-50" />

              {/* Rating */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                ))}
              </div>

              {/* Text */}
              <p className="text-ivory/90 text-lg md:text-xl leading-relaxed mb-8 font-light italic">
                "{testimonials[currentIndex].text}"
              </p>

              {/* Author */}
              <div>
                <p className="font-serif text-xl font-medium text-ivory">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-ivory/60 text-sm mt-1">
                  {testimonials[currentIndex].event}
                </p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={goToPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-10 h-10 rounded-full border border-ivory/20 flex items-center justify-center text-ivory/60 hover:text-gold hover:border-gold transition-colors duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-10 h-10 rounded-full border border-ivory/20 flex items-center justify-center text-ivory/60 hover:text-gold hover:border-gold transition-colors duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                }}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  index === currentIndex
                    ? "bg-gold w-8"
                    : "bg-ivory/30 hover:bg-ivory/50"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
