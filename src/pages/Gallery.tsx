import { useState, useEffect, useCallback } from 'react';
import { 
  X, 
  ZoomIn, 
  ChevronLeft, 
  ChevronRight, 
  Filter, 
  Sparkles,
  Camera
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { GALLERY_DATA } from '../data/galleryData';
import { GalleryItem } from '../types';

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories = [
    "All",
    "Store Front & Interior",
    "Medicine Shelves",
    "Health Devices",
    "Baby & Mother Care",
    "Cold Chain & Storage"
  ];

  const filteredItems = selectedCategory === "All"
    ? GALLERY_DATA
    : GALLERY_DATA.filter(item => item.category === selectedCategory);

  const handleOpenLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const handleNext = useCallback(() => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % filteredItems.length);
    }
  }, [activeLightboxIndex, filteredItems.length]);

  const handlePrev = useCallback(() => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  }, [activeLightboxIndex, filteredItems.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') handleCloseLightbox();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, handleNext, handlePrev]);

  const currentItem: GalleryItem | null = activeLightboxIndex !== null ? filteredItems[activeLightboxIndex] : null;

  return (
    <div className="w-full">
      <SEO 
        title="Store Gallery &amp; Facilities | Rupa Medical Hall"
        description="View photographs of Rupa Medical Hall store front, organized medicine shelves, cold-chain refrigeration, and diagnostic equipment in Bhusunda, Manpur."
        pathname="/gallery"
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Gallery", item: "/gallery" }
        ]}
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950 text-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            <Camera className="w-3.5 h-3.5" /> Inside Our Pharmacy
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
            Store Gallery &amp; Facilities
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Take a visual tour of our hygienic dispensary, temperature-controlled refrigeration, and systematically organized medicine shelves in Bhusunda, Manpur.
          </p>
        </div>
      </section>

      {/* Main Gallery Section */}
      <section className="py-16 sm:py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start md:justify-center">
            <span className="text-xs font-semibold text-slate-400 flex items-center gap-1 pl-1 flex-shrink-0">
              <Filter className="w-3.5 h-3.5" /> Category:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? "bg-emerald-600 text-white shadow-md font-semibold"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => handleOpenLightbox(index)}
                className="group relative rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-800 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  
                  {/* Category Pill on Image */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold bg-slate-900/80 text-emerald-300 backdrop-blur-sm border border-emerald-500/30">
                    {item.category}
                  </span>

                  {/* Zoom Overlay Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="p-3 rounded-full bg-emerald-600/90 text-white shadow-lg backdrop-blur-sm transform scale-75 group-hover:scale-100 transition-transform">
                      <ZoomIn className="w-5 h-5" />
                    </span>
                  </div>
                </div>

                {/* Caption below image */}
                <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 space-y-1">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POPUP LIGHTBOX MODAL WITH ZOOM & CONTROLS */}
      {currentItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/90 backdrop-blur-md animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          {/* Close Button */}
          <button
            onClick={handleCloseLightbox}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-3 rounded-full bg-slate-800/80 text-white hover:bg-slate-800 transition-colors z-20 focus:outline-none"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev Button */}
          <button
            onClick={handlePrev}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-800/80 text-white hover:bg-emerald-600 transition-all z-20 focus:outline-none shadow-lg"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-800/80 text-white hover:bg-emerald-600 transition-all z-20 focus:outline-none shadow-lg"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image & Caption Container */}
          <div className="relative max-w-4xl max-h-[85vh] w-full flex flex-col items-center justify-center overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl">
            <div className="w-full flex-1 max-h-[68vh] overflow-hidden flex items-center justify-center bg-black">
              <img
                src={currentItem.imageUrl}
                alt={currentItem.title}
                className="max-h-[68vh] max-w-full object-contain"
              />
            </div>

            <div className="w-full p-4 sm:p-6 bg-slate-900 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-white">
              <div>
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block mb-1">
                  {currentItem.category} ({activeLightboxIndex! + 1} / {filteredItems.length})
                </span>
                <h4 className="text-base sm:text-lg font-bold font-display">
                  {currentItem.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
                  {currentItem.caption}
                </p>
              </div>

              <div className="text-xs text-slate-500 whitespace-nowrap self-end sm:self-center">
                Press Esc to close
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
