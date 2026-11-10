import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/content';
import { ContactFormData } from '../types';

interface ContactSectionProps {
  preselectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedService }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    service: 'Plastering',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide a contact phone number';
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 9) {
      errs.phone = 'Please enter a valid UK phone number';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide brief details about your plastering job';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    // Simulate real brief dispatch
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      service: 'Plastering',
      message: '',
    });
    setSubmitted(false);
    setErrors({});
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#073ACB] mb-3">
            <span>Free Upfront Estimates</span>
            <span aria-hidden="true">·</span>
            <span>Fast Local Response</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#21211F] tracking-tight mb-4 [text-wrap:balance]">
            Get Your Free, No-Obligation Plastering Quote
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            Need a room skimmed, ceiling renewed, or external render inspected? Contact Joe today for honest advice and an accurate, affordable quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact Info & Trust Proof */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#21211F] text-white rounded-3xl p-8 sm:p-10 shadow-lg relative overflow-hidden">
              <h3 className="text-xl font-bold text-white mb-2">Direct Contact Details</h3>
              <p className="text-sm text-neutral-300 mb-8 leading-relaxed">
                Prefer to speak over the phone or send photos directly on WhatsApp? Joe is always happy to talk through your project.
              </p>

              <div className="space-y-6">
                {/* Phone Call Card */}
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#073ACB] flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#6495ED] font-semibold block">
                      Telephone / WhatsApp
                    </span>
                    <span className="text-lg font-bold text-white block group-hover:text-[#6495ED] transition-colors">
                      {BUSINESS_INFO.phoneDisplay}
                    </span>
                    <span className="text-xs text-neutral-400">Click to call immediately</span>
                  </div>
                </a>

                {/* Email Card */}
                <a
                  href={`mailto:${BUSINESS_INFO.email}?subject=Plastering%20Quote%20Request`}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#6495ED] shrink-0 group-hover:bg-[#073ACB] group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs uppercase tracking-wider text-[#6495ED] font-semibold block">
                      Email Address
                    </span>
                    <span className="text-sm font-semibold text-white block truncate group-hover:text-[#6495ED] transition-colors">
                      {BUSINESS_INFO.email}
                    </span>
                    <span className="text-xs text-neutral-400">Send drawings, photos & queries</span>
                  </div>
                </a>

                {/* Location Card */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#6495ED] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#6495ED] font-semibold block">
                      Service Headquarters
                    </span>
                    <span className="text-sm font-semibold text-white block">
                      {BUSINESS_INFO.location}
                    </span>
                    <span className="text-xs text-neutral-400">
                      Covering Middlesbrough, Stockton, Yarm, Redcar & Teesside
                    </span>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#6495ED] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#6495ED] font-semibold block">
                      Operating Schedule
                    </span>
                    <span className="text-sm font-semibold text-white block">
                      Monday – Saturday: 7:30 AM – 6:30 PM
                    </span>
                    <span className="text-xs text-neutral-400">
                      Emergency repair visits by appointment
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Trust Checklist */}
            <div className="p-6 rounded-2xl bg-[#F8F9FA] border border-neutral-200">
              <h4 className="text-sm font-bold text-[#21211F] mb-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#073ACB]" />
                <span>Our Free Quote Promise</span>
              </h4>
              <ul className="text-xs sm:text-sm text-neutral-600 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#073ACB]" />
                  <span>No hard sell and completely zero obligation</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#073ACB]" />
                  <span>Fixed, itemised pricing for materials & labour</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#073ACB]" />
                  <span>In-person site visits in Middlesbrough & surrounding towns</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#F8F9FA] rounded-3xl p-8 sm:p-10 border border-neutral-200 shadow-sm relative">
              {submitted ? (
                <div className="py-12 px-4 text-center animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#21211F] mb-2">Quote Request Received!</h3>
                  <p className="text-base text-neutral-600 max-w-md mx-auto mb-6 leading-relaxed">
                    Thank you <strong className="text-[#21211F]">{formData.name}</strong>. Joe will review your project details and contact you at <strong className="text-[#21211F]">{formData.phone}</strong> shortly.
                  </p>
                  <div className="p-4 rounded-xl bg-white border border-neutral-200 text-xs text-neutral-600 max-w-md mx-auto mb-8">
                    <span>Expected response time: within 2 hours during normal business hours.</span>
                  </div>
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 text-sm font-semibold text-[#073ACB] bg-white border border-[#073ACB] rounded-xl hover:bg-[#073ACB] hover:text-white transition-colors cursor-pointer"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-[#21211F] tracking-tight mb-1">
                      Request Your Free Quotation
                    </h3>
                    <p className="text-sm text-neutral-600">
                      Fill out this quick form and Joe will get in touch to discuss details or arrange a viewing.
                    </p>
                  </div>

                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-[#21211F] uppercase tracking-wider mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="e.g. David Miller"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border bg-white text-sm text-[#21211F] placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#073ACB] transition-all ${
                        errors.name ? 'border-red-500' : 'border-neutral-300'
                      }`}
                    />
                    {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                  </div>

                  {/* Phone field */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-[#21211F] uppercase tracking-wider mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="e.g. 07123 456789"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border bg-white text-sm text-[#21211F] placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#073ACB] transition-all ${
                        errors.phone ? 'border-red-500' : 'border-neutral-300'
                      }`}
                    />
                    {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                  </div>

                  {/* Service selection dropdown */}
                  <div>
                    <label htmlFor="service" className="block text-xs font-bold text-[#21211F] uppercase tracking-wider mb-2">
                      Required Service
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 bg-white text-sm text-[#21211F] focus:outline-none focus:ring-2 focus:ring-[#073ACB] transition-all"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Multiple / Full House Renovation">Multiple / Full House Renovation</option>
                      <option value="Other Plastering Work">Other Plastering Work</option>
                    </select>
                  </div>

                  {/* Message field */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-[#21211F] uppercase tracking-wider mb-2">
                      Project Details & Location <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="e.g. Need 2 bedroom ceilings skimmed over Artex in Marton, plus 1 wall repaired after electrical work. Ready to start in 2 weeks."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border bg-white text-sm text-[#21211F] placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#073ACB] transition-all resize-none ${
                        errors.message ? 'border-red-500' : 'border-neutral-300'
                      }`}
                    />
                    {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-3 py-4 px-6 text-base font-bold text-white bg-[#073ACB] hover:bg-[#0632b0] rounded-xl shadow-md transition-all cursor-pointer active:scale-98 disabled:opacity-70 whitespace-nowrap"
                  >
                    {loading ? (
                      <span>Sending Your Request...</span>
                    ) : (
                      <>
                        <span>Request Free Quote</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-neutral-600">
                    🔒 Your details are never shared. Direct quote from Joe Winchurch.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
