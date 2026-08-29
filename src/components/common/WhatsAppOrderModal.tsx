import React, { useState } from 'react';
import { X, Send, PhoneCall, UploadCloud, FileText, CheckCircle2, AlertCircle, Clock, MapPin, User, Phone, Pill } from 'lucide-react';
import { SITE_CONFIG } from '../../config/siteConfig';
import confetti from 'canvas-confetti';

interface WhatsAppOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMedicine?: string;
}

export function WhatsAppOrderModal({ isOpen, onClose, initialMedicine = "" }: WhatsAppOrderModalProps) {
  const [formData, setFormData] = useState({
    customerName: "",
    phone: "",
    email: "",
    address: "",
    medicineName: initialMedicine,
    hasPrescription: "Yes",
    preferredTime: "Immediate (30-45 Mins)",
    notes: ""
  });

  const [prescriptionFileName, setPrescriptionFileName] = useState<string>("");
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string>("");

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        setError("File size exceeds 10MB limit.");
        return;
      }
      setError("");
      setPrescriptionFileName(file.name);
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFilePreview(reader.result as string);
        };
        reader.readAsDataURL(file);
      } else {
        setFilePreview(null);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.customerName.trim() || !formData.phone.trim() || !formData.address.trim()) {
      setError("Please fill in your Name, Phone Number, and Delivery Address.");
      return;
    }
    if (!formData.medicineName.trim() && formData.hasPrescription === "No") {
      setError("Please provide the required medicine names or upload a prescription.");
      return;
    }

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch {}

    const text = 
