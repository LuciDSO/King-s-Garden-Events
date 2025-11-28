import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Venue", href: "/venue" },
  { name: "Menu & Gastronomy", href: "/menu" },
  { name: "Services", href: "/services" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
];

const services = [
  "Weddings",
  "Baptisms",
  "Corporate Events",
  "Private Celebrations",
  "Event Planning",
  "Catering",
];

export function Footer() {
  return (
    <footer className="bg-charcoal text-ivory/90">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="font-serif text-2xl font-semibold text-ivory">
                King's Garden
              </span>
              <span className="block text-[10px] tracking-[0.3em] uppercase font-sans text-gold">
                Events
              </span>
            </Link>
            <p className="text-ivory/70 text-sm leading-relaxed mb-6">
              Suceava's premier luxury event venue, where elegance becomes experience and every moment transforms into an unforgettable memory.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-ivory/20 flex items-center justify-center text-ivory/70 hover:text-gold hover:border-gold transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-ivory/20 flex items-center justify-center text-ivory/70 hover:text-gold hover:border-gold transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-medium text-ivory mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-ivory/70 text-sm hover:text-gold transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-medium text-ivory mb-6">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-ivory/70 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-medium text-ivory mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-ivory/70 text-sm">
                  Strada Exemplu Nr. 123,<br />
                  Suceava, Romania
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <a
                  href="tel:+40123456789"
                  className="text-ivory/70 text-sm hover:text-gold transition-colors duration-300"
                >
                  +40 123 456 789
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <a
                  href="mailto:contact@kingsgardenevents.ro"
                  className="text-ivory/70 text-sm hover:text-gold transition-colors duration-300"
                >
                  contact@kingsgardenevents.ro
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-ivory/70 text-sm">
                  Mon - Fri: 10:00 - 18:00<br />
                  Sat - Sun: By Appointment
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-ivory/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-ivory/50">
            <p>© {new Date().getFullYear()} King's Garden Events. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-gold transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-gold transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
