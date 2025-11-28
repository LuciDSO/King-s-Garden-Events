import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/shared/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import gardenImage from "@/assets/venue-garden.jpg";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    guestCount: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      eventType: "",
      guestCount: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      <PageHero
        title="Contact Us"
        subtitle="Let's start planning your dream event together"
        tagline="Get in Touch"
        image={gardenImage}
      />

      <section className="py-section bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div>
              <p className="text-gold text-sm tracking-[0.3em] uppercase font-medium mb-4">
                Send Us a Message
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">
                Request <span className="text-gradient-gold">Information</span>
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-background border-border focus:border-gold"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-background border-border focus:border-gold"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+40 123 456 789"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-background border-border focus:border-gold"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="eventType">Event Type</Label>
                    <Select
                      value={formData.eventType}
                      onValueChange={(value) => setFormData({ ...formData, eventType: value })}
                    >
                      <SelectTrigger className="bg-background border-border">
                        <SelectValue placeholder="Select event type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="wedding">Wedding</SelectItem>
                        <SelectItem value="baptism">Baptism</SelectItem>
                        <SelectItem value="corporate">Corporate Event</SelectItem>
                        <SelectItem value="celebration">Private Celebration</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="guestCount">Estimated Guest Count</Label>
                  <Select
                    value={formData.guestCount}
                    onValueChange={(value) => setFormData({ ...formData, guestCount: value })}
                  >
                    <SelectTrigger className="bg-background border-border">
                      <SelectValue placeholder="Select guest count" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="50-100">50 - 100 guests</SelectItem>
                      <SelectItem value="100-200">100 - 200 guests</SelectItem>
                      <SelectItem value="200-300">200 - 300 guests</SelectItem>
                      <SelectItem value="300-400">300 - 400 guests</SelectItem>
                      <SelectItem value="400-500">400 - 500 guests</SelectItem>
                      <SelectItem value="500+">500+ guests</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Your Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your event vision..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="bg-background border-border focus:border-gold resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="gold"
                  size="xl"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <p className="text-gold text-sm tracking-[0.3em] uppercase font-medium mb-4">
                Contact Information
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">
                Visit Our <span className="text-gradient-gold">Venue</span>
              </h2>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4 p-4 bg-accent/30 rounded-sm">
                  <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center flex-shrink-0">
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

                <div className="flex items-start gap-4 p-4 bg-accent/30 rounded-sm">
                  <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center flex-shrink-0">
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

                <div className="flex items-start gap-4 p-4 bg-accent/30 rounded-sm">
                  <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center flex-shrink-0">
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

                <div className="flex items-start gap-4 p-4 bg-accent/30 rounded-sm">
                  <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Office Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 10:00 - 18:00<br />
                      Saturday - Sunday: By Appointment
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/40123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-4 bg-[#25D366] text-primary-foreground rounded-sm hover:bg-[#20BD5A] transition-colors duration-300"
              >
                <MessageCircle className="w-6 h-6" />
                <span className="font-medium">Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] lg:h-[500px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d85974.94571604654!2d26.186!3d47.651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4734fc363f45e0dd%3A0x7c3a1b3e6b5f6d5a!2sSuceava%2C%20Romania!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="King's Garden Events Location"
        />
      </section>
    </Layout>
  );
};

export default Contact;
