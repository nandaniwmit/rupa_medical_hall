import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  ShieldCheck, 
  Send, 
  User,
  HeartPulse
} from 'lucide-react';
import { SITE_CONFIG } from '../../config/siteConfig';
import { PWAInstallButton } from '../common/PWAInstallButton';
import { useDarkMode } from '../../hooks/useDarkMode';

interface HeaderProps {
  onOpenOrderModal: () => void;
}

export function Header({ onOpenOrderModal }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark, toggleDarkMode } = useDarkMode();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
    { name: 'Login', path: '/login', isLogin: true }
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200">
      {/* Top Utility Announcement Bar */}
      <div className="bg-[#252822] text-[#D6D6C2] text-xs py-2 px-4 border-b border-[#353931]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Left: Location & Emergency */}
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-1.5 text-[#A9BFA9] font-medium">
              <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
              <span>Bhusunda, Manpur, Bihar 823003</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-[#B3B39E]">
              <Clock className="w-3.5 h-3.5 text-[#A9BFA9]" />
              <span>Open Daily: 7:00 AM – 10:30 PM</span>
            </div>
          </div>

          {/* Right: Emergency hotline & Certified Badge */}
          <div className="flex items-center gap-3 ml-auto">
            <span className="hidden md:inline-flex items-center gap-1 text-[11px] bg-[#1E2E22] text-[#A9BFA9] px-2 py-0.5 rounded border border-[#344F3A]">
              <ShieldCheck className="w-3 h-3 text-[#A9BFA9]" /> 100% Genuine Medicines
            </span>
            <a
              href={`tel:+91${SITE_CONFIG.phone}`}
              className="inline-flex items-center gap-1.5 font-bold text-white hover:text-[#A9BFA9] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#A9BFA9]" />
              <span>24/7 Helpline: 9504857165</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav 
        className={`w-full bg-[#FAF9F5]/95 dark:bg-[#22241E]/95 backdrop-blur-md transition-shadow border-b border-[#E2E2D5] dark:border-[#353931] ${
          isScrolled ? 'shadow-sm py-2.5' : 'py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#445F49] rounded-xl"
            aria-label="Rupa Medical Hall Home"
          >
            {/* Custom Medical Brand Icon */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-[#445F49] to-[#6A8B70] p-0.5 shadow-sm flex items-center justify-center transform group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#FAF9F5] dark:bg-[#1E1F1A] rounded-[10px] flex items-center justify-center">
                <HeartPulse className="w-6 h-6 text-[#445F49] dark:text-[#7E9F83]" />
              </div>
            </div>
            <div>
              <span className="block text-lg sm:text-xl font-extrabold font-display tracking-tight text-[#3D3D33] dark:text-[#FAF9F5] leading-tight">
                RUPA <span className="text-[#445F49] dark:text-[#7E9F83]">MEDICAL</span>
              </span>
              <span className="block text-[10px] sm:text-[11px] font-semibold text-[#7A7A66] dark:text-[#B3B39E] tracking-wider uppercase">
                Chemist &amp; Druggist • Manpur
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-xl text-sm font-semibold transition-all ${
                    link.isLogin
                      ? isActive
                        ? 'bg-[#3D3D33] text-[#FAF9F5] dark:bg-[#FAF9F5] dark:text-[#3D3D33]'
                        : 'text-[#3D3D33] dark:text-[#FAF9F5] hover:bg-[#EAEAE0] dark:hover:bg-[#2C2C24]'
                      : isActive
                      ? 'bg-[#E7ECE7] text-[#364B3A] dark:bg-[#29382D] dark:text-[#A9BFA9]'
                      : 'text-[#5A5A45] dark:text-[#D6D6C2] hover:text-[#364B3A] dark:hover:text-[#FAF9F5] hover:bg-[#F0F0E8] dark:hover:bg-[#2C2C24]'
                  }`
                }
              >
                {link.isLogin ? (
                  <span className="flex items-center gap-1.5">
                    <User className="w-4 h-4" />
                    <span>{link.name}</span>
                  </span>
                ) : (
                  link.name
                )}
              </NavLink>
            ))}
          </div>

          {/* Right Action Icons & Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* PWA Add to Home Button */}
            <div className="hidden sm:block">
              <PWAInstallButton variant="nav" />
            </div>

            {/* Dark Mode Toggle */}
            <button
              type="button"
              onClick={toggleDarkMode}
              className="p-2 rounded-xl text-[#5A5A45] dark:text-[#D6D6C2] hover:bg-[#EAEAE0] dark:hover:bg-[#2C2C24] transition-colors focus:outline-none focus:ring-2 focus:ring-[#445F49]"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <Sun className="w-5 h-5 text-amber-300" /> : <Moon className="w-5 h-5 text-[#5A5A45]" />}
            </button>

            {/* WhatsApp Medicine Order CTA */}
            <button
              type="button"
              onClick={onOpenOrderModal}
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#445F49] hover:bg-[#364B3A] text-white font-bold text-xs shadow-sm active:scale-95 transition-all"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Order on WhatsApp</span>
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-[#3D3D33] dark:text-[#FAF9F5] hover:bg-[#EAEAE0] dark:hover:bg-[#2C2C24] focus:outline-none focus:ring-2 focus:ring-[#445F49]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[108px] bg-[#FAF9F5] dark:bg-[#22241E] border-b border-[#E2E2D5] dark:border-[#353931] shadow-2xl p-5 space-y-4 animate-fadeIn z-40 max-h-[calc(100vh-120px)] overflow-y-auto">
          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-between transition-all ${
                    isActive
                      ? 'bg-[#445F49] text-white shadow-sm'
                      : 'bg-[#EAEAE0] dark:bg-[#2C2C24] text-[#3D3D33] dark:text-[#FAF9F5] hover:bg-[#E0E0D4] dark:hover:bg-[#35352C]'
                  }`
                }
              >
                <span>{link.name}</span>
                {link.isLogin && <User className="w-4 h-4 opacity-70" />}
              </NavLink>
            ))}
          </div>

          {/* Quick Actions in Mobile Drawer */}
          <div className="pt-2 space-y-2.5">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrderModal();
              }}
              className="w-full py-3 px-4 rounded-xl bg-[#445F49] hover:bg-[#364B3A] text-white font-bold text-sm shadow-md flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Order Medicines on WhatsApp</span>
            </button>

            <div className="flex items-center gap-2">
              <div className="flex-1">
                <PWAInstallButton variant="banner" className="w-full justify-center" />
              </div>
              <a
                href={`tel:+91${SITE_CONFIG.phone}`}
                className="py-2.5 px-4 rounded-xl bg-[#EAEAE0] dark:bg-[#2C2C24] text-[#3D3D33] dark:text-[#FAF9F5] font-semibold text-xs flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#445F49]" />
                <span>Call 9504857165</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
