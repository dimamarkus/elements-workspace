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
        "Enrollment is open. The dedicated waitlist form is being finalized, and the general contact details below are live now.",
      title: "Join the Fall 2026 Waitlist",
    },
  ],
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
