import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { HighlightsSection } from "@/components/home/HighlightsSection";
import { GastronomyPreview } from "@/components/home/GastronomyPreview";
import { TestimonialsCarousel } from "@/components/home/TestimonialsCarousel";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { CTASection } from "@/components/home/CTASection";
import { LocationSection } from "@/components/home/LocationSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <HighlightsSection />
      <GastronomyPreview />
      <TestimonialsCarousel />
      <GalleryPreview />
      <CTASection />
      <LocationSection />
    </Layout>
  );
};

export default Index;
