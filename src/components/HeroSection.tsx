import React from 'react';
import { Phone, ArrowRight, Star, ShieldCheck, MapPin, Award } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';
import { getAssetUrl } from '../utils/assets';

interface HeroSectionProps {
  onQuoteClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onQuoteClick }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#21211F]">
      {/* Background Photography with Measured Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={getAssetUrl('/images/hero.jpg')}
          alt="Modern interior with pristine freshly plastered walls and ceiling"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Deep dark gradient overlay for crystal-clear readability adhering to the #21211F primary dark palette */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#21211F] via-[#21211F]/90 to-[#21211F]/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#21211F] via-transparent to-[#21211F]/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Subtle Tagline kicker with clean metadata separator */}
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide uppercase text-neutral-300 mb-6 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-md border border-white/10">
            <span className="text-[#6495ED] font-bold">Middlesbrough, UK</span>
            <span aria-hidden="true" className="text-white/40">·</span>
            <span className="text-white">Honest & Affordable Plastering</span>
          </div>

          {/* Big Bold Headline with text-wrap: balance */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 [text-wrap:balance]">
            {BUSINESS_INFO.heroHeadline}
          </h1>

          {/* Short Supporting Text */}
          <p className="text-lg sm:text-xl text-neutral-200 font-normal leading-relaxed mb-8 max-w-2xl">
            {BUSINESS_INFO.tagline}
          </p>
          <p className="text-base text-neutral-300 font-normal leading-relaxed mb-10 max-w-2xl">
            Specialist residential & commercial plastering across Middlesbrough and surrounding areas. We guarantee glass-smooth walls, laser-straight edges, and zero mess left behind.
          </p>

          {/* Strong Dual CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <button
              onClick={onQuoteClick}
              className="inline-flex items-center justify-center gap-3 px-7 py-4 text-base font-bold text-white bg-[#073ACB] hover:bg-[#0632b0] rounded-xl shadow-lg shadow-[#073ACB]/25 hover:shadow-[#073ACB]/40 transition-all duration-200 cursor-pointer active:scale-98 whitespace-nowrap"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="inline-flex items-center justify-center gap-3 px-7 py-4 text-base font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl backdrop-blur-md transition-all duration-200 cursor-pointer active:scale-98 whitespace-nowrap"
            >
              <Phone className="w-5 h-5 text-[#6495ED]" />
              <span>Call Now: {BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>

          {/* Trust strip right in the Hero */}
          <div className="pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-neutral-300">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-white/10 shrink-0 text-amber-400">
                <Star className="w-4 h-4 fill-amber-400" />
              </div>
              <div className="text-xs sm:text-sm">
                <span className="font-bold text-white block">98% Recommend</span>
                <span className="text-neutral-400 text-xs">32 verified reviews</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-white/10 shrink-0 text-[#6495ED]">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="text-xs sm:text-sm">
                <span className="font-bold text-white block">Finish Guaranteed</span>
                <span className="text-neutral-400 text-xs">Pristine standards</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-white/10 shrink-0 text-emerald-400">
                <Award className="w-4 h-4" />
              </div>
              <div className="text-xs sm:text-sm">
                <span className="font-bold text-white block">Honest Pricing</span>
                <span className="text-neutral-400 text-xs">No hidden costs</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-white/10 shrink-0 text-[#6495ED]">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="text-xs sm:text-sm">
                <span className="font-bold text-white block">Middlesbrough</span>
                <span className="text-neutral-400 text-xs">Local & reliable</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
