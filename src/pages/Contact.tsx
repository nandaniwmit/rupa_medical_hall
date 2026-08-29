import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  PhoneCall, 
  ExternalLink, 
  CheckCircle2, 
  AlertCircle, 
  MessageSquare,
  Sparkles,
  Building,
  Navigation
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { SITE_CONFIG } from '../config/siteConfig';
import confetti from 'canvas-confetti';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: 'General Inquiry / Medicine Availability',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setError('Please fill in your name, contact phone, and message.');
      return;
    }
    setError('');

    try {
      confetti({
        particleCount: 40,
        spread: 50,
        origin: { y: 0.6 }
      });
    } catch {}

    const text = 
`*Inquiry from Rupa Medical Hall Website*
━━━━━━━━━━━━━━━━━━━━
*Name:* ${formData.name.trim()}
*Phone:* ${formData.phone.trim()}
*Subject:* ${formData.subject}
*Message / Inquiry:*
${formData.message.trim()}
━━━━━━━━━━━━━━━━━━━━
Please reply to my query. Thank you!`;

    const whatsappUrl = `https://wa.me/91${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
    
    setSubmitted(true);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setSubmitted(false);
    }, 600);
  };

  return (
    <div className="w-full">
      <SEO 
        title="Contact Us &amp; Store Location | Rupa Medical Hall"
        description="Visit Rupa Medical Hall in Bhusunda, Manpur, Bihar 823003. Contact 9504857165 for emergency medicine availability, Google Maps route directions &amp; inquiry form."
        pathname="/contact"
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Contact Us", item: "/contact" }
        ]}
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950 text-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            <Sparkles className="w-3.5 h-3.5" /> 24/7 Healthcare Reachability
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
            Contact &amp; Visit Rupa Medical Hall
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Conveniently located in Bhusunda, Manpur, Bihar. Reach out via phone, WhatsApp, or visit us in person.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-16 sm:py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Quick Action Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Phone Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Call Helpline</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Direct phone consultation with our on-duty pharmacist for urgent queries.
              </p>
              <div className="pt-2">
                <a
                  href={`tel:+91${SITE_CONFIG.phone}`}
                  className="inline-flex items-center gap-2 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow transition-all active:scale-95"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Call +91 9504857165</span>
                </a>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <Send className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">WhatsApp Chat &amp; Orders</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Send doctor&apos;s slip, request doorstep delivery, or verify stock availability.
              </p>
              <div className="pt-2">
                <a
                  href={SITE_CONFIG.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow transition-all active:scale-95"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Message on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Store Location Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-100 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                <Navigation className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Store Address</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Bhusunda, Manpur, Gaya, Bihar - 823003 (Near Phalgu River bridge approach)
              </p>
              <div className="pt-2">
                <a
                  href={SITE_CONFIG.address.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow transition-all"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>
          </div>

          {/* Form & Map 2-Column Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Contact Form */}
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 space-y-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  Direct Inquiry
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white mt-1">
                  Send Us a Message
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  We reply within 10-15 minutes during store operating hours.
                </p>
              </div>

              {error && (
                <div className="p-3 rounded-xl bg-red-50 text-red-700 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  <span>{error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Your Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Anand Prakash"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Mobile / Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9504857165"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Subject
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  >
                    <option value="General Inquiry / Medicine Availability">Medicine Stock Availability</option>
                    <option value="Home Delivery Request">Doorstep Delivery in Manpur</option>
                    <option value="Prescription Validation">Prescription Validation / Refill</option>
                    <option value="Medical Device Inquiries">Health Device (BP Monitor / Nebulizer)</option>
                    <option value="Other">Other Healthcare Query</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Your Message / Required Medicines <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Please specify medicine names, dosages, or your delivery address..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>{submitted ? 'Dispatching to WhatsApp...' : 'Submit via WhatsApp'}</span>
                </button>
              </form>
            </div>

            {/* Google Map & Store Timings */}
            <div className="lg:col-span-6 space-y-6">
              {/* Interactive Google Map Embed */}
              <div className="rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-md h-72 sm:h-80 w-full relative">
                <iframe
                  title="Rupa Medical Hall Google Map Location"
                  src={SITE_CONFIG.address.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              {/* Working Hours Card */}
              <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 space-y-3">
                <h4 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-600" />
                  Operating Hours &amp; Emergency Availability
                </h4>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between py-1.5 border-b border-slate-200/60 dark:border-slate-700/60">
                    <span className="text-slate-500 dark:text-slate-400">Monday to Saturday:</span>
                    <span className="font-semibold text-slate-900 dark:text-white">7:00 AM – 10:30 PM</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-200/60 dark:border-slate-700/60">
                    <span className="text-slate-500 dark:text-slate-400">Sunday:</span>
                    <span className="font-semibold text-slate-900 dark:text-white">7:30 AM – 10:00 PM</span>
                  </div>
                  <div className="flex justify-between py-1.5 text-emerald-700 dark:text-emerald-400 font-bold">
                    <span>Emergency Late Night:</span>
                    <span>24/7 on WhatsApp (9504857165)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