`*Hello ${SITE_CONFIG.businessName}!*
*New Medicine Order Request*
━━━━━━━━━━━━━━━━━━━━
*Customer Name:* ${formData.customerName.trim()}
*Phone:* ${formData.phone.trim()}
*Delivery Address:* ${formData.address.trim()}
*Medicine Required:* ${formData.medicineName.trim() || 'Please check attached Prescription'}
*Prescription Available:* ${formData.hasPrescription}${prescriptionFileName ? ` (File: ${prescriptionFileName})` : ''}
*Preferred Time:* ${formData.preferredTime}
${formData.notes ? `*Notes / Instructions:* ${formData.notes.trim()}\n` : ''}━━━━━━━━━━━━━━━━━━━━
Please check availability, confirm total bill with discount, and dispatch. Thank you!`;

    const whatsappUrl = `https://wa.me/91${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
    
    setSubmitted(true);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      onClose();
      setSubmitted(false);
    }, 800);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm overflow-y-auto animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-modal-title"
    >
      <div className="relative w-full max-w-xl my-8 bg-[#FAF9F5] dark:bg-[#22241E] rounded-3xl shadow-2xl border border-[#D6D6C2] dark:border-[#353931] overflow-hidden">
        {/* Header with gradient banner */}
        <div className="bg-gradient-to-r from-[#445F49] to-[#364B3A] p-5 sm:p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-xl text-white/80 hover:text-white bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2 text-[#CDD9CD] text-xs font-semibold uppercase tracking-wider mb-1">
            <Send className="w-3.5 h-3.5" /> Instant WhatsApp Delivery
          </div>
          <h3 id="order-modal-title" className="text-xl sm:text-2xl font-bold font-display">
            Order Medicines on WhatsApp
          </h3>
          <p className="text-xs sm:text-sm text-[#CDD9CD] mt-1">
            Delivery in 30-45 Mins across Bhusunda, Manpur &amp; Gaya
          </p>
        </div>

        {/* Form Content */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          {error && (
            <div className="p-3 rounded-xl bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Customer Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#5A5A45] dark:text-[#D6D6C2] mb-1">
                Customer Name <span className="text-[#D97757]">*</span>
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-[#8C8C75] absolute left-3 top-3" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={formData.customerName}
                  onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                  className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-[#D6D6C2] dark:border-[#353931] bg-white dark:bg-[#1E1F1A] text-[#3D3D33] dark:text-[#FAF9F5] focus:ring-2 focus:ring-[#445F49] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#5A5A45] dark:text-[#D6D6C2] mb-1">
                Mobile Number <span className="text-[#D97757]">*</span>
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-[#8C8C75] absolute left-3 top-3" />
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9504857165"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-[#D6D6C2] dark:border-[#353931] bg-white dark:bg-[#1E1F1A] text-[#3D3D33] dark:text-[#FAF9F5] focus:ring-2 focus:ring-[#445F49] focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Delivery Address */}
          <div>
            <label className="block text-xs font-semibold text-[#5A5A45] dark:text-[#D6D6C2] mb-1">
              Delivery Address &amp; Landmark <span className="text-[#D97757]">*</span>
            </label>
            <div className="relative">
              <MapPin className="w-4 h-4 text-[#8C8C75] absolute left-3 top-3" />
              <input
                type="text"
                required
                placeholder="House No, Street, Landmark near Bhusunda / Manpur, Gaya"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-[#D6D6C2] dark:border-[#353931] bg-white dark:bg-[#1E1F1A] text-[#3D3D33] dark:text-[#FAF9F5] focus:ring-2 focus:ring-[#445F49] focus:outline-none"
              />
            </div>
          </div>

          {/* Medicine Required */}
          <div>
            <label className="block text-xs font-semibold text-[#5A5A45] dark:text-[#D6D6C2] mb-1">
              Medicine Name(s) &amp; Quantity
            </label>
            <div className="relative">
              <Pill className="w-4 h-4 text-[#8C8C75] absolute left-3 top-3" />
              <textarea
                rows={2}
                placeholder="e.g. Dolo 650 (1 Strip), Shelcal 500 (1 Strip), Cerelac Stage 1 (1 Box)"
                value={formData.medicineName}
                onChange={(e) => setFormData({ ...formData, medicineName: e.target.value })}
                className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-[#D6D6C2] dark:border-[#353931] bg-white dark:bg-[#1E1F1A] text-[#3D3D33] dark:text-[#FAF9F5] focus:ring-2 focus:ring-[#445F49] focus:outline-none"
              />
            </div>
          </div>

          {/* Prescription Upload Option */}
          <div className="p-4 rounded-2xl bg-[#EFEFE7] dark:bg-[#282B24] border border-[#D6D6C2] dark:border-[#353931] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#3D3D33] dark:text-[#FAF9F5] flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-[#445F49] dark:text-[#7E9F83]" />
                Doctor&apos;s Prescription Available?
              </span>
              <div className="flex items-center gap-3">
                <label className="inline-flex items-center gap-1.5 text-xs text-[#5A5A45] dark:text-[#D6D6C2] cursor-pointer">
                  <input
                    type="radio"
                    name="prescriptionOpt"
                    value="Yes"
                    checked={formData.hasPrescription === "Yes"}
                    onChange={() => setFormData({ ...formData, hasPrescription: "Yes" })}
                    className="text-[#445F49] focus:ring-[#445F49]"
                  />
                  <span>Yes</span>
                </label>
                <label className="inline-flex items-center gap-1.5 text-xs text-[#5A5A45] dark:text-[#D6D6C2] cursor-pointer">
                  <input
                    type="radio"
                    name="prescriptionOpt"
                    value="No"
                    checked={formData.hasPrescription === "No"}
                    onChange={() => setFormData({ ...formData, hasPrescription: "No" })}
                    className="text-[#445F49] focus:ring-[#445F49]"
                  />
                  <span>No / OTC</span>
                </label>
              </div>
            </div>

            {formData.hasPrescription === "Yes" && (
              <div className="pt-2 border-t border-[#D6D6C2] dark:border-[#3E4237]">
                <label className="relative flex flex-col items-center justify-center p-3 border-2 border-dashed border-[#A9BFA9] dark:border-[#57785D] rounded-xl cursor-pointer hover:bg-[#E5EAE5] dark:hover:bg-[#202822] transition-all text-center">
                  <UploadCloud className="w-6 h-6 text-[#445F49] dark:text-[#7E9F83] mb-1" />
                  <span className="text-xs font-semibold text-[#3D3D33] dark:text-[#FAF9F5]">
                    {prescriptionFileName ? prescriptionFileName : "Upload Prescription (Photo / PDF)"}
                  </span>
                  <span className="text-[11px] text-[#7A7A66] dark:text-[#A8A894]">
                    JPG, PNG, or PDF up to 10MB (You can also send photo directly on WhatsApp)
                  </span>
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    onChange={handleFileChange}
                    className="sr-only"
                  />
                </label>

                {filePreview && (
                  <div className="mt-2 flex items-center gap-2 p-2 rounded-lg bg-[#E7ECE7] dark:bg-[#29382D] text-xs text-[#364B3A] dark:text-[#A9BFA9]">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    <span className="truncate">Preview ready: {prescriptionFileName}</span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Delivery Time & Notes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#5A5A45] dark:text-[#D6D6C2] mb-1">
                Preferred Delivery Time
              </label>
              <div className="relative">
                <Clock className="w-4 h-4 text-[#8C8C75] absolute left-3 top-3" />
                <select
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-[#D6D6C2] dark:border-[#353931] bg-white dark:bg-[#1E1F1A] text-[#3D3D33] dark:text-[#FAF9F5] focus:ring-2 focus:ring-[#445F49] focus:outline-none"
                >
                  <option value="Immediate (30-45 Mins)">Immediate (30-45 Mins)</option>
                  <option value="Morning (8:00 AM - 11:00 AM)">Morning (8:00 AM - 11:00 AM)</option>
                  <option value="Afternoon (12:00 PM - 3:00 PM)">Afternoon (12:00 PM - 3:00 PM)</option>
                  <option value="Evening (5:00 PM - 8:00 PM)">Evening (5:00 PM - 8:00 PM)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#5A5A45] dark:text-[#D6D6C2] mb-1">
                Special Instructions (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. Ring bell, bring UPI QR code"
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-3 py-2 text-sm rounded-xl border border-[#D6D6C2] dark:border-[#353931] bg-white dark:bg-[#1E1F1A] text-[#3D3D33] dark:text-[#FAF9F5] focus:ring-2 focus:ring-[#445F49] focus:outline-none"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              disabled={submitted}
              className="flex-1 py-3 px-5 rounded-xl bg-[#445F49] hover:bg-[#364B3A] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-75"
            >
              <Send className="w-4 h-4" />
              <span>{submitted ? "Opening WhatsApp..." : "Send via WhatsApp"}</span>
            </button>

            <a
              href={`tel:+91${SITE_CONFIG.phone}`}
              className="py-3 px-5 rounded-xl bg-[#EAEAE0] hover:bg-[#DEDECF] dark:bg-[#2C2C24] dark:hover:bg-[#353931] text-[#3D3D33] dark:text-[#FAF9F5] font-semibold text-sm transition-all flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-[#445F49] dark:text-[#7E9F83]" />
              <span>Call Now</span>
            </a>
          </div>

          <p className="text-center text-[11px] text-[#7A7A66] dark:text-[#8C8C75]">
            🔒 Your contact details and prescription information remain strictly private and confidential.
          </p>
        </form>
      </div>
    </div>
  );
}
