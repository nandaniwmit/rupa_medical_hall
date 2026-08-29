import React, { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { 
  PhoneCall, 
  Send, 
  MapPin, 
  ShieldCheck, 
  Clock, 
  Truck, 
  HeartPulse, 
  Activity, 
  Pill, 
  Baby, 
  Sparkles, 
  ChevronRight, 
  CheckCircle2, 
  Star, 
  UploadCloud, 
  ArrowRight,
  HelpCircle,
  BookOpen,
  BellRing
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { SITE_CONFIG } from '../config/siteConfig';
import { SERVICES_DATA } from '../data/servicesData';
import { REVIEWS_DATA } from '../data/reviewsData';
import { FAQ_DATA } from '../data/faqData';
import { HEALTH_TIPS_DATA } from '../data/healthTipsData';
import rawMedicineData from '../data/medicineStock.json';
import { MedicineItem } from '../types';

export function Home() {
  const { openOrderModal } = useOutletContext<{ openOrderModal: (medicine?: string) => void }>();
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQ_DATA[0].id);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  // Fast-moving top products for preview
  const featuredProducts = (rawMedicineData as MedicineItem[]).slice(0, 6);
  // Maximum 6 featured services for preview
  const featuredServices = SERVICES_DATA.slice(0, 6);
  // Customer reviews preview
  const previewReviews = REVIEWS_DATA.slice(0, 3);
  // FAQ preview
  const previewFaqs = FAQ_DATA.slice(0, 4);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSuccess(true);
      setTimeout(() => {
        setNewsletterEmail("");
        setNewsletterSuccess(false);
      }, 4000);
    }
  };

  const faqSchema = previewFaqs.map(f => ({ question: f.question, answer: f.answer }));

  return (
    <div className="w-full">
      <SEO 
        title="Rupa Medical Hall | Trusted Pharmacy in Bhusunda, Manpur, Bihar"
        description="Rupa Medical Hall is your trusted medical store in Bhusunda, Manpur, Bihar 823003. Providing genuine medicines, healthcare devices, baby care & fast WhatsApp delivery."
        pathname="/"
        faqSchema={faqSchema}
      />

      {/* 1. HERO BANNER */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950 text-white py-16 sm:py-24 lg:py-28">
        {/* Background decorative healthcare imagery with overlay */}
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-luminosity pointer-events-none"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=1920&q=80')` }}
        />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Pill badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>Bhusunda, Manpur&apos;s Most Trusted Pharmacy</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white leading-tight">
                Your Trusted Medical Store for <span className="text-emerald-400">Genuine Medicines</span> &amp; Healthcare Needs
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Providing genuine medicines, healthcare products, surgical supplies, baby care, personal care and daily medical essentials at affordable prices.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href={`tel:+91${SITE_CONFIG.phone}`}
                  className="py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-lg shadow-blue-600/30 hover:shadow-xl transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call Now</span>
                </a>

                <button
                  type="button"
                  onClick={() => openOrderModal()}
                  className="py-3.5 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-lg shadow-emerald-500/30 hover:shadow-xl transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>WhatsApp Order</span>
                </button>

                <a
                  href={SITE_CONFIG.address.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 px-6 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-sm transition-all flex items-center justify-center gap-2 hover:text-white"
                >
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <span>Get Directions</span>
                </a>
              </div>

              {/* Stats Highlights */}
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 border-t border-slate-800/80">
                {SITE_CONFIG.stats.map((stat, i) => (
                  <div key={i} className="p-3 rounded-xl bg-slate-800/40 border border-slate-700/50">
                    <div className="text-xl sm:text-2xl font-extrabold text-emerald-400 font-display">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Card: Quick Prescription Upload & Delivery Teaser */}
            <div className="lg:col-span-5">
              <div className="relative p-6 sm:p-8 rounded-3xl bg-white/10 dark:bg-slate-900/80 backdrop-blur-xl border border-white/20 shadow-2xl space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                      <Truck className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base">Express Doorstep Delivery</h3>
                      <p className="text-xs text-emerald-300">30-45 Mins across Manpur &amp; Gaya</p>
                    </div>
                  </div>
                  <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>Upload doctor&apos;s prescription or message medicine list.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>Receive instant price confirmation with maximum discounts.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>Dispatched in tamper-proof sealed pack with GST invoice.</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/30 text-center space-y-3">
                  <UploadCloud className="w-8 h-8 text-emerald-400 mx-auto" />
                  <div>
                    <h4 className="text-sm font-bold text-white">Have a Doctor&apos;s Slip?</h4>
                    <p className="text-xs text-slate-300 mt-0.5">Order directly on WhatsApp with 1 tap</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => openOrderModal()}
                    className="w-full py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wide shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Click Here to Send Prescription</span>
                  </button>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-400 pt-2">
                  <span>📍 Bhusunda, Manpur</span>
                  <span>🕒 7:00 AM – 10:30 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SHORT ABOUT PREVIEW */}
      <section className="py-16 sm:py-20 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Image / Visual Column */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 group">
                <img
                  src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1000&q=80"
                  alt="Rupa Medical Hall Pharmacy Dispensary"
                  className="w-full h-80 sm:h-96 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-xs font-bold text-emerald-400 bg-slate-900/80 px-2.5 py-1 rounded-full border border-emerald-500/30">
                    Trusted Since 15+ Years
                  </span>
                  <h3 className="text-lg font-bold mt-2">Serving Manpur, Gaya with Integrity</h3>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
                <ShieldCheck className="w-3.5 h-3.5" /> About Rupa Medical Hall
              </div>

              <h2 className="text-2xl sm:text-4xl font-bold font-display text-slate-900 dark:text-white leading-tight">
                Dedicated to Community Healthcare &amp; Genuine Pharmaceutical Care
              </h2>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Located on the prominent main route in Bhusunda, Manpur, <strong>Rupa Medical Hall</strong> is a registered pharmacy committed to providing authentic allopathic medicines, medical devices, pediatric nutrition, and essential health supplies.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Licensed Pharmacist on-premise consultation</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Strict cold chain for insulins &amp; vaccines</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>100% Genuine batch-coded medications</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Affordable pricing with genuine discounts</span>
                </div>
              </div>

              <div className="pt-3">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white dark:bg-emerald-600 dark:hover:bg-emerald-700 font-semibold text-xs transition-all shadow"
                >
                  <span>Read Full Business Story &amp; Vision</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED SERVICES (MAXIMUM 6) */}
      <section className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/60 px-3 py-1 rounded-full">
              Our Core Offerings
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-display text-slate-900 dark:text-white">
              Featured Healthcare &amp; Medical Services
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Comprehensive pharmaceutical, diagnostic, and home-care support designed for the people of Manpur &amp; Gaya.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Pill className="w-6 h-6" />
                    </div>
                    {service.badge && (
                      <span className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <ul className="mt-4 space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                    {service.features.slice(0, 3).map((f, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                        <span className="truncate">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => openOrderModal(service.title)}
                    className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 flex items-center gap-1"
                  >
                    <span>Order via WhatsApp</span>
                    <Send className="w-3 h-3" />
                  </button>

                  <Link
                    to="/services"
                    className="text-xs font-semibold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
                  >
                    Learn more &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs tracking-wide uppercase transition-all shadow-md active:scale-95"
            >
              <span>Explore All Pharmacy Services &amp; Stock Checker</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="py-16 sm:py-20 bg-white dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/60 px-3 py-1 rounded-full">
              Trust &amp; Reliability
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-display text-slate-900 dark:text-white">
              Why Families in Manpur Rely on Rupa Medical Hall
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              We uphold uncompromising standards for quality, cold-chain safety, and ethical pharmacy practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">100% Genuine Medicines</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Directly sourced from authorized pharmaceutical distributors of Cipla, Sun, GSK, Abbott, and Alkem. Zero counterfeit guarantee.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-blue-600 flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Continuous Cold Storage</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Strict 2°C – 8°C temperature monitoring with uninterrupted power backup to protect the potency of insulins, eye drops, and vaccines.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-950/60 text-teal-600 flex items-center justify-center">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Fast 30-45 Min Delivery</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Doorstep delivery across Bhusunda, Buniyadganj, Manpur, and Gaya with sealed tamper-evident packaging and printed GST invoice.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 flex items-center justify-center">
                <HeartPulse className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Expert Guidance</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Friendly registered pharmacists always available to explain dosage schedules, storage tips, and generic substitution options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FEATURED PRODUCTS PREVIEW */}
      <section className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/60 px-3 py-1 rounded-full">
                Popular Essentials
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold font-display text-slate-900 dark:text-white mt-2">
                Fast-Moving Medicines &amp; Healthcare Items
              </h2>
            </div>
            <Link
              to="/services"
              className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 flex items-center gap-1"
            >
              <span>Search All 10,000+ Items</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((med) => (
              <div
                key={med.id}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded">
                      {med.category}
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-600">
                      In Stock ({med.availableQuantity})
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {med.name}
                  </h3>
                  <p className="text-xs text-slate-500 italic mt-0.5">{med.genericName}</p>

                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="text-lg font-extrabold text-slate-900 dark:text-white">
                      ₹{(med.discountedPrice || med.mrp).toFixed(2)}
                    </span>
                    {med.discountedPrice && (
                      <span className="text-xs text-slate-400 line-through">₹{med.mrp.toFixed(2)}</span>
                    )}
                    <span className="text-xs text-slate-500 ml-auto">{med.packSize}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => openOrderModal(med.name)}
                  className="mt-4 w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-sm active:scale-95"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Order on WhatsApp</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CUSTOMER REVIEWS PREVIEW */}
      <section className="py-16 sm:py-20 bg-white dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/60 px-3 py-1 rounded-full">
              Community Feedback
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-display text-slate-900 dark:text-white">
              What Our Local Customers Say
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Real experiences from families in Bhusunda, Buniyadganj, and Gaya who rely on Rupa Medical Hall.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {previewReviews.map((rev) => (
              <div
                key={rev.id}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic">
                    &ldquo;{rev.comment}&rdquo;
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">{rev.author}</div>
                    <div className="text-slate-500 text-[11px]">{rev.location}</div>
                  </div>
                  {rev.verified && (
                    <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded">
                      Verified Buyer
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ PREVIEW */}
      <section className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/60 px-3 py-1 rounded-full">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-display text-slate-900 dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Clear answers about ordering, prescription requirements, and delivery in Manpur.
            </p>
          </div>

          <div className="space-y-3">
            {previewFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-sm transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2.5">
                      <HelpCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      {faq.question}
                    </span>
                    <span className="text-emerald-600 font-bold text-lg flex-shrink-0">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 border-t border-slate-100 dark:border-slate-800 pt-3 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/contact"
              className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 inline-flex items-center gap-1.5"
            >
              <span>Have more questions? Contact our Pharmacist &rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 8. CTA BANNER FOR PRESCRIPTION / WHATSAPP */}
      <section className="py-14 bg-gradient-to-r from-emerald-700 to-teal-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="space-y-2 max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display">
                Need Medicines Urgently in Bhusunda or Manpur?
              </h2>
              <p className="text-xs sm:text-sm text-emerald-100">
                Send your prescription or medicine list on WhatsApp now. Get verified stock and doorstep delivery in 30-45 minutes.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => openOrderModal()}
                className="py-3.5 px-6 rounded-xl bg-white text-emerald-800 hover:bg-emerald-50 font-bold text-xs tracking-wider uppercase shadow-xl transition-all flex items-center gap-2 active:scale-95"
              >
                <Send className="w-4 h-4 text-emerald-600" />
                <span>Order on WhatsApp</span>
              </button>
              <a
                href={`tel:+91${SITE_CONFIG.phone}`}
                className="py-3.5 px-6 rounded-xl bg-emerald-900/60 hover:bg-emerald-900 text-white font-bold text-xs uppercase tracking-wider border border-white/20 transition-all flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call 9504857165</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 9. LATEST HEALTH TIPS PREVIEW */}
      <section className="py-16 sm:py-20 bg-white dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/60 px-3 py-1 rounded-full">
                Pharmacist Insights
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold font-display text-slate-900 dark:text-white mt-2">
                Latest Health &amp; Medication Tips
              </h2>
            </div>
            <span className="text-xs text-slate-500">Expert guidance from licensed pharmacists</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {HEALTH_TIPS_DATA.slice(0, 2).map((tip) => (
              <div
                key={tip.id}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 space-y-4"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-2.5 py-1 rounded-full">
                    {tip.tag}
                  </span>
                  <span className="text-slate-400">{tip.readTime}</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {tip.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {tip.summary}
                </p>

                <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                  {tip.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. NEWSLETTER / HEALTH ALERTS */}
      <section className="py-14 bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
            <BellRing className="w-6 h-6" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold font-display">
            Stay Updated on Seasonal Health Alerts &amp; Discounts
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
            Subscribe for monthly medicine refill reminders, seasonal flu advisories, and special promotional prices on healthcare devices.
          </p>

          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              required
              placeholder="Enter your email address..."
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              className="flex-1 px-4 py-3 text-xs sm:text-sm rounded-xl bg-slate-800 border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button
              type="submit"
              className="py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow"
            >
              Subscribe
            </button>
          </form>

          {newsletterSuccess && (
            <p className="text-xs text-emerald-400 animate-fadeIn">
              ✓ Thank you for subscribing to Rupa Medical Hall health updates!
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
