import { ServiceCategory } from '../types';

export const SERVICES_DATA: ServiceCategory[] = [
  {
    id: "prescription-medicines",
    title: "Prescription Medicines & Chemist Dispensing",
    shortDesc: "Authentic branded and generic pharmaceutical drugs dispensed strictly by certified pharmacists.",
    fullDesc: "We stock over 10,000+ certified allopathic medications spanning cardiology, diabetology, neurology, gastroenterology, pediatrics, orthopedics, and acute care. Each prescription is verified for dosage accuracy and batch expiry.",
    iconName: "Pill",
    badge: "100% Genuine Certified",
    features: [
      "Verification by Qualified Pharmacist",
      "Direct Procurement from Top Pharma Brands (Cipla, Sun, Alkem, GSK, Pfizer)",
      "Strict Cold-Chain Refrigeration for Vaccines & Insulins",
      "Batch & Expiry Date Printed on Every GST Invoice"
    ],
    popularItems: ["Cardiac Care", "Diabetes Management", "Antibiotics", "Gastro & Acid Reflux", "Respiratory Inhalers"]
  },
  {
    id: "otc-health-first-aid",
    title: "OTC Health & Daily Essentials",
    shortDesc: "Over-the-counter fever, pain, digestive, cough remedies, and first aid kits.",
    fullDesc: "Immediate access to reliable everyday health supplies without long waits. From fast-acting pain balms, fever syrups, and ORS electrolyte sachets to antiseptic solutions and cotton gauze.",
    iconName: "Stethoscope",
    badge: "Instant Availability",
    features: [
      "Headache, Fever & Pain Relievers",
      "Digestive Antacids & ORS Solutions",
      "Cough & Cold Lozenges / Syrups",
      "Bandages, Surgical Tapes & Cotton Gauze"
    ],
    popularItems: ["Dolo 650", "Digene Gel", "Electral ORS", "Volini Spray", "Band-Aid & Cotton"]
  },
  {
    id: "medical-devices-diagnostics",
    title: "Health Devices & Monitoring Equipment",
    shortDesc: "Digital BP monitors, glucometers, nebulizers, pulse oximeters, and clinical thermometers.",
    fullDesc: "Empower your family with dependable at-home health monitoring tools. All our instruments come with manufacturer warranties, demonstration guidance, and replacement test strips / accessories.",
    iconName: "Activity",
    badge: "Tested & Calibrated",
    features: [
      "Digital Upper-Arm Blood Pressure Monitors (Omron, Dr. Morepen)",
      "Blood Glucose Monitoring Kits & Test Strips (Accu-Chek, OneTouch)",
      "Ultrasonic Mesh & Compressor Nebulizers for Asthma",
      "Infrared Non-Contact Thermometers & Pulse Oximeters"
    ],
    popularItems: ["Omron BP Monitor", "Accu-Chek Strips", "Mesh Nebulizer", "Vaporizer Steamer", "Digital Thermometer"]
  },
  {
    id: "baby-mother-care",
    title: "Baby Care & Mother Nutrition",
    shortDesc: "Infant milk formulas, baby food cereals, dermatologically tested skincare, and diapers.",
    fullDesc: "Gentle, safe, and pediatrician-recommended products for newborns, growing toddlers, and expecting mothers. Fresh stocks guaranteed with rigorous expiration checks.",
    iconName: "Baby",
    badge: "Gentle & Safe",
    features: [
      "Infant Formula & Baby Cereals (Cerelac, Lactogen, Similac)",
      "Premium Diaper Pants & Wet Wipes (Pampers, MamyPoko, Huggies)",
      "Baby Skincare & Massage Oils (Himalaya Baby, Sebamed, Johnson's)",
      "Maternal Nutritional Drinks & Supplements"
    ],
    popularItems: ["Nestle Cerelac", "Pampers Pants", "Himalaya Baby Lotion", "Gripe Water", "Mother Horlicks"]
  },
  {
    id: "surgical-orthopedic-support",
    title: "Surgical Supplies & Orthopedic Support",
    shortDesc: "Knee braces, lumbar belts, crepe bandages, walking aids, and wound dressing supplies.",
    fullDesc: "Comprehensive surgical and rehabilitation equipment for post-operative recovery, elderly mobility, and sports injury rehabilitation.",
    iconName: "ShieldCheck",
    badge: "Hospital Grade",
    features: [
      "Orthopedic Knee, Ankle, Wrist & Cervical Collars",
      "Lumbar Sacral Support Belts for Back Pain",
      "Sterile Surgical Gloves, Syringes & IV Infusion Sets",
      "Hospital-Grade Antiseptic Solutions (Betadine, Savlon, Spirit)"
    ],
    popularItems: ["Knee Support", "Lumbar Belt", "Crepe Bandage", "Betadine 10%", "Micropore Tape"]
  },
  {
    id: "vitamins-ayurveda-supplements",
    title: "Supplements, Vitamins & Herbal Wellness",
    shortDesc: "Multivitamins, Calcium-D3, Protein powders, Chyawanprash, and herbal remedies.",
    fullDesc: "Boost your body's natural vitality with authentic dietary supplements and trusted Ayurvedic health formulations from Dabur, Baidyanath, and Himalaya.",
    iconName: "HeartPulse",
    badge: "Immunity Boosters",
    features: [
      "Calcium + Vitamin D3 & B-Complex Formulations",
      "Immunity Boosters & Antioxidant Capsules (Zinc, Vitamin C)",
      "Pure Herbal Syrups, Liver Tonics & Chyawanprash",
      "Protein Supplements for Seniors & Sports Fitness"
    ],
    popularItems: ["Shelcal 500", "Becosules Z", "Dabur Chyawanprash", "Liv.52 Syrup", "Revital H"]
  },
  {
    id: "home-delivery-service",
    title: "Fast Doorstep Delivery in Manpur & Gaya",
    shortDesc: "Send your prescription on WhatsApp and get medicines delivered right to your home in 30-45 minutes.",
    fullDesc: "No need to step out in bad weather or when unwell. Just click a photo of your doctor's prescription, send it on WhatsApp (9504857165), and our delivery partner will safely bring your sealed package with a printed GST invoice.",
    iconName: "Truck",
    badge: "30-45 Min Service",
    features: [
      "Free Local Delivery on eligible orders across Manpur & Bhusunda",
      "Quick Verification & Price Quote on WhatsApp within minutes",
      "Cash on Delivery & Instant UPI Payment (GPay, PhonePe, Paytm)",
      "Tamper-Evident Sealed Packaging with Invoice"
    ],
    popularItems: ["Prescription Medicines", "Urgent Baby Formula", "Monthly Diab/BP Refills", "Emergency First Aid"]
  },
  {
    id: "emergency-on-call-assistance",
    title: "24/7 Emergency Medicine Support",
    shortDesc: "Urgent medicine dispatch and phone guidance for late-night healthcare emergencies.",
    fullDesc: "Medical needs don't follow office hours. In case of emergency medicine requirements late at night, call or WhatsApp our emergency helpline number directly for expedited support.",
    iconName: "Clock",
    badge: "Always Available",
    features: [
      "Priority assistance for life-saving & urgent medicines",
      "Direct line to Pharmacist on duty",
      "Immediate stock availability check",
      "Guidance for nearest hospital/clinic contacts in Gaya"
    ],
    popularItems: ["Inhalers", "Insulin Vials", "Cardiac SOS Meds", "High Fever Syrups", "Nebulizer Solutions"]
  }
];
