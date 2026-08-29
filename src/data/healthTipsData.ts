import { HealthTip } from '../types';

export const HEALTH_TIPS_DATA: HealthTip[] = [
  {
    id: "tip-1",
    title: "Safe Storage of Daily Medicines at Home",
    category: "Medication Safety",
    readTime: "2 min read",
    tag: "Pharmacist Advice",
    summary: "How humidity and direct sunlight in Bihar's climate affect medicine efficacy.",
    points: [
      "Never store medicines in damp bathrooms or near kitchen heat.",
      "Store insulin pens and vials in the refrigerator vegetable compartment (2°C - 8°C), never inside the freezer.",
      "Always keep bottles tightly sealed in original blister packaging to protect from moisture."
    ]
  },
  {
    id: "tip-2",
    title: "Why You Must Never Stop Antibiotics Mid-Course",
    category: "Prescription Care",
    readTime: "3 min read",
    tag: "Antibiotic Awareness",
    summary: "Stopping antibiotics early can lead to bacterial resistance and relapse.",
    points: [
      "Even if symptoms vanish in 48 hours, harmful bacteria can survive if full duration is skipped.",
      "Never share leftover antibiotics with family members without a doctor's diagnosis.",
      "Take doses at evenly spaced intervals for steady blood concentration."
    ]
  },
  {
    id: "tip-3",
    title: "Accurate Blood Pressure Measurement at Home",
    category: "Health Monitoring",
    readTime: "2 min read",
    tag: "Diagnostic Guide",
    summary: "Key steps to avoid false readings with digital BP machines.",
    points: [
      "Rest quietly for 5 minutes before taking the reading; avoid tea/coffee 30 mins prior.",
      "Keep feet flat on the floor and place the arm cuff at heart level.",
      "Take two readings 2 minutes apart and record the average in your logbook."
    ]
  },
  {
    id: "tip-4",
    title: "Essential First Aid Kit Checklist for Every Family",
    category: "Family Health",
    readTime: "3 min read",
    tag: "Emergency Prep",
    summary: "Keep these basic supplies handy at home for sudden cuts, fever, and burns.",
    points: [
      "Digital thermometer, Dolo 650 (Paracetamol), ORS sachets, and antacid tablets.",
      "Betadine antiseptic liquid, sterile cotton, adhesive bandages, and crepe bandage.",
      "Burn ointment (Silver Sulfadiazine) and mosquito-repellent roll-on."
    ]
  }
];
