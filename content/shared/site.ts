export type NavigationItem = {
  href: string;
  label: string;
};

export type CallToAction = {
  href: string;
  label: string;
};

export const siteName = "Elements Workspace";
export const siteUrl = "https://elementsworkspace.com";

export const siteDescription =
  "A Montessori-inspired enrichment center for homeschooling families in Brooklyn. Cozy in size. Serious about learning. Deep in community.";

export const primaryCta: CallToAction = {
  href: "https://calendly.com/elementsworkspace/elements-workspace-personal-tour",
  label: "Book a Tour",
};

export const secondaryCta: CallToAction = {
  href: "/contact",
  label: "Join the Fall 2026 Waitlist",
};

export const consultationCta: CallToAction = {
  href: "https://calendly.com/elementsworkspace/elements-workspace-get-to-know-you-call",
  label: "Schedule a Call",
};

export const navigationItems: NavigationItem[] = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/summer-camp", label: "Summer Camp" },
  { href: "/team", label: "Our Team" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export const contactDetails = {
  address: "2934 Gerritsen Ave, 2nd floor, Brooklyn, NY 11229",
  areaServed:
    "Gerritsen Beach, Marine Park, Sheepshead Bay, Homecrest, Mill Basin, Bergen Beach and surrounding neighborhoods via the B31.",
  email: "jenny@elementsworkspace.com",
  instagramHandle: "@elementsworkspace",
  instagramUrl: "https://instagram.com/elementsworkspace",
  locality: "Brooklyn",
  postalCode: "11229",
  phone: "646-780-9062",
  region: "NY",
  sponsorNote:
    "© 2026 Elements Workspace. Fiscally sponsored by Metsada, a 501(c)(3) nonprofit.",
};
