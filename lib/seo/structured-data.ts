import { contactDetails, siteDescription, siteName, siteUrl } from "../../content/shared/site";

type FaqItem = {
  answer: string;
  question: string;
};

export function createLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    address: {
      "@type": "PostalAddress",
      addressLocality: contactDetails.locality,
      addressRegion: contactDetails.region,
      postalCode: contactDetails.postalCode,
      streetAddress: contactDetails.address,
    },
    areaServed: contactDetails.areaServed,
    description: siteDescription,
    email: contactDetails.email,
    name: siteName,
    telephone: contactDetails.phone,
    url: siteUrl,
  };
}

export function createWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    description: siteDescription,
    name: siteName,
    url: siteUrl,
  };
}

export function createFaqJsonLd(items: readonly FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
      name: item.question,
    })),
  };
}
