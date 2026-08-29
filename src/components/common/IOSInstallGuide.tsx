import React from 'react';
import { X, Share, PlusSquare, CheckCircle, Smartphone } from 'lucide-react';

interface IOSInstallGuideProps {
  isOpen: boolean;
  onClose: () => void;
}

export function IOSInstallGuide({ isOpen, onClose }: IOSInstallGuideProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="ios-install-title"
    >
      <div 
        className="relative w-full max-w-md bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 p-6 overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <h3 id="ios-install-title" className="text-base font-bold text-slate-900 dark:text-white">
                Add to Home Screen
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Install Rupa Medical Hall on iOS / Safari
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Close installation guide"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Visual Steps */}
        <div className="py-5 space-y-4">
          <div className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center">
              1
            </span>
            <div className="text-sm text-slate-700 dark:text-slate-300">
              <p className="font-semibold text-slate-900 dark:text-white mb-0.5">
                Tap the Share button
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mt-1">
                Look for the <Share className="w-3.5 h-3.5 text-blue-500 inline" /> icon at the bottom of your Safari browser bar.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center">
              2
            </span>
            <div className="text-sm text-slate-700 dark:text-slate-300">
              <p className="font-semibold text-slate-900 dark:text-white mb-0.5">
                Select &quot;Add to Home Screen&quot;
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mt-1">
                Scroll down the share sheet and tap <PlusSquare className="w-3.5 h-3.5 text-slate-700 dark:text-slate-300 inline" /> <strong>Add to Home Screen</strong>.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center">
              3
            </span>
            <div className="text-sm text-slate-700 dark:text-slate-300">
              <p className="font-semibold text-slate-900 dark:text-white mb-0.5">
                Tap &quot;Add&quot; in the top right
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mt-1">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500 inline" /> The app icon will appear instantly on your home screen for quick offline medicine access.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Button */}
        <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
          <button
            type="button"
            onClick={onClose}
            className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-all shadow-sm"
          >
            Got It, Thanks!
          </button>
        </div>
      </div>
    </div>
  );
}
