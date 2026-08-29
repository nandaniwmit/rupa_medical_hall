import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  HeartPulse, 
  Lock, 
  User, 
  Eye, 
  EyeOff, 
  AlertCircle, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight,
  Pill,
  Clock,
  Send,
  LogOut
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { SITE_CONFIG } from '../config/siteConfig';

export function Login() {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [forgotPasswordOpen, setForgotPasswordOpen] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotSent, setForgotSent] = useState(false);

  // Authenticated state for interactive demo experience
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfile, setUserProfile] = useState<{ name: string; phone: string } | null>(null);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!identifier.trim() || !password.trim()) {
      setErrorMessage('Please enter your email or mobile number and password.');
      return;
    }

    if (password.length < 4) {
      setErrorMessage('Password must be at least 4 characters long.');
      return;
    }

    setIsLoading(true);

    // Simulate secure authentication API response
    setTimeout(() => {
      setIsLoading(false);
      setIsLoggedIn(true);
      setUserProfile({
        name: identifier.includes('@') ? identifier.split('@')[0] : 'Patient User',
        phone: identifier.includes('@') ? '9504857165' : identifier
      });
    }, 1000);
  };

  const handleForgotSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (forgotEmail) {
      setForgotSent(true);
      setTimeout(() => {
        setForgotSent(false);
        setForgotPasswordOpen(false);
        setForgotEmail('');
      }, 3000);
    }
  };

  return (
    <div className="w-full min-h-[80vh] flex flex-col justify-center py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950">
      <SEO 
        title="Patient &amp; Customer Portal Login | Rupa Medical Hall"
        description="Login to your Rupa Medical Hall patient account to check prescription refill records, track medicine deliveries, and manage saved prescriptions in Manpur, Gaya."
        pathname="/login"
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Login", item: "/login" }
        ]}
      />

      <div className="max-w-md w-full mx-auto space-y-6">
        {/* Brand Header */}
        <div className="text-center space-y-2">
          <Link to="/" className="inline-flex items-center gap-3 group focus:outline-none">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 p-0.5 shadow-md flex items-center justify-center">
              <div className="w-full h-full bg-white dark:bg-slate-900 rounded-[14px] flex items-center justify-center">
                <HeartPulse className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
            </div>
            <div className="text-left">
              <span className="block text-xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white leading-tight">
                RUPA <span className="text-emerald-600 dark:text-emerald-400">MEDICAL</span>
              </span>
              <span className="block text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Patient &amp; Customer Portal
              </span>
            </div>
          </Link>
          <h1 className="text-2xl font-bold font-display text-slate-900 dark:text-white mt-4">
            {isLoggedIn ? "Welcome to Your Portal" : "Sign in to Your Account"}
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {isLoggedIn ? "Manage prescriptions, orders & refills" : "Access your prescription records & fast refill orders"}
          </p>
        </div>

        {/* Logged in Dashboard Mock View */}
        {isLoggedIn && userProfile ? (
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl space-y-6 animate-fadeIn">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold flex items-center justify-center">
                  {userProfile.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">{userProfile.name}</h3>
                  <p className="text-xs text-slate-500">{userProfile.phone}</p>
                </div>
              </div>
              <button
                onClick={() => {
                  setIsLoggedIn(false);
                  setUserProfile(null);
                }}
                className="p-2 rounded-lg text-slate-400 hover:text-red-600 transition-colors"
                title="Log out"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>

            {/* Active Refill Reminder */}
            <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 space-y-2">
              <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 text-xs font-bold">
                <Clock className="w-4 h-4" /> Monthly Refill Due in 4 Days
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                Telma 40 Tablet &amp; Glycomet-GP 1 are due for monthly replenishment.
              </p>
              <a
                href={`https://wa.me/91${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent("Hello Rupa Medical Hall, please send my regular monthly refill of Telma 40 and Glycomet-GP 1.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:underline pt-1"
              >
                <Send className="w-3 h-3" /> Quick 1-Click WhatsApp Refill
              </a>
            </div>

            {/* Past Orders List */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Recent Prescription History
              </h4>
              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white block">Dolo 650 &amp; Shelcal 500</span>
                    <span className="text-slate-400 text-[11px]">Delivered to Bhusunda • 12 Aug 2026</span>
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded">
                    Delivered
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white block">Omron BP Monitor Unit</span>
                    <span className="text-slate-400 text-[11px]">In-store purchase with GST bill • 28 July 2026</span>
                  </div>
                  <span className="text-[11px] font-semibold text-blue-600 bg-blue-50 dark:bg-blue-950 px-2 py-0.5 rounded">
                    Warranty Active
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/services"
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow"
              >
                <Pill className="w-4 h-4" />
                <span>Search Medicine Stock &amp; Order More</span>
              </Link>
            </div>
          </div>
        ) : (
          /* Login Form */
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl space-y-5">
            {errorMessage && (
              <div className="p-3 rounded-xl bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleLoginSubmit} className="space-y-4">
              {/* Email / Mobile Field */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Email or Mobile Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. 9504857165 or name@gmail.com"
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    className="w-full pl-10 pr-3.5 py-2.5 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => setForgotPasswordOpen(true)}
                    className="text-xs text-emerald-600 dark:text-emerald-400 hover:underline font-semibold"
                  >
                    Forgot Password?
                  </button>
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-10 py-2.5 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Remember Me Option */}
              <div className="flex items-center">
                <label className="inline-flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="rounded text-emerald-600 focus:ring-emerald-500"
                  />
                  <span>Remember my login on this device</span>
                </label>
              </div>

              {/* Secure Login Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-75"
              >
                {isLoading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Verifying Secure Access...</span>
                  </>
                ) : (
                  <>
                    <Lock className="w-3.5 h-3.5" />
                    <span>Secure Sign In</span>
                  </>
                )}
              </button>
            </form>

            {/* Demo Note */}
            <div className="pt-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-800 text-slate-500 dark:text-slate-400 text-[11px] text-center space-y-1">
              <span className="font-semibold text-slate-700 dark:text-slate-300 block">
                Demo Patient Access
              </span>
              <p>Enter any phone number or email with any 4+ char password to preview the dashboard.</p>
            </div>
          </div>
        )}

        {/* Security Assurance footer */}
        <div className="flex items-center justify-center gap-2 text-xs text-slate-400 text-center">
          <ShieldCheck className="w-4 h-4 text-emerald-500" />
          <span>256-Bit SSL Encrypted Healthcare Portal</span>
        </div>
      </div>

      {/* Forgot Password Modal */}
      {forgotPasswordOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-sm bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-2xl border border-slate-200 dark:border-slate-800 space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">Reset Password</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Enter your registered mobile number or email to receive password reset instructions.
            </p>

            <form onSubmit={handleForgotSubmit} className="space-y-3">
              <input
                type="text"
                required
                placeholder="Mobile number or Email..."
                value={forgotEmail}
                onChange={(e) => setForgotEmail(e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />

              {forgotSent && (
                <p className="text-xs text-emerald-600 font-semibold">
                  ✓ Reset OTP sent via SMS / WhatsApp!
                </p>
              )}

              <div className="flex gap-2 pt-2">
                <button
                  type="submit"
                  className="flex-1 py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs"
                >
                  Send OTP
                </button>
                <button
                  type="button"
                  onClick={() => setForgotPasswordOpen(false)}
                  className="py-2 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-xs"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
