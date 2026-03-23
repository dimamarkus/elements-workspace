import { primaryCta } from "../shared/site";

export const teamPage = {
  founder: {
    name: "Jenny Markus — Founder",
    bio:
      "Jenny is a homeschooling parent, educator, and community builder with over a decade in K–12 education leadership. She founded Elements Workspace to build the genuinely responsive, community-rooted learning environment she needed for her own family — and couldn't find. Inspired by the work of Maria Montessori and John Holt, she designs environments where children are known, trusted, and given real room to grow.",
  },
  guideHold: {
    message:
      "Lead guide details remain unpublished until Jenny confirms they are cleared to go live.",
    title: "Guides",
  },
  hero: {
    description:
      "We hire slowly and carefully. Our guides are experienced educators who build genuine relationships with the children and families in their group. Your child will know them from the very first week.",
    eyebrow: "Our Team",
    kicker:
      "Every one of our guides is a parent. Most have children who learn here alongside yours.",
    title: "The people your child will know.",
  },
  seo: {
    description:
      "Meet the educators behind Elements Workspace — experienced, attentive, and genuinely committed to the children in their care.",
    title: "Our Team — Elements Workspace | Experienced Guides in Brooklyn",
  },
  tourCallout: {
    cta: primaryCta,
    description:
      "Book a tour and see the space, meet the guides, ask your questions.",
    title: "Want to meet us in person?",
  },
} as const;
