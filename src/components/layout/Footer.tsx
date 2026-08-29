import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  ShieldCheck, 
  HeartPulse, 
  ExternalLink,
  ChevronRight,
  Shield,
  FileCheck
} from 'lucide-react';
import { SITE_CONFIG } from '../../config/siteConfig';

interface FooterProps {
  onOpenOrderModal: () => void;
  onOpenWMITPopup: () => void;
}

export function Footer({ onOpenOrderModal, onOpenWMITPopup }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleWMITClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onOpenWMITPopup();
  };

  return (
    <footer className="w-full bg-[#1E1F1A] text-[#D6D6C2] border-t border-[#353931]">
      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Column 1: Brand & Overview */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#445F49] to-[#6A8B70] p-0.5 shadow-md flex items-center justify-center">
                <div className="w-full h-full bg-[#252822] rounded-[10px] flex items-center justify-center">
                  <HeartPulse className="w-5 h-5 text-[#A9BFA9]" />
                </div>
              </div>
              <div>
                <span className="block text-lg font-extrabold font-display tracking-tight text-white leading-none">
                  RUPA <span className="text-[#A9BFA9]">MEDICAL</span>
                </span>
                <span className="block text-[10px] font-semibold text-[#8C8C75] tracking-wider uppercase mt-0.5">
                  Chemist &amp; Druggist • Manpur
                </span>
              </div>
            </Link>

            <p className="text-xs text-[#A8A894] leading-relaxed">
              Your most trusted neighborhood pharmacy in Bhusunda, Manpur, Bihar. Providing 100% genuine allopathic medicines, healthcare monitoring devices, baby care products, and fast doorstep delivery.
            </p>

            {/* Badges */}
            <div className="pt-1 space-y-1.5 text-xs text-[#D6D6C2]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#A9BFA9] flex-shrink-0" />
                <span>100% Genuine Certified Stock</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-[#CDD9CD] flex-shrink-0" />
                <span>Licensed Pharmacist Consultation</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#A9BFA9]" />
              Quick Navigation
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="hover:text-[#A9BFA9] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#7E9F83]" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#A9BFA9] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#7E9F83]" />
                  <span>About Our Store</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#A9BFA9] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#7E9F83]" />
                  <span>Services &amp; Medicine Checker</span>
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#A9BFA9] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#7E9F83]" />
                  <span>Store Gallery &amp; Facilities</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#A9BFA9] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#7E9F83]" />
                  <span>Contact &amp; Location Map</span>
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-[#A9BFA9] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#7E9F83]" />
                  <span>Customer &amp; Patient Portal</span>
                </Link>
              </li>
            </ul>

            <div className="mt-4 pt-3 border-t border-[#353931]">
              <button
                type="button"
                onClick={onOpenOrderModal}
                className="w-full py-2 px-3 rounded-lg bg-[#29382D] hover:bg-[#364B3A] text-[#A9BFA9] border border-[#445F49] font-semibold text-xs transition-all flex items-center justify-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                <span>WhatsApp Order Form</span>
              </button>
            </div>
          </div>

          {/* Column 3: Working Hours & Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#A9BFA9]" />
              Store Timings
            </h3>
            <div className="space-y-2.5 text-xs">
              <div className="p-2.5 rounded-lg bg-[#252822] border border-[#353931]">
                <div className="text-[#A8A894]">Monday - Saturday</div>
                <div className="font-semibold text-white">7:00 AM – 10:30 PM</div>
              </div>
              <div className="p-2.5 rounded-lg bg-[#252822] border border-[#353931]">
                <div className="text-[#A8A894]">Sunday</div>
                <div className="font-semibold text-white">7:30 AM – 10:00 PM</div>
              </div>
              <div className="p-2.5 rounded-lg bg-[#232E25] border border-[#3A543E] text-[#A9BFA9]">
                <div className="font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#A9BFA9] animate-ping" />
                  Emergency 24/7 on WhatsApp
                </div>
                <div className="text-[11px] text-[#CDD9CD] mt-0.5">Call or message for SOS supplies</div>
              </div>
            </div>
          </div>

          {/* Column 4: Contact & Google Map */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#A9BFA9]" />
              Store Address
            </h3>
            <div className="space-y-3 text-xs">
              <p className="text-[#D6D6C2] leading-relaxed">
                <strong>Rupa Medical Hall</strong><br />
                Bhusunda, Manpur, Gaya,<br />
                Bihar - 823003, India<br />
                <span className="text-[11px] text-[#A8A894]">(Near Phalgu River bridge approach &amp; Manpur Chauraha)</span>
              </p>

              <div className="space-y-1 text-xs">
                <a
                  href={`tel:+91${SITE_CONFIG.phone}`}
                  className="flex items-center gap-2 text-[#D6D6C2] hover:text-[#A9BFA9] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#A9BFA9]" />
                  <span>+91 9504857165</span>
                </a>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-2 text-[#D6D6C2] hover:text-[#A9BFA9] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#A9BFA9]" />
                  <span className="truncate">{SITE_CONFIG.email}</span>
                </a>
              </div>

              <a
                href={SITE_CONFIG.address.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#252822] hover:bg-[#2F332B] text-[#D6D6C2] border border-[#3E4237] font-medium text-xs transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#A9BFA9]" />
                <span>Get Directions in Google Maps</span>
              </a>
            </div>
          </div>
        </div>

        {/* Policies & Disclaimers Strip */}
        <div className="mt-12 pt-6 border-t border-[#353931] flex flex-wrap items-center justify-between gap-4 text-xs text-[#8C8C75]">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#7E9F83]" />
            <span>Schedule H/H1 Drugs dispensed only against a registered doctor&apos;s prescription.</span>
          </div>

          <div className="flex items-center gap-4 flex-wrap text-[#A8A894]">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">Terms &amp; Conditions</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">Drug Dispensing Disclaimer</span>
          </div>
        </div>
      </div>

      {/* Copyright Line with Mandatory Exact WMIT Trigger in Center */}
      <div className="bg-[#161713] py-4 px-4 border-t border-[#282B24] text-xs text-[#8C8C75] text-center">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            &copy; {currentYear} {SITE_CONFIG.businessName}. All rights reserved.
          </div>

          {/* REQUIRED FOOTER POPUP TRIGGER — PRESERVE EXACTLY */}
          <div className="text-center">
            <a 
              href="#" 
              onClick={handleWMITClick}
              className="wmit-popup-trigger font-semibold text-[#A9BFA9] hover:text-[#CDD9CD] transition-colors underline underline-offset-4 decoration-[#57785D]"
            >
              Developed by WMIT
            </a>
          </div>

          <div className="text-[11px] text-[#8C8C75]">
            Bhusunda, Manpur, Bihar 823003
          </div>
        </div>
      </div>
    </footer>
  );
}
