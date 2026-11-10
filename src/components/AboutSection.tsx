import React from 'react';
import { Star, ShieldCheck, Banknote, MapPin, Check, HeartHandshake, Quote } from 'lucide-react';
import { BUSINESS_INFO, TRUST_POINTS, REVIEWS } from '../data/content';

export const AboutSection: React.FC = () => {
  return (
    <section id="why-us" className="py-20 sm:py-28 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split grid: About Story + Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#073ACB] mb-3">
              <span>Why Choose Us</span>
              <span aria-hidden="true">·</span>
              <span>About Joe's Pristine Plastering</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#21211F] tracking-tight mb-6 [text-wrap:balance]">
              The High-Standard Plastering Specialists in Middlesbrough
            </h2>
            <div className="space-y-4 text-base text-neutral-600 leading-relaxed">
              <p>
                Founded by Joe Winchurch, <strong className="text-[#21211F] font-semibold">Joe's Pristine Plastering</strong> was built on a straightforward principle: deliver uncompromising glass-smooth plaster finishes, provide totally honest prices, and respect every client's home.
              </p>
              <p>
                Too often, trades disappoint with messy jobsites, vague quotes, and rushed trowel work. We take genuine pride in our trade. Every room is thoroughly prepped, protected with heavy-duty floor coverings, and finished with precision hand-troweled British Gypsum plaster that decorators love to paint.
              </p>
              <p>
                Whether you need a single ceiling over-skimmed to cover ugly Artex or a whole-property refurbishment in Middlesbrough, Stockton, or Yarm, you get clear upfront pricing and guaranteed quality.
              </p>
            </div>

            {/* Core Commitments List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
              <div className="flex items-center gap-3 text-sm text-[#21211F] font-medium">
                <div className="w-6 h-6 rounded-full bg-[#073ACB]/10 flex items-center justify-center text-[#073ACB] shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Fully Protected Floors & Furniture</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#21211F] font-medium">
                <div className="w-6 h-6 rounded-full bg-[#073ACB]/10 flex items-center justify-center text-[#073ACB] shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>No Hidden Fees or Surprise Extras</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#21211F] font-medium">
                <div className="w-6 h-6 rounded-full bg-[#073ACB]/10 flex items-center justify-center text-[#073ACB] shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Laser-Straight Beads & Angles</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#21211F] font-medium">
                <div className="w-6 h-6 rounded-full bg-[#073ACB]/10 flex items-center justify-center text-[#073ACB] shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Site Left Clean & Tidy Every Day</span>
              </div>
            </div>
          </div>

          {/* Right Card: High-Trust Scoreboard */}
          <div className="lg:col-span-5">
            <div className="bg-[#21211F] text-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
              {/* Background graphic motif */}
              <div className="absolute -right-10 -bottom-10 w-48 h-48 rounded-full bg-[#073ACB]/20 blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#6495ED] font-semibold block mb-1">
                    Customer Satisfaction
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-extrabold text-white tracking-tight tabular-nums">
                      {BUSINESS_INFO.stats.recommendRate}%
                    </span>
                    <span className="text-sm text-neutral-300 font-medium">Recommend</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 text-amber-400 justify-end mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-neutral-400 block tabular-nums">
                    Based on {BUSINESS_INFO.stats.reviewCount} verified reviews
                  </span>
                </div>
              </div>

              {/* 4 Trust Points Pillar Grid */}
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-amber-400 shrink-0">
                    <Star className="w-5 h-5 fill-amber-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">5-Star Service Standards</h4>
                    <p className="text-xs text-neutral-300 mt-0.5 leading-relaxed">
                      Punctual, polite, and dedicated to flawless execution on every job.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#6495ED] shrink-0">
                    <Banknote className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Honest & Affordable Pricing</h4>
                    <p className="text-xs text-neutral-300 mt-0.5 leading-relaxed">
                      Free, transparent written quotes with fixed rates and zero hidden charges.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-emerald-400 shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">High Quality Finish Guaranteed</h4>
                    <p className="text-xs text-neutral-300 mt-0.5 leading-relaxed">
                      Backing coats, mesh jointing, and multi-finish skimmed to a glass-smooth tolerance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#6495ED] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Local Middlesbrough Business</h4>
                    <p className="text-xs text-neutral-300 mt-0.5 leading-relaxed">
                      Proudly serving Middlesbrough, Stockton, Yarm, and surrounding Teesside communities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Real Local Testimonial Evidence Strip */}
        <div className="pt-12 border-t border-neutral-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-xl font-bold text-[#21211F]">What Our Teesside Customers Say</h3>
              <p className="text-sm text-neutral-600">Real feedback from recent plastering and rendering projects.</p>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-neutral-600">
              <span className="text-[#073ACB]">98% of customers</span>
              <span>would recommend Joe to friends & family</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((rev) => (
              <div
                key={rev.id}
                className="bg-[#F8F9FA] rounded-2xl p-6 border border-neutral-200 relative flex flex-col justify-between hover:border-neutral-300 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs text-neutral-600">{rev.date}</span>
                  </div>
                  <p className="text-sm text-neutral-700 leading-relaxed mb-6 italic">
                    "{rev.review}"
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-200/60 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-[#21211F] block">{rev.name}</span>
                    <span className="text-neutral-600">{rev.location}</span>
                  </div>
                  <span className="text-[#073ACB] font-medium">{rev.service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
