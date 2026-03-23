import { consultationCta, primaryCta } from "../shared/site";

export const contactPage = {
  cards: [
    {
      body: "Tours by appointment.",
      cta: primaryCta,
      title: "Book a Tour",
    },
    {
      body:
        "Start with a 30-minute consultation call. We're happy to answer your questions before you come in.",
      cta: consultationCta,
      title: "Not ready to visit yet?",
    },
    {
      body:
        "Enrollment is open. Use the waitlist form below and we'll be in touch as Fall 2026 enrollment moves forward.",
      title: "Join the Fall 2026 Waitlist",
    },
  ],
  forms: {
    contactDescription:
      "If you'd rather start with a written message, send us the basics here and we'll follow up directly.",
    contactTitle: "General inquiry",
    waitlistDescription:
      "Enrollment is open. Share your details and we'll follow up as Fall 2026 enrollment moves forward.",
    waitlistTitle: "Fall 2026 waitlist",
  },
  hero: {
    description: "Come see the space, meet the guides, bring your questions.",
    eyebrow: "Contact",
    title: "Come see it for yourself.",
  },
  responseNote: "Response within 24 hours on business days.",
  seo: {
    description:
      "Book a tour, join the Fall 2026 waitlist, or get in touch. Elements Workspace, Gerritsen Beach, Brooklyn.",
    title: "Contact — Elements Workspace | Brooklyn Homeschool Enrichment",
  },
  upcomingFormFields: [
    "Name",
    "Email",
    "Child's age(s)",
    "Program interest",
    "Message",
  ],
  hours:
    "Mon–Wed: 9am–3pm (Moonstones) · Mon–Tue: 10am–1pm (Starbirds) · Tue: 3:15–4pm (Yoga for Kids)",
} as const;
