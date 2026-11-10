import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Phone, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from './data/content';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('Plastering');

  const scrollToContact = (serviceTitle?: string) => {
    if (serviceTitle) {
      setSelectedService(serviceTitle);
    }
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FA] text-[#21211F]">
      {/* Sticky Header adhering to Top Bar Contract */}
      <Header onQuoteClick={() => scrollToContact()} />

      <main className="flex-1">
        {/* Section 1: Hero Section */}
        <HeroSection onQuoteClick={() => scrollToContact()} />

        {/* Section 2: Services Section */}
        <ServicesSection onSelectService={(title) => scrollToContact(title)} />

        {/* Section 3: Why Choose Us / About Section */}
        <AboutSection />

        {/* Section 4: Gallery / Work Showcase */}
        <GallerySection />

        {/* Section 5: Contact / CTA Section */}
        <ContactSection preselectedService={selectedService} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Quick Action Bar (Under 15% Mobile Sticky Cap) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#21211F]/95 backdrop-blur-md border-t border-white/10 p-2.5 px-4 flex items-center justify-between gap-3 shadow-2xl">
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs font-bold tracking-tight transition-colors"
        >
          <Phone className="w-4 h-4 text-[#6495ED]" />
          <span>Call Joe</span>
        </a>
        <button
          onClick={() => scrollToContact()}
          className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-[#073ACB] hover:bg-[#0632b0] text-white text-xs font-bold tracking-tight transition-colors shadow-sm"
        >
          <Calendar className="w-4 h-4" />
          <span>Free Quote</span>
        </button>
      </div>
    </div>
  );
}
