import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Venue", href: "/venue" },
  { name: "Menu", href: "/menu" },
  { name: "Services", href: "/services" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = location.pathname === "/";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled || !isHomePage
          ? "bg-background/95 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <span
                className={cn(
                  "font-serif text-2xl md:text-3xl font-semibold tracking-tight transition-colors duration-300",
                  isScrolled || !isHomePage ? "text-foreground" : "text-primary-foreground"
                )}
              >
                King's Garden
              </span>
              <span
                className={cn(
                  "block text-[10px] tracking-[0.3em] uppercase font-sans font-medium transition-colors duration-300",
                  isScrolled || !isHomePage ? "text-gold" : "text-gold-light"
                )}
              >
                Events
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 relative group",
                  isScrolled || !isHomePage
                    ? "text-foreground/80 hover:text-gold"
                    : "text-primary-foreground/90 hover:text-primary-foreground",
                  location.pathname === item.href && "text-gold"
                )}
              >
                {item.name}
                <span
                  className={cn(
                    "absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gold transition-all duration-300 group-hover:w-3/4",
                    location.pathname === item.href && "w-3/4"
                  )}
                />
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+40123456789"
              className={cn(
                "flex items-center gap-2 text-sm font-medium transition-colors duration-300",
                isScrolled || !isHomePage
                  ? "text-foreground/70 hover:text-gold"
                  : "text-primary-foreground/80 hover:text-primary-foreground"
              )}
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">+40 123 456 789</span>
            </a>
            <Button
              variant={isScrolled || !isHomePage ? "gold" : "hero-gold"}
              size="sm"
              asChild
            >
              <Link to="/contact">Book a Tour</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "lg:hidden p-2 transition-colors duration-300",
              isScrolled || !isHomePage ? "text-foreground" : "text-primary-foreground"
            )}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-lg shadow-elegant transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-[80vh] border-b border-border" : "max-h-0"
        )}
      >
        <nav className="container mx-auto px-4 py-6 space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "block px-4 py-3 text-lg font-medium transition-colors duration-300",
                location.pathname === item.href
                  ? "text-gold bg-accent/50"
                  : "text-foreground/80 hover:text-gold hover:bg-accent/30"
              )}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4 px-4 space-y-3">
            <a
              href="tel:+40123456789"
              className="flex items-center gap-2 text-foreground/70"
            >
              <Phone className="w-4 h-4" />
              +40 123 456 789
            </a>
            <Button variant="gold" className="w-full" asChild>
              <Link to="/contact">Book a Tour</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
