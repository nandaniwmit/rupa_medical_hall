import React from 'react';
import { Download, CheckCircle2 } from 'lucide-react';
import { usePWAInstall } from '../../hooks/usePWAInstall';
import { IOSInstallGuide } from './IOSInstallGuide';

interface PWAInstallButtonProps {
  className?: string;
  variant?: 'nav' | 'hero' | 'floating' | 'banner';
}

export function PWAInstallButton({ className = "", variant = "nav" }: PWAInstallButtonProps) {
  const {
    isInstallable,
    isInstalled,
    showIOSGuide,
    setShowIOSGuide,
    installSuccess,
    promptInstall
  } = usePWAInstall();

  // If already installed, hide or show subtle badge
  if (isInstalled && variant !== 'floating') {
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#E7ECE7] text-[#364B3A] border border-[#CDD9CD] dark:bg-[#29382D] dark:text-[#A9BFA9] dark:border-[#445F49]">
        <CheckCircle2 className="w-3.5 h-3.5" />
        <span>App Installed</span>
      </span>
    );
  }

  // If not installable and not in development preview, return null
  if (!isInstallable && !isInstalled && variant === 'floating') {
    return null;
  }

  const baseStyle = "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#445F49] focus:ring-offset-2";

  let variantStyle = "";
  if (variant === 'nav') {
    variantStyle = "px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-[#445F49] hover:bg-[#364B3A] text-white shadow-sm hover:shadow active:scale-95 gap-1.5";
  } else if (variant === 'hero') {
    variantStyle = "px-5 py-3 rounded-xl text-sm font-semibold bg-[#FAF9F5] text-[#364B3A] border-2 border-[#D6D6C2] hover:bg-[#EAEAE0] shadow-sm hover:shadow active:scale-95 gap-2";
  } else if (variant === 'banner') {
    variantStyle = "px-4 py-2 rounded-xl text-sm font-semibold bg-[#445F49] hover:bg-[#364B3A] text-white shadow gap-2";
  }

  return (
    <>
      <button
        id="pwa-install-header-btn"
        type="button"
        onClick={promptInstall}
        className={`${baseStyle} ${variantStyle} ${className}`}
        aria-label="Add Rupa Medical Hall App to your Home Screen"
        title="Add to Home Screen"
      >
        <span className="text-base" role="img" aria-hidden="true">📲</span>
        <span>{installSuccess ? "App Installed!" : "Add to Home"}</span>
        <Download className="w-3.5 h-3.5 opacity-80" />
      </button>

      {showIOSGuide && (
        <IOSInstallGuide isOpen={showIOSGuide} onClose={() => setShowIOSGuide(false)} />
      )}
    </>
  );
}
