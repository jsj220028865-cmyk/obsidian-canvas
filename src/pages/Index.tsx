import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { PortfolioSection } from '@/components/PortfolioSection';
import { ServicesSection } from '@/components/ServicesSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';
import { GrainOverlay } from '@/components/GrainOverlay';
import { SmoothScrollProvider } from '@/components/SmoothScroll';

const Index = () => {
  return (
    <SmoothScrollProvider>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Film Grain Overlay */}
        <GrainOverlay />

        {/* Navigation */}
        <Navigation />

        {/* Main Content */}
        <main>
          {/* Hero Section */}
          <HeroSection />

          {/* Portfolio Section */}
          <PortfolioSection />

          {/* About Section */}
          <AboutSection />

          {/* Services Section */}
          <ServicesSection />

          {/* Testimonials Section */}
          <TestimonialsSection />

          {/* CTA Section */}
          <CTASection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </SmoothScrollProvider>
  );
};

export default Index;
