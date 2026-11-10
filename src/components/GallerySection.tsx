import React, { useState } from 'react';
import { MapPin, Maximize2, X, Sparkles, CheckCircle2 } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/content';
import { GalleryItem } from '../types';
import { getAssetUrl } from '../utils/assets';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'skimming' | 'rendering' | 'plasterboarding'>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#F8F9FA] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#073ACB] mb-3">
              <span>Work Showcase</span>
              <span aria-hidden="true">·</span>
              <span>Recent Teesside Projects</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#21211F] tracking-tight [text-wrap:balance]">
              Our Finished Craftsmanship
            </h2>
            <p className="text-base text-neutral-600 mt-2 max-w-xl">
              Inspect our high-standard plastering, smooth ceilings, sharp edge beads, and clean external rendering.
            </p>
          </div>

          {/* Interactive Filter Controls (Segmented bar allowed per Section 1.A) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-neutral-200/70 rounded-xl self-start md:self-auto">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-all cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-white text-[#21211F] shadow-sm font-semibold'
                  : 'text-neutral-600 hover:text-[#21211F]'
              }`}
            >
              All Projects ({GALLERY_ITEMS.length})
            </button>
            <button
              onClick={() => setActiveCategory('skimming')}
              className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-all cursor-pointer ${
                activeCategory === 'skimming'
                  ? 'bg-white text-[#21211F] shadow-sm font-semibold'
                  : 'text-neutral-600 hover:text-[#21211F]'
              }`}
            >
              Skimming & Ceilings
            </button>
            <button
              onClick={() => setActiveCategory('rendering')}
              className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-all cursor-pointer ${
                activeCategory === 'rendering'
                  ? 'bg-white text-[#21211F] shadow-sm font-semibold'
                  : 'text-neutral-600 hover:text-[#21211F]'
              }`}
            >
              Exterior Rendering
            </button>
            <button
              onClick={() => setActiveCategory('plasterboarding')}
              className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-all cursor-pointer ${
                activeCategory === 'plasterboarding'
                  ? 'bg-white text-[#21211F] shadow-sm font-semibold'
                  : 'text-neutral-600 hover:text-[#21211F]'
              }`}
            >
              Plasterboarding
            </button>
          </div>
        </div>

        {/* 6-Item Modern Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group bg-white rounded-2xl overflow-hidden border border-neutral-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col"
            >
              {/* Image Frame with hover zoom and fallback styling */}
              <div className="relative aspect-[4/3] bg-neutral-900 overflow-hidden">
                <img
                  src={getAssetUrl(item.image)}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                {/* Overlay hover effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#21211F]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                  <span className="text-xs font-semibold text-white flex items-center gap-1.5 bg-black/40 px-2.5 py-1 rounded backdrop-blur-md">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>View Full Size</span>
                  </span>
                  <span className="text-xs text-neutral-300 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#6495ED]" />
                    <span>{item.location}</span>
                  </span>
                </div>
              </div>

              {/* Clean Caption Area */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-neutral-600 mb-2">
                    <span className="font-semibold text-[#073ACB]">{item.categoryLabel}</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-neutral-600" />
                      <span>{item.location}</span>
                    </span>
                  </div>
                  <h3 className="font-bold text-base text-[#21211F] mb-2 group-hover:text-[#073ACB] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs font-medium text-neutral-600">
                  <span className="flex items-center gap-1.5 text-neutral-600">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#073ACB]" />
                    <span>Pristine hand finish</span>
                  </span>
                  <span className="text-[#073ACB] font-semibold group-hover:underline">
                    Inspect details &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox for Image Inspection */}
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
            onClick={() => setSelectedItem(null)}
          >
            <div
              className="bg-[#21211F] text-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[16/10] bg-black">
                <img
                  src={getAssetUrl(selectedItem.image)}
                  alt={selectedItem.title}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between text-xs text-[#6495ED] font-semibold mb-2">
                  <span>{selectedItem.categoryLabel}</span>
                  <span className="flex items-center gap-1 text-neutral-300">
                    <MapPin className="w-3.5 h-3.5 text-[#6495ED]" />
                    <span>{selectedItem.location}, UK</span>
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{selectedItem.title}</h3>
                <p className="text-sm text-neutral-300 leading-relaxed mb-4">
                  {selectedItem.description}
                </p>
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10 text-xs">
                  <span className="text-neutral-400">
                    Finished with British Gypsum Multi-Finish & stainless steel hand trowels.
                  </span>
                  <button
                    onClick={() => {
                      setSelectedItem(null);
                      const contact = document.querySelector('#contact');
                      if (contact) contact.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-4 py-2 bg-[#073ACB] hover:bg-[#0632b0] text-white font-semibold rounded-lg transition-colors"
                  >
                    Get a Quote for Similar Work
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
