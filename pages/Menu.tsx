import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/shared/PageHero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { UtensilsCrossed, Leaf, Calendar, ChefHat, Wine, Cake } from "lucide-react";
import gourmetDish from "@/assets/gourmet-dish.jpg";
import tableImage from "@/assets/table-setting.jpg";

const menuCategories = [
  {
    icon: UtensilsCrossed,
    title: "Appetizers",
    items: [
      "Smoked Salmon Canapés with Dill Cream",
      "Foie Gras Terrine with Fig Compote",
      "Beef Carpaccio with Truffle Oil",
      "Wild Mushroom Arancini",
      "Shrimp Cocktail with Champagne Sauce",
    ],
  },
  {
    icon: ChefHat,
    title: "Main Courses",
    items: [
      "Filet Mignon with Red Wine Reduction",
      "Pan-Seared Sea Bass with Herb Crust",
      "Rack of Lamb with Rosemary Jus",
      "Duck Breast with Cherry Sauce",
      "Lobster Thermidor",
    ],
  },
  {
    icon: Wine,
    title: "Sides & Accompaniments",
    items: [
      "Truffle Mashed Potatoes",
      "Grilled Seasonal Vegetables",
      "Wild Rice Pilaf",
      "Caesar Salad with Parmesan Crisp",
      "Roasted Asparagus with Hollandaise",
    ],
  },
  {
    icon: Cake,
    title: "Desserts",
    items: [
      "Wedding Cake (Custom Design)",
      "Crème Brûlée",
      "Chocolate Fondant with Gold Leaf",
      "Fresh Berry Tart",
      "Tiramisu Tower",
    ],
  },
];

const features = [
  {
    icon: ChefHat,
    title: "Personal Chef Consultation",
    description: "Work directly with our executive chef to create your perfect menu.",
  },
  {
    icon: Leaf,
    title: "Dietary Accommodations",
    description: "Vegetarian, vegan, gluten-free, and allergen-free options available.",
  },
  {
    icon: UtensilsCrossed,
    title: "Menu Tasting Sessions",
    description: "Experience your menu before the big day with exclusive tastings.",
  },
];

const Menu = () => {
  return (
    <Layout>
      <PageHero
        title="Menu & Gastronomy"
        subtitle="Culinary excellence crafted for your celebration"
        tagline="Fine Dining Experience"
        image={gourmetDish}
      />

      {/* Introduction */}
      <section className="py-section bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-gold text-sm tracking-[0.3em] uppercase font-medium mb-4">
                Culinary Excellence
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                A Feast for <span className="text-gradient-gold">All Senses</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                <p>
                  At King's Garden Events, dining is an art form. Our award-winning culinary team crafts menus that blend classic elegance with contemporary innovation, using only the finest locally-sourced ingredients.
                </p>
                <p>
                  Every dish is a masterpiece—beautifully plated and bursting with flavor. Our guests consistently praise the food as "exquisite," "delicious," and "the best wedding food we've ever had."
                </p>
                <p>
                  From the first canapé to the final dessert, we ensure your culinary journey is as memorable as your celebration itself.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button variant="gold" asChild>
                  <Link to="/contact">Request Custom Menu</Link>
                </Button>
                <Button variant="gold-outline" asChild>
                  <Link to="/contact" className="inline-flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Book a Tasting
                  </Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] rounded-sm overflow-hidden image-zoom image-frame">
                <img
                  src={gourmetDish}
                  alt="Gourmet cuisine"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] mt-8 rounded-sm overflow-hidden image-zoom image-frame">
                <img
                  src={tableImage}
                  alt="Table setting"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-section-sm bg-gradient-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex items-start gap-4 p-6 bg-background rounded-sm border border-border"
              >
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-section bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-gold text-sm tracking-[0.3em] uppercase font-medium mb-4">
              Sample Menu
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Signature <span className="text-gradient-gold">Selections</span>
            </h2>
            <p className="text-muted-foreground">
              A preview of our culinary offerings. All menus are fully customizable to your preferences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {menuCategories.map((category) => (
              <div
                key={category.title}
                className="p-8 bg-card rounded-sm border border-border hover:border-gold/30 hover:shadow-elegant transition-all duration-500"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-serif text-2xl font-medium text-foreground">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section bg-charcoal text-ivory">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-gold text-sm tracking-[0.3em] uppercase font-medium mb-4">
            Your Perfect Menu Awaits
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-ivory mb-6 max-w-2xl mx-auto">
            Let's Create a <span className="text-gradient-gold">Culinary Masterpiece</span>
          </h2>
          <p className="text-ivory/70 max-w-xl mx-auto mb-8">
            Schedule a consultation with our culinary team to design a menu that perfectly reflects your taste and vision.
          </p>
          <Button variant="gold" size="xl" asChild>
            <Link to="/contact">Schedule Consultation</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Menu;
