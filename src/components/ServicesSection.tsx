import React from 'react';
import { Layers, ShieldCheck, LayoutGrid, Droplets, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/content';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers':
        return <Layers className="w-6 h-6 text-[#073ACB]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#073ACB]" />;
      case 'LayoutGrid':
        return <LayoutGrid className="w-6 h-6 text-[#073ACB]" />;
      case 'Droplets':
        return <Droplets className="w-6 h-6 text-[#073ACB]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#073ACB]" />;
      default:
        return <Layers className="w-6 h-6 text-[#073ACB]" />;
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#F8F9FA] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#073ACB] mb-3">
            <span>Specialist Craftsmanship</span>
            <span aria-hidden="true">·</span>
            <span>Domestic & Commercial</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#21211F] tracking-tight mb-4 [text-wrap:balance]">
            Expert Services Finished to Perfection
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            From smooth interior ceilings to durable external rendering, we combine time-tested trowel techniques with modern materials for lasting durability.
          </p>
        </div>

        {/* 5-Card Clean Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service: ServiceItem, index: number) => {
            const isFeatured = service.id === 'skimming' || service.id === 'plastering';
            return (
              <div
                key={service.id}
                className={`group bg-white rounded-2xl p-7 border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between ${
                  isFeatured
                    ? 'border-[#073ACB]/30 shadow-md ring-1 ring-[#073ACB]/10'
                    : 'border-neutral-200 shadow-sm hover:border-neutral-300'
                } ${index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <div>
                  {/* Icon & Index */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-13 h-13 rounded-xl bg-[#073ACB]/10 flex items-center justify-center transition-colors group-hover:bg-[#073ACB] group-hover:text-white">
                      <div className="group-hover:brightness-0 group-hover:invert transition-all">
                        {getIcon(service.icon)}
                      </div>
                    </div>
                    <span className="text-xs font-bold text-neutral-600 tracking-wider">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl font-bold text-[#21211F] mb-3 group-hover:text-[#073ACB] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Feature Checkpoints */}
                  <ul className="space-y-2.5 mb-8 border-t border-neutral-100 pt-5">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                        <CheckCircle2 className="w-4 h-4 text-[#073ACB] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action */}
                <button
                  onClick={() => onSelectService(service.title)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs sm:text-sm font-semibold rounded-lg border border-[#073ACB] text-[#073ACB] bg-transparent hover:bg-[#073ACB] hover:text-white transition-colors cursor-pointer active:scale-98"
                >
                  <span>Request Quote for {service.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-14 bg-[#21211F] rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#073ACB] flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">Have a custom or mixed plastering requirement?</h4>
              <p className="text-xs sm:text-sm text-neutral-300">We handle combined insurance repairs, full house refurbs, and commercial fit-outs.</p>
            </div>
          </div>
          <button
            onClick={() => onSelectService('General Enquiries')}
            className="whitespace-nowrap px-6 py-3 bg-white text-[#21211F] hover:bg-neutral-100 font-semibold text-sm rounded-xl transition-colors cursor-pointer shrink-0"
          >
            Speak to Joe Directly
          </button>
        </div>
      </div>
    </section>
  );
};
