import { useState, useMemo } from 'react';
import { Search, Filter, CheckCircle, AlertTriangle, XCircle, ShoppingBag, Info, FileText } from 'lucide-react';
import rawMedicineData from '../../data/medicineStock.json';
import { MedicineItem, StockStatus } from '../../types';

interface MedicineStockCheckerProps {
  onSelectMedicineForOrder?: (medicineName: string) => void;
  compact?: boolean;
}

export function MedicineStockChecker({ onSelectMedicineForOrder, compact = false }: MedicineStockCheckerProps) {
  const medicines = rawMedicineData as MedicineItem[];
  
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedStatus, setSelectedStatus] = useState<string>("All");
  const [selectedMedDetail, setSelectedMedDetail] = useState<MedicineItem | null>(null);

  const categories = useMemo(() => {
    const cats = new Set(medicines.map(m => m.category));
    return ["All", ...Array.from(cats)];
  }, [medicines]);

  const filteredMedicines = useMemo(() => {
    return medicines.filter((med) => {
      const matchesSearch = 
        med.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        med.genericName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        med.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        med.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = selectedCategory === "All" || med.category === selectedCategory;
      const matchesStatus = selectedStatus === "All" || med.status === selectedStatus;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [medicines, searchTerm, selectedCategory, selectedStatus]);

  const getStatusBadge = (status: StockStatus) => {
    switch (status) {
      case "Available":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-[#E7ECE7] text-[#364B3A] dark:bg-[#29382D] dark:text-[#A9BFA9] border border-[#CDD9CD] dark:border-[#445F49]">
            <CheckCircle className="w-3.5 h-3.5 text-[#445F49] dark:text-[#7E9F83]" />
            <span>Available</span>
          </span>
        );
      case "Limited Stock":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-[#FDF3E7] text-[#9E5F1E] dark:bg-[#3D2C15] dark:text-[#E4B066] border border-[#F4DCBE] dark:border-[#5E4522]">
            <AlertTriangle className="w-3.5 h-3.5 text-[#B87333]" />
            <span>Limited Stock</span>
          </span>
        );
      case "Out of Stock":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-[#FAEBE6] text-[#D97757] dark:bg-[#3D1E16] dark:text-[#DD937B] border border-[#F4D5CB] dark:border-[#6B2F1F]">
            <XCircle className="w-3.5 h-3.5 text-[#D97757]" />
            <span>Out of Stock</span>
          </span>
        );
    }
  };

  const handleOrderClick = (medName: string) => {
    if (onSelectMedicineForOrder) {
      onSelectMedicineForOrder(medName);
    } else {
      const url = `https://wa.me/919504857165?text=${encodeURIComponent(`Hello Rupa Medical Hall, I would like to order: ${medName}. Please confirm availability and price.`)}`;
      window.open(url, '_blank');
    }
  };

  return (
    <div className="w-full bg-[#FAF9F5] dark:bg-[#22241E] rounded-3xl shadow-lg border border-[#D6D6C2] dark:border-[#353931] p-4 sm:p-6 lg:p-8">
      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#E7ECE7] text-[#364B3A] dark:bg-[#29382D] dark:text-[#A9BFA9] border border-[#CDD9CD] dark:border-[#445F49] mb-2">
            <Search className="w-3.5 h-3.5" /> Live Medicine Stock Checker
          </div>
          <h2 className="text-xl sm:text-2xl font-bold font-display text-[#3D3D33] dark:text-[#FAF9F5]">
            Check Medicine Availability in Real-Time
          </h2>
          <p className="text-xs sm:text-sm text-[#7A7A66] dark:text-[#A8A894] mt-1">
            Search 10,000+ medicines, generic compositions, health devices &amp; baby products at Bhusunda store.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-medium text-[#7A7A66] dark:text-[#A8A894]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#445F49] animate-pulse" />
          <span>Inventory Updated Today</span>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="space-y-3 mb-6">
        <div className="relative">
          <Search className="w-5 h-5 text-[#8C8C75] absolute left-3.5 top-3.5" />
          <input
            type="text"
            id="medicine-search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by brand name (e.g. Dolo 650, Telma, Omron) or generic formula (e.g. Paracetamol, Metformin)..."
            className="w-full pl-11 pr-10 py-3 rounded-2xl border border-[#D6D6C2] dark:border-[#353931] bg-white dark:bg-[#1E1F1A] text-[#3D3D33] dark:text-[#FAF9F5] placeholder:text-[#8C8C75] text-sm sm:text-base focus:ring-2 focus:ring-[#445F49] focus:outline-none transition-all shadow-inner"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-3 top-3 text-[#8C8C75] hover:text-[#3D3D33] dark:hover:text-[#FAF9F5] p-1 text-xs"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Pills Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          <span className="text-xs font-semibold text-[#8C8C75] flex items-center gap-1 pl-1 flex-shrink-0">
            <Filter className="w-3.5 h-3.5" /> Category:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? "bg-[#445F49] text-white shadow-sm font-semibold"
                  : "bg-[#EAEAE0] dark:bg-[#2C2C24] text-[#5A5A45] dark:text-[#D6D6C2] hover:bg-[#E0E0D4] dark:hover:bg-[#353931]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count & Stock Status Filter */}
      <div className="flex items-center justify-between py-2 border-b border-[#E2E2D5] dark:border-[#353931] text-xs text-[#7A7A66] dark:text-[#A8A894] mb-4">
        <span>Showing <strong>{filteredMedicines.length}</strong> items</span>
        <div className="flex items-center gap-1.5">
          <span>Filter Status:</span>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-2.5 py-1 rounded-xl border border-[#D6D6C2] dark:border-[#353931] bg-white dark:bg-[#1E1F1A] text-[#3D3D33] dark:text-[#FAF9F5] text-xs focus:outline-none"
          >
            <option value="All">All Statuses</option>
            <option value="Available">Available Only</option>
            <option value="Limited Stock">Limited Stock</option>
            <option value="Out of Stock">Out of Stock</option>
          </select>
        </div>
      </div>

      {/* Product List / Cards Grid */}
      {filteredMedicines.length === 0 ? (
        <div className="text-center py-12 px-4 bg-white dark:bg-[#1E1F1A] rounded-2xl border border-dashed border-[#D6D6C2] dark:border-[#353931]">
          <AlertTriangle className="w-10 h-10 text-[#D97757] mx-auto mb-3" />
          <h4 className="text-base font-bold text-[#3D3D33] dark:text-[#FAF9F5]">
            No exact matching medicine found in current catalog
          </h4>
          <p className="text-xs text-[#7A7A66] dark:text-[#A8A894] max-w-md mx-auto mt-1 mb-4">
            We might still have this medicine in our offline dispensary or can procure it within 2 hours.
          </p>
          <button
            onClick={() => handleOrderClick(searchTerm || "Special Medicine Request")}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#445F49] hover:bg-[#364B3A] text-white text-xs font-bold shadow transition-all"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Inquire on WhatsApp (9504857165)</span>
          </button>
        </div>
      ) : (
        <div className={`grid grid-cols-1 ${compact ? 'sm:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3'} gap-4`}>
          {filteredMedicines.map((med) => (
            <div
              key={med.id}
              className="flex flex-col justify-between p-5 rounded-2xl bg-white dark:bg-[#252822] border border-[#E2E2D5] dark:border-[#353931] hover:border-[#445F49] dark:hover:border-[#7E9F83] transition-all hover:shadow-md group"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="text-[11px] font-semibold text-[#364B3A] dark:text-[#A9BFA9] bg-[#E7ECE7] dark:bg-[#29382D] px-2 py-0.5 rounded-md">
                    {med.category}
                  </span>
                  {getStatusBadge(med.status)}
                </div>

                <h4 className="text-base font-bold font-display text-[#3D3D33] dark:text-[#FAF9F5] group-hover:text-[#445F49] dark:group-hover:text-[#7E9F83] transition-colors">
                  {med.name}
                </h4>
                
                <p className="text-xs text-[#7A7A66] dark:text-[#A8A894] line-clamp-1 italic mt-0.5">
                  {med.genericName}
                </p>

                <div className="flex items-center gap-2 text-xs text-[#5A5A45] dark:text-[#D6D6C2] mt-2">
                  <span className="font-medium">{med.brand}</span>
                  <span>•</span>
                  <span>{med.packSize}</span>
                </div>

                <div className="mt-3 flex items-center justify-between text-xs pt-2 border-t border-[#EFEFE7] dark:border-[#353931]">
                  <div>
                    <span className="text-[#8C8C75] line-through mr-1.5">₹{med.mrp.toFixed(2)}</span>
                    <span className="text-base font-extrabold text-[#3D3D33] dark:text-[#FAF9F5]">
                      ₹{(med.discountedPrice || med.mrp).toFixed(2)}
                    </span>
                  </div>
                  
                  <div className="text-right text-[11px] text-[#7A7A66] dark:text-[#A8A894]">
                    <div>Exp: <strong className="text-[#3D3D33] dark:text-[#FAF9F5]">{med.expiry}</strong></div>
                    <div>Qty: <strong className="text-[#3D3D33] dark:text-[#FAF9F5]">{med.availableQuantity} units</strong></div>
                  </div>
                </div>

                {med.prescriptionRequired && (
                  <div className="mt-2 flex items-center gap-1 text-[11px] font-medium text-[#D97757] dark:text-[#EABAA9] bg-[#FAEBE6] dark:bg-[#4A241A] px-2 py-1 rounded-lg">
                    <FileText className="w-3 h-3 flex-shrink-0" />
                    <span>Prescription Required (Rx)</span>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="mt-4 pt-3 border-t border-[#EFEFE7] dark:border-[#353931] flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedMedDetail(med)}
                  className="p-2 rounded-xl text-[#5A5A45] dark:text-[#D6D6C2] hover:bg-[#EAEAE0] dark:hover:bg-[#353931] transition-colors text-xs flex items-center justify-center"
                  title="View Details"
                >
                  <Info className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  disabled={med.status === "Out of Stock"}
                  onClick={() => handleOrderClick(med.name)}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                    med.status === "Out of Stock"
                      ? "bg-[#EAEAE0] dark:bg-[#2C2C24] text-[#8C8C75] cursor-not-allowed"
                      : "bg-[#445F49] hover:bg-[#364B3A] text-white shadow-sm active:scale-95"
                  }`}
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>{med.status === "Out of Stock" ? "Notify When In Stock" : "Order on WhatsApp"}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Details Popup Modal */}
      {selectedMedDetail && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-lg bg-[#FAF9F5] dark:bg-[#22241E] rounded-3xl p-6 shadow-2xl border border-[#D6D6C2] dark:border-[#353931]">
            <div className="flex items-start justify-between pb-3 border-b border-[#E2E2D5] dark:border-[#353931]">
              <div>
                <span className="text-xs font-semibold text-[#445F49] dark:text-[#7E9F83] uppercase">
                  {selectedMedDetail.category}
                </span>
                <h3 className="text-xl font-bold font-display text-[#3D3D33] dark:text-[#FAF9F5] mt-0.5">
                  {selectedMedDetail.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedMedDetail(null)}
                className="p-1.5 rounded-xl text-[#8C8C75] hover:text-[#3D3D33] dark:hover:text-[#FAF9F5] hover:bg-[#EAEAE0] dark:hover:bg-[#353931]"
              >
                ✕
              </button>
            </div>

            <div className="py-4 space-y-3 text-xs sm:text-sm">
              <div className="grid grid-cols-2 gap-3 p-3 rounded-2xl bg-white dark:bg-[#1E1F1A] border border-[#E2E2D5] dark:border-[#353931]">
                <div>
                  <span className="text-[#8C8C75] text-[11px] block">Generic Composition</span>
                  <span className="font-semibold text-[#3D3D33] dark:text-[#FAF9F5]">{selectedMedDetail.genericName}</span>
                </div>
                <div>
                  <span className="text-[#8C8C75] text-[11px] block">Manufacturer / Brand</span>
                  <span className="font-semibold text-[#3D3D33] dark:text-[#FAF9F5]">{selectedMedDetail.brand}</span>
                </div>
                <div>
                  <span className="text-[#8C8C75] text-[11px] block">MRP / Discounted Price</span>
                  <span className="font-bold text-[#445F49] dark:text-[#7E9F83]">
                    ₹{(selectedMedDetail.discountedPrice || selectedMedDetail.mrp).toFixed(2)}{" "}
                    <span className="line-through text-[#8C8C75] font-normal">₹{selectedMedDetail.mrp.toFixed(2)}</span>
                  </span>
                </div>
                <div>
                  <span className="text-[#8C8C75] text-[11px] block">Availability Status</span>
                  {getStatusBadge(selectedMedDetail.status)}
                </div>
              </div>

              <div>
                <span className="font-bold text-[#3D3D33] dark:text-[#FAF9F5] block mb-1">Description</span>
                <p className="text-[#5A5A45] dark:text-[#D6D6C2] leading-relaxed">{selectedMedDetail.description}</p>
              </div>

              <div>
                <span className="font-bold text-[#3D3D33] dark:text-[#FAF9F5] block mb-1">Recommended Usage &amp; Guidance</span>
                <p className="text-[#5A5A45] dark:text-[#D6D6C2] leading-relaxed">{selectedMedDetail.usage}</p>
              </div>
            </div>

            <div className="pt-3 border-t border-[#E2E2D5] dark:border-[#353931] flex gap-3">
              <button
                type="button"
                onClick={() => {
                  const name = selectedMedDetail.name;
                  setSelectedMedDetail(null);
                  handleOrderClick(name);
                }}
                className="flex-1 py-2.5 px-4 rounded-xl bg-[#445F49] hover:bg-[#364B3A] text-white font-bold text-xs flex items-center justify-center gap-2 shadow"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Instant WhatsApp Order</span>
              </button>
              <button
                type="button"
                onClick={() => setSelectedMedDetail(null)}
                className="py-2.5 px-4 rounded-xl bg-[#EAEAE0] dark:bg-[#2C2C24] text-[#3D3D33] dark:text-[#FAF9F5] font-semibold text-xs hover:bg-[#DEDECF] dark:hover:bg-[#353931]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
