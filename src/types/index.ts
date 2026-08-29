export type StockStatus = "Available" | "Limited Stock" | "Out of Stock";

export interface MedicineItem {
  id: string;
  name: string;
  genericName: string;
  brand: string;
  category: "Prescription" | "OTC" | "Diabetic & Cardiac" | "Baby Care" | "Pain & Fever" | "Antibiotics" | "Medical Devices" | "Vitamins & Supplements" | "First Aid & Surgical";
  mrp: number;
  discountedPrice?: number;
  availableQuantity: number;
  expiry: string;
  status: StockStatus;
  dosageForm: "Tablet" | "Syrup" | "Capsule" | "Injection" | "Drops" | "Cream / Ointment" | "Device" | "Powder" | "Spray";
  prescriptionRequired: boolean;
  packSize: string;
  description: string;
  usage: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  badge?: string;
  features: string[];
  popularItems: string[];
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
  medicineOrdered?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "Ordering & Delivery" | "Prescriptions" | "Store & Timings" | "Payment & Billing";
}

export interface HealthTip {
  id: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  points: string[];
  tag: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "Store Front & Interior" | "Medicine Shelves" | "Health Devices" | "Baby & Mother Care" | "Cold Chain & Storage";
  imageUrl: string;
  caption: string;
}

export interface WhatsAppOrderFormData {
  customerName: string;
  phone: string;
  email?: string;
  address: string;
  medicineName: string;
  hasPrescription: "Yes" | "No";
  prescriptionFile?: File | null;
  preferredTime: string;
  message?: string;
}
