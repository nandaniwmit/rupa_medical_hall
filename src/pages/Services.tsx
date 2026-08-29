import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { 
  Pill, 
  Stethoscope, 
  Activity, 
  Baby, 
  ShieldCheck, 
  HeartPulse, 
  Truck, 
  Clock, 
  Send, 
  PhoneCall, 
  CheckCircle2, 
  Sparkles,
  Search,
  HelpCircle,
  Layers
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { SERVICES_DATA } from '../data/servicesData';
import { MedicineStockChecker } from '../components/medicine/MedicineStockChecker';
import { SITE_CONFIG } from '../config/siteConfig';

export function Services() {
  const { openOrderModal } = useOutletContext<{ openOrderModal: (medicine?: string) => void }>();
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>("All");

  const serviceCategories = [
    "All",
    "Prescription Medicines",
    "OTC Health & Daily Essentials",
    "Health Devices & Monitoring Equipment",
    "Baby Care & Mother Nutrition",
    "Surgical Supplies & Orthopedic Support",
    "Supplements, Vitamins & Herbal Wellness",
    "Fast Doorstep Delivery in Manpur & Gaya",
    "24/7 Emergency Medicine Support"
  ];

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Pill": return <Pill className="w-6 h-6" />;
      case "Stethoscope": return <Stethoscope className="w-6 h-6" />;
      case "Activity": return <Activity className="w-6 h-6" />;
      case "Baby": return <Baby className="w-6 h-6" />;
      case "ShieldCheck": return <ShieldCheck className="w-6 h-6" />;
      case "HeartPulse": return <HeartPulse className="w-6 h-6" />;
      case "Truck": return <Truck className="w-6 h-6" />;
      case "Clock": return <Clock className="w-6 h-6" />;
      default: return <Pill className="w-6 h-6" />;
    }
  };

  const filteredServices = activeCategoryFilter === "All"
    ? SERVICES_DATA
    : SERVICES_DATA.filter(s => s.title.toLowerCase().includes(activeCategoryFilter.toLowerCase()) || activeCategoryFilter.toLowerCase().includes(s.title.toLowerCase()));

  return (
    <div className="w-full">
      <SEO 
        title="Services &amp; Medicine Stock Checker | Rupa Medical Hall"
        description="Explore complete pharmacy services and live medicine inventory at Rupa Medical Hall, Bhusunda, Manpur. Prescription drugs, OTC, health devices, baby care &amp; doorstep delivery."
        pathname="/services"
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Services", item: "/services" }
        ]}
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950 text-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            <Sparkles className="w-3.5 h-3.5" /> Full-Spectrum Healthcare Solutions
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
            Pharmacy Services &amp; Stock Availability
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            From certified prescription dispensing and digital health monitors to infant care and 30-minute doorstep delivery across Manpur.
          </p>

          <div className="pt-2 flex justify-center gap-3">
            <a
              href="#stock-checker-section"
              className="py-2.5 px-5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all flex items-center gap-2"
            >
              <Search className="w-4 h-4" />
              <span>Check Live Medicine Stock</span>
            </a>
          </div>
        </div>
      </section>

      {/* EXCLUSIVE FEATURE SECTION: LIVE MEDICINE STOCK CHECKER */}
      <section id="stock-checker-section" className="py-12 sm:py-16 bg-slate-100 dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MedicineStockChecker onSelectMedicineForOrder={(name) => openOrderModal(name)} />
        </div>
      </section>

      {/* Comprehensive Category-Wise Services */}
      <section className="py-16 sm:py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/60 px-3 py-1 rounded-full">
              Complete Categories
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-display text-slate-900 dark:text-white">
              Category-Wise Healthcare Offerings
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Each department is managed with rigorous safety protocols and direct manufacturer sourcing.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start md:justify-center">
            <span className="text-xs font-semibold text-slate-400 flex items-center gap-1 pl-1 flex-shrink-0">
              <Layers className="w-3.5 h-3.5" /> Filter:
            </span>
            {serviceCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategoryFilter(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  activeCategoryFilter === cat
                    ? "bg-emerald-600 text-white shadow-sm font-semibold"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredServices.map((srv) => (
              <div
                key={srv.id}
                className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 hover:border-emerald-500/60 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shadow-inner">
                      {getServiceIcon(srv.iconName)}
                    </div>
                    {srv.badge && (
                      <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950 px-3 py-1 rounded-full border border-emerald-300 dark:border-emerald-700">
                        {srv.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white">
                    {srv.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {srv.fullDesc}
                  </p>

                  {/* Highlights List */}
                  <div className="space-y-2 pt-2">
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                      Key Highlights &amp; Assurance:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-300">
                      {srv.features.map((f, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Popular items tag list */}
                  <div className="pt-2">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                      Popular Formulations &amp; Brands:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {srv.popularItems.map((item, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Service Card CTA */}
                <div className="mt-8 pt-4 border-t border-slate-200/80 dark:border-slate-700/80 flex flex-wrap items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => openOrderModal(srv.title)}
                    className="py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm active:scale-95 transition-all"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Order on WhatsApp</span>
                  </button>

                  <a
                    href={`tel:+91${SITE_CONFIG.phone}`}
                    className="py-2.5 px-4 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-semibold text-xs transition-colors flex items-center gap-1.5"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Inquire by Phone</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Health Checkup Kiosk Info */}
      <section className="py-14 bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-3xl bg-slate-800/60 border border-slate-700 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-800/60">
                In-Store Wellness Desk
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                Complimentary Blood Pressure &amp; Pulse Check
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                Walk into our Bhusunda counter anytime during store hours for a quick, complimentary BP reading using calibrated Omron medical monitors.
              </p>
            </div>

            <a
              href={SITE_CONFIG.address.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs tracking-wider uppercase transition-all shadow-md flex-shrink-0"
            >
              Get Directions to Store
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
