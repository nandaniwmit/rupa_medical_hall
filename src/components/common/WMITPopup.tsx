import React from 'react';
import { X, ExternalLink, ShieldCheck, Sparkles, Globe, Code2 } from 'lucide-react';

interface WMITPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WMITPopup({ isOpen, onClose }: WMITPopupProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="wmit-modal-title"
    >
      <div className="relative w-full max-w-lg bg-gradient-to-b from-[#252822] to-[#1E1F1A] text-[#FAF9F5] rounded-3xl shadow-2xl border border-[#3E4237] p-6 sm:p-8 overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#445F49]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#D97757]/15 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-[#B3B39E] hover:text-white bg-[#2C2C24] hover:bg-[#38382E] transition-colors"
          aria-label="Close popup"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Brand Badge */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#445F49] to-[#6A8B70] p-0.5 shadow-lg flex items-center justify-center">
            <div className="w-full h-full bg-[#1E1F1A] rounded-[14px] flex items-center justify-center">
              <Code2 className="w-6 h-6 text-[#A9BFA9]" />
            </div>
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#29382D] text-[#A9BFA9] border border-[#445F49] mb-1">
              <Sparkles className="w-3 h-3" /> Official Digital Partner
            </div>
            <h3 id="wmit-modal-title" className="text-xl font-bold text-white font-display">
              WebMaker IT Solutions
            </h3>
          </div>
        </div>

        {/* Body Content */}
        <p className="text-sm text-[#D6D6C2] leading-relaxed mb-6">
          This digital pharmacy platform for <strong className="text-[#A9BFA9] font-semibold">Rupa Medical Hall</strong> is proudly engineered and powered by <strong>WebMaker IT Solutions (WMIT)</strong>. Built with enterprise-grade React, modern PWA offline technology, high-speed CDN delivery, and local SEO precision.
        </p>

        {/* Highlights Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="p-3 rounded-2xl bg-[#2C2C24] border border-[#3E4237]">
            <div className="flex items-center gap-2 text-[#A9BFA9] text-xs font-semibold mb-1">
              <ShieldCheck className="w-4 h-4" /> 100% Verified Code
            </div>
            <p className="text-[11px] text-[#A8A894]">High-performance production architecture</p>
          </div>
          <div className="p-3 rounded-2xl bg-[#2C2C24] border border-[#3E4237]">
            <div className="flex items-center gap-2 text-[#CDD9CD] text-xs font-semibold mb-1">
              <Globe className="w-4 h-4" /> Local SEO &amp; PWA
            </div>
            <p className="text-[11px] text-[#A8A894]">Optimized for search &amp; mobile installation</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
          <a
            href="https://webmakerit.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-1/2 py-2.5 px-4 rounded-xl bg-[#445F49] hover:bg-[#364B3A] text-white font-semibold text-xs tracking-wide uppercase transition-all shadow-md flex items-center justify-center gap-2"
          >
            <span>Visit WebMaker IT</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-1/2 py-2.5 px-4 rounded-xl bg-[#2C2C24] hover:bg-[#38382E] text-[#D6D6C2] font-semibold text-xs tracking-wide uppercase transition-all"
          >
            Back to Pharmacy
          </button>
        </div>

        <p className="text-center text-[11px] text-[#8C8C75] mt-4">
          &copy; {new Date().getFullYear()} WebMaker IT Solutions. All rights reserved.
        </p>
      </div>
    </div>
  );
}
