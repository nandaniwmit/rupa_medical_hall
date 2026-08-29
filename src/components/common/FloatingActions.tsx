import { useState, useEffect } from 'react';
import { Phone, ArrowUp, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '../../config/siteConfig';

interface FloatingActionsProps {
  onOpenOrderModal: () => void;
}

export function FloatingActions({ onOpenOrderModal }: FloatingActionsProps) {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <aside aria-label="Quick Actions" className="fixed bottom-5 right-4 sm:right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* Back to top button */}
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="pointer-events-auto p-3 rounded-full bg-[#252822]/90 hover:bg-[#1E1F1A] text-white shadow-md backdrop-blur-sm border border-[#3E4237] transition-all transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#445F49]"
          aria-label="Scroll back to top"
          title="Back to Top"
        >
          <ArrowUp className="w-5 h-5 text-[#D6D6C2]" />
        </button>
      )}

      {/* Direct Call Button */}
      <a
        href={`tel:+91${SITE_CONFIG.phone}`}
        className="pointer-events-auto flex items-center justify-center w-12 h-12 rounded-full bg-[#3D3D33] hover:bg-[#2C2C24] text-white shadow-lg transition-all transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#445F49]"
        aria-label="Call Rupa Medical Hall now"
        title="Call 9504857165"
      >
        <Phone className="w-5 h-5 text-[#FAF9F5]" />
      </a>

      {/* Floating WhatsApp Button */}
      <div className="pointer-events-auto relative group">
        {/* Unread tooltip badge */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-[#252822] text-[#FAF9F5] text-xs font-semibold whitespace-nowrap shadow-xl border border-[#3E4237] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden sm:block">
          Order Medicines on WhatsApp 💊
        </div>

        <button
          type="button"
          onClick={onOpenOrderModal}
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#445F49] hover:bg-[#364B3A] text-white shadow-xl shadow-[#445F49]/40 transition-all transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#7E9F83]"
          aria-label="Open WhatsApp Medicine Order Form"
          title="Order Medicines on WhatsApp"
        >
          {/* Animated ping radar */}
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7E9F83] opacity-40" />
          
          <MessageCircle className="w-7 h-7 relative z-10" />
          
          {/* Notification bubble */}
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D97757] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-[#D97757] text-[9px] font-bold text-white items-center justify-center">1</span>
          </span>
        </button>
      </div>
    </aside>
  );
}
