import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface HeaderProps {
  onQuoteClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onQuoteClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Work Showcase', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#21211F]/95 backdrop-blur-md border-b border-white/10 shadow-lg py-3'
          : 'bg-[#21211F]/80 backdrop-blur-sm border-b border-white/10 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark (single clean element) */}
          <a
            href="#"
            className="flex items-center gap-3 text-white tracking-tight shrink-0 group"
          >
            <div className="w-9 h-9 rounded-lg bg-[#073ACB] flex items-center justify-center text-white shadow-md transition-transform group-hover:scale-105">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <span className="font-bold text-lg sm:text-xl text-white tracking-tight whitespace-nowrap">
              Joe's Pristine Plastering
            </span>
          </a>

          {/* Zone 2: Navigation Links (single-line, clean hover underlines) */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="whitespace-nowrap shrink-0 hover:text-white transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#073ACB] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Phone Contact */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center gap-2 text-sm font-medium text-neutral-200 hover:text-white transition-colors whitespace-nowrap px-3 py-2 rounded-md hover:bg-white/5"
              title="Call Joe directly"
            >
              <Phone className="w-4 h-4 text-[#073ACB]" />
              <span className="tracking-tight">{BUSINESS_INFO.phoneDisplay}</span>
            </a>
            <button
              onClick={onQuoteClick}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-[#073ACB] rounded-lg hover:bg-[#0632b0] transition-colors shadow-sm whitespace-nowrap cursor-pointer active:scale-98"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="p-2 text-white bg-[#073ACB] rounded-md"
              aria-label="Call Joe"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-300 hover:text-white rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#073ACB]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#21211F] border-b border-white/10 px-4 pt-3 pb-6 animate-fadeIn">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-neutral-200 hover:text-white text-base font-medium py-2 px-3 rounded-md hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center justify-center gap-2 text-sm font-semibold text-white bg-white/10 py-2.5 rounded-lg"
              >
                <Phone className="w-4 h-4 text-[#073ACB]" />
                <span>Call {BUSINESS_INFO.phoneDisplay}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onQuoteClick();
                }}
                className="w-full text-center py-2.5 text-sm font-semibold text-white bg-[#073ACB] rounded-lg shadow-sm"
              >
                Get a Free Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
