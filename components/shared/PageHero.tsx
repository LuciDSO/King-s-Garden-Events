import heroImage from "@/assets/hero-ballroom.jpg";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  tagline?: string;
  image?: string;
}

export function PageHero({ title, subtitle, tagline, image }: PageHeroProps) {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={image || heroImage}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-16">
        {tagline && (
          <p className="text-gold text-sm tracking-[0.3em] uppercase font-medium mb-4 animate-fade-in-up opacity-0" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
            {tagline}
          </p>
        )}
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ivory font-semibold mb-4 animate-fade-in-up opacity-0" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
          {title}
        </h1>
        {subtitle && (
          <p className="text-ivory/80 text-lg md:text-xl max-w-2xl mx-auto animate-fade-in-up opacity-0" style={{ animationDelay: "600ms", animationFillMode: "forwards" }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
