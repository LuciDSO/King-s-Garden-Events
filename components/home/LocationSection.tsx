import { MapPin, Clock, Phone, Mail } from "lucide-react";

export function LocationSection() {
  return (
    <section className="py-section bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Map */}
          <div className="aspect-[4/3] lg:aspect-auto lg:min-h-[400px] rounded-sm overflow-hidden image-frame">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d85974.94571604654!2d26.186!3d47.651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4734fc363f45e0dd%3A0x7c3a1b3e6b5f6d5a!2sSuceava%2C%20Romania!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="King's Garden Events Location"
            />
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <p className="text-gold text-sm tracking-[0.3em] uppercase font-medium mb-4">
              Visit Us
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">
              Find Your Way to <span className="text-gradient-gold">Elegance</span>
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Address</h3>
                  <p className="text-muted-foreground">
                    Strada Exemplu Nr. 123,<br />
                    Suceava, Romania
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Friday: 10:00 - 18:00<br />
                    Saturday - Sunday: By Appointment
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Phone</h3>
                  <a
                    href="tel:+40123456789"
                    className="text-muted-foreground hover:text-gold transition-colors duration-300"
                  >
                    +40 123 456 789
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Email</h3>
                  <a
                    href="mailto:contact@kingsgardenevents.ro"
                    className="text-muted-foreground hover:text-gold transition-colors duration-300"
                  >
                    contact@kingsgardenevents.ro
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
