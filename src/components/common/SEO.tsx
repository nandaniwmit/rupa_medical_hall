import { useEffect } from 'react';
import { SITE_CONFIG } from '../../config/siteConfig';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  pathname?: string;
  ogImage?: string;
  schemaType?: 'Pharmacy' | 'LocalBusiness' | 'MedicalWebPage';
  faqSchema?: Array<{ question: string; answer: string }>;
  breadcrumbs?: Array<{ name: string; item: string }>;
}

export function SEO({
  title,
  description = SITE_CONFIG.description,
  keywords = "Rupa Medical Hall, Pharmacy in Manpur, Medical Store Bhusunda, Chemist Gaya, Buy Medicines Manpur Bihar, Online Medicine Order Manpur, 24x7 Pharmacy Gaya",
  pathname = "/",
  ogImage = "/icons/icon-512.png",
  faqSchema,
  breadcrumbs
}: SEOProps) {
  const fullTitle = title 
    ? `${title} | ${SITE_CONFIG.businessName} - Bhusunda, Manpur` 
    : `${SITE_CONFIG.businessName} | Trusted Pharmacy in Bhusunda, Manpur, Bihar`;

  const canonicalUrl = `${SITE_CONFIG.websiteUrl}${pathname === '/' ? '' : pathname}`;

  useEffect(() => {
    document.title = fullTitle;

    // Helper to update meta tag
    const updateMeta = (name: string, content: string, isProperty = false) => {
      const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        if (isProperty) el.setAttribute('property', name);
        else el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    updateMeta('description', description);
    updateMeta('keywords', keywords);
    updateMeta('og:title', fullTitle, true);
    updateMeta('og:description', description, true);
    updateMeta('og:url', canonicalUrl, true);
    updateMeta('og:image', `${SITE_CONFIG.websiteUrl}${ogImage}`, true);
    updateMeta('twitter:title', fullTitle);
    updateMeta('twitter:description', description);

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // Inject JSON-LD Schema
    const existingSchema = document.getElementById('jsonld-structured-data');
    if (existingSchema) {
      existingSchema.remove();
    }

    const script = document.createElement('script');
    script.id = 'jsonld-structured-data';
    script.type = 'application/ld+json';

    const schemaGraph: Record<string, unknown>[] = [
      {
        "@context": "https://schema.org",
        "@type": ["Pharmacy", "MedicalBusiness", "LocalBusiness"],
        "@id": `${SITE_CONFIG.websiteUrl}/#pharmacy`,
        "name": SITE_CONFIG.businessName,
        "image": `${SITE_CONFIG.websiteUrl}/icons/icon-512.png`,
        "url": SITE_CONFIG.websiteUrl,
        "telephone": SITE_CONFIG.formattedPhone,
        "priceRange": "₹₹",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": SITE_CONFIG.address.street,
          "addressLocality": SITE_CONFIG.address.locality,
          "addressRegion": SITE_CONFIG.address.state,
          "postalCode": SITE_CONFIG.address.pincode,
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": SITE_CONFIG.address.coordinates.lat,
          "longitude": SITE_CONFIG.address.coordinates.lng
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "07:00",
            "closes": "22:30"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Sunday",
            "opens": "07:30",
            "closes": "22:00"
          }
        ],
        "sameAs": [
          SITE_CONFIG.socialLinks.facebook,
          SITE_CONFIG.socialLinks.instagram,
          SITE_CONFIG.socialLinks.googleBusiness
        ],
        "isAcceptingNewPatients": true,
        "paymentAccepted": "Cash, UPI, PhonePe, Google Pay, Paytm"
      }
    ];

    if (breadcrumbs && breadcrumbs.length > 0) {
      schemaGraph.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((bc, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": bc.name,
          "item": `${SITE_CONFIG.websiteUrl}${bc.item}`
        }))
      });
    }

    if (faqSchema && faqSchema.length > 0) {
      schemaGraph.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqSchema.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      });
    }

    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": schemaGraph
    });

    document.head.appendChild(script);

    return () => {
      const s = document.getElementById('jsonld-structured-data');
      if (s) s.remove();
    };
  }, [fullTitle, description, keywords, canonicalUrl, ogImage, faqSchema, breadcrumbs]);

  return null;
}
