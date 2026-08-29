import { Link, useOutletContext } from 'react-router-dom';
import { 
  ShieldCheck, 
  HeartHandshake, 
  Award, 
  Clock, 
  MapPin, 
  PhoneCall, 
  Send, 
  CheckCircle2, 
  Sparkles,
  Building2,
  Calendar
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { SITE_CONFIG } from '../config/siteConfig';

export function About() {
  const { openOrderModal } = useOutletContext<{ openOrderModal: (medicine?: string) => void }>();

  const timelineEvents = [
    {
      year: "2010",
      title: "Establishment in Bhusunda, Manpur",
      desc: "Founded with a mission to eliminate spurious medicines and deliver genuine pharmaceutical care to families across Manpur and rural Gaya."
    },
    {
      year: "2015",
      title: "Cold Chain Storage Expansion",
      desc: "Installed high-efficiency pharmaceutical refrigeration units with 24/7 power backup to safely preserve insulins, vaccines, and biologics."
    },
    {
      year: "2019",
      title: "Comprehensive Health Devices Wing",
      desc: "Partnered with Omron, Accu-Chek, and Dr. Morepen to bring digital BP monitors, nebulizers, and diabetes kits directly to the neighborhood."
    },
    {
      year: "2022",
      title: "Doorstep WhatsApp Delivery Launch",
      desc: "Introduced dedicated 30-45 minute medicine delivery across Manpur and Bhusunda with instant digital prescription validation."
    },
    {
      year: "Today",
      title: "Trusted by 25,000+ Families",
      desc: "Continuing as Manpur's foremost patient-centric chemist, stocking 10,000+ medicines with digital billing and professional consultation."
    }
  ];

  const values = [
    {
      icon: ShieldCheck,
      title: "Zero-Counterfeit Guarantee",
      desc: "We buy directly from certified manufacturers and authorized super-stockists. Every product has verifiable batch codes and expiration dates."
    },
    {
      icon: HeartHandshake,
      title: "Compassionate Care",
      desc: "Healthcare is personal. We treat every customer with dignity, patient guidance on dosages, and honest advice regarding generic substitutes."
    },
    {
      icon: Award,
      title: "Professional Standards",
      desc: "Our dispensary follows strict Good Pharmacy Practice (GPP), clean hygiene protocols, and ethical Schedule H prescription regulations."
    },
    {
      icon: Clock,
      title: "Round-the-Clock Emergency Readiness",
      desc: "Our on-call WhatsApp and emergency phone lines ensure urgent life-saving supplies remain reachable whenever a medical need strikes."
    }
  ];

  return (
    <div className="w-full">
      <SEO 
        title="About Us | Trusted Story &amp; Pharmacist Commitment"
        description="Learn the history, mission, values, and pharmacist commitment of Rupa Medical Hall in Bhusunda, Manpur, Bihar. 15+ years of genuine healthcare trust."
        pathname="/about"
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "About Us", item: "/about" }
        ]}
      />

      {/* Page Header / Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950 text-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            <Sparkles className="w-3.5 h-3.5" /> Our Journey &amp; Legacy
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
            About Rupa Medical Hall
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Over a decade of unwavering dedication to genuine medicines, patient wellness, and dependable community healthcare in Manpur, Bihar.
          </p>
        </div>
      </section>

      {/* Business Story & Overview */}
      <section className="py-16 sm:py-20 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/60 px-3 py-1 rounded-full">
                Our Story
              </span>

              <h2 className="text-2xl sm:text-4xl font-bold font-display text-slate-900 dark:text-white leading-tight">
                Rooted in Manpur, Dedicated to Every Family&apos;s Health
              </h2>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                <strong>Rupa Medical Hall</strong> was established in Bhusunda, Manpur with a singular conviction: that every resident of Manpur and nearby Gaya deserves immediate access to 100% genuine, uncompromised medicines at fair and transparent prices.
              </p>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                What began as a modest retail counter has grown into one of the region&apos;s most dependable medical establishments, carrying over 10,000+ pharmaceutical formulations, surgical aids, pediatric nutrition products, and hospital-grade diagnostic instruments.
              </p>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 space-y-2">
                <div className="font-bold text-xs text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-emerald-600" /> Strategic Location &amp; Accessibility
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Conveniently situated along the main arterial route in Bhusunda, right near the approach to the Phalgu river bridge and Manpur Chauraha, making us easily accessible for daytime visits and late-night emergencies alike.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80"
                  alt="Medical Devices & Monitoring Equipment"
                  className="rounded-2xl h-48 sm:h-60 w-full object-cover shadow-md"
                  loading="lazy"
                />
                <img
                  src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=600&q=80"
                  alt="Organized Medicine Shelves"
                  className="rounded-2xl h-48 sm:h-60 w-full object-cover shadow-md mt-6"
                  loading="lazy"
                />
                <img
                  src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=600&q=80"
                  alt="Baby Care and Nutrition Section"
                  className="rounded-2xl h-48 sm:h-60 w-full object-cover shadow-md"
                  loading="lazy"
                />
                <img
                  src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80"
                  alt="Cold Storage and Refrigerator"
                  className="rounded-2xl h-48 sm:h-60 w-full object-cover shadow-md mt-6"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Mission & Vision 2-Column Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white">
                Our Mission
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                To guarantee uncompromised access to 100% authentic, scientifically stored medications, healthcare devices, and expert dispensing guidance to every household in Bhusunda, Manpur, and Greater Gaya, backed by prompt and compassionate service.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-950/60 text-blue-600 flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white">
                Our Vision
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                To be the most trusted and progressive healthcare provider in Bihar, combining traditional community pharmacist empathy with modern digital conveniences such as real-time stock verification, instant WhatsApp dispatch, and rapid doorstep delivery.
              </p>
            </div>
          </div>

          {/* Core Values 4-Grid */}
          <div>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white">
                Our Guiding Values
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                The principles that govern every prescription we verify and every patient we counsel.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((val, idx) => {
                const IconComponent = val.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3"
                  >
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">{val.title}</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{val.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Business Timeline */}
      <section className="py-16 sm:py-20 bg-white dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/60 px-3 py-1 rounded-full">
              Milestones
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-display text-slate-900 dark:text-white">
              The Journey of Rupa Medical Hall
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Tracing our growth from a local chemist counter to a modern full-service digital pharmacy.
            </p>
          </div>

          <div className="relative border-l-2 border-emerald-500/30 ml-4 sm:ml-32 space-y-8 pb-4">
            {timelineEvents.map((evt, i) => (
              <div key={i} className="relative pl-6 sm:pl-8">
                {/* Year tag positioned on the left for larger screens */}
                <div className="sm:absolute sm:-left-32 sm:w-24 sm:text-right font-extrabold text-sm sm:text-base text-emerald-600 dark:text-emerald-400 mb-1 sm:mb-0">
                  {evt.year}
                </div>

                {/* Timeline node dot */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-emerald-600 border-4 border-white dark:border-slate-900" />

                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 space-y-1.5">
                  <h4 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-emerald-600" />
                    <span>{evt.title}</span>
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {evt.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pharmacist & Quality Assurance Statement */}
      <section className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950 text-white shadow-2xl relative overflow-hidden">
            <div className="space-y-4 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Pharmacist Quality Pledge
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                &ldquo;Every patient is family. We will never sell a single pill we wouldn&apos;t give to our own loved ones.&rdquo;
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                At Rupa Medical Hall, our qualified dispensing team verifies every prescription for correct dosages, drug-to-drug interactions, and clear usage instructions in Hindi and English. We take pride in being a dependable healthcare anchor in Manpur, Gaya.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => openOrderModal()}
                  className="py-3 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider shadow transition-all flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Order via WhatsApp</span>
                </button>

                <Link
                  to="/contact"
                  className="py-3 px-6 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs transition-all border border-slate-700"
                >
                  Visit Our Store in Bhusunda
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
