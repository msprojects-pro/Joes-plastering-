import React from 'react';
import { ShieldCheck, Phone, Mail, MapPin } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/content';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#21211F] text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#073ACB] flex items-center justify-center text-white shadow-md">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                Joe's Pristine Plastering
              </span>
            </div>
            <p className="text-sm text-neutral-300 leading-relaxed">
              Professional plastering, skimming, rendering, and damp proofing services across Middlesbrough, Stockton, Yarm, and surrounding Teesside areas.
            </p>
            <p className="text-xs text-neutral-400">
              High Quality Finish Guaranteed · Honest Quotations · 5 Star Rated
            </p>
          </div>

          {/* Services Col */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-300">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    onClick={(e) => handleNavClick(e, '#services')}
                    className="hover:text-white transition-colors"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Col */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-300">
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, '#services')}
                  className="hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#why-us"
                  onClick={(e) => handleNavClick(e, '#why-us')}
                  className="hover:text-white transition-colors"
                >
                  Why Choose Us (98% Recommend)
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  onClick={(e) => handleNavClick(e, '#gallery')}
                  className="hover:text-white transition-colors"
                >
                  Work Showcase
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="hover:text-white transition-colors"
                >
                  Get a Free Quote
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details Col */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Contact Information
            </h4>
            <div className="space-y-3 text-sm text-neutral-300">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#6495ED] shrink-0 mt-0.5" />
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#6495ED] shrink-0 mt-0.5" />
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {BUSINESS_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#6495ED] shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© {currentYear} Joe's Pristine Plastering. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Middlesbrough, United Kingdom</span>
            <span aria-hidden="true">·</span>
            <span>Local 5-Star Plasterer</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
