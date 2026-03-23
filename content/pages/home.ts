import { primaryCta, secondaryCta } from "../shared/site";

export const homePage = {
  currentlyRunning: {
    intro: "Serving families through June 2026. Fall 2026 enrollment is now open.",
    items: [
      "Moonstones (Ages 6–9) — Full-day, Mon–Wed",
      "Starbirds (Ages 3–6) — Half-day mornings, Mon–Tue",
      "Yoga for Kids (Ages 4–8) — Tuesdays 3:15–4pm, drop-in welcome",
    ],
    link: {
      href: "/programs",
      label: "See all programs",
    },
  },
  fallCallout: {
    body:
      "We're rebuilding for fall with an extraordinary new lead guide for Moonstones and expanded options for Starbirds. Core program runs Tuesday–Thursday, with optional enrichment days available. Spots are intentionally limited. Early-bird pricing available through July 1, 2026.",
    eyebrow: "Fall 2026",
    primaryAction: secondaryCta,
    secondaryAction: primaryCta,
    title: "Something new is coming this September.",
  },
  gettingStarted: {
    action: primaryCta,
    eyebrow: "Getting Started",
    steps: [
      {
        description: "See the space, meet the guides, ask your questions.",
        title: "Book a tour",
      },
      {
        description: "We'll help you choose the program that works for your family.",
        title: "Find your fit",
      },
      {
        description: "Enroll and start your family's Elements journey.",
        title: "Join the community",
      },
    ],
  },
  hero: {
    accentPhotoNote: "Outdoor moment, snack time, or community.",
    badge: "Enrolling for Fall 2026 · Early-bird closes July 1",
    eyebrow: "Elements Workspace",
    headline: "A place for homeschooling families in Brooklyn.",
    photoNote: "Best candid of kids engaged in the space. Natural light. Not posed.",
    primaryAction: primaryCta,
    secondaryAction: secondaryCta,
    subheadline: "Cozy in size. Serious about learning. Deep in community.",
  },
  location: {
    address: "2934 Gerritsen Ave, 2nd floor, Brooklyn, NY 11229",
    eyebrow: "Location",
    note:
      "Accessible from Gerritsen Beach, Marine Park, Sheepshead Bay, Homecrest, Mill Basin, Bergen Beach and surrounding neighborhoods via the B31.",
  },
  seo: {
    description:
      "A Montessori-inspired enrichment center for homeschooling families in Brooklyn. Cozy in size. Serious about learning. Deep in community. Ages 3–10.",
    title: "Elements Workspace — Homeschool Enrichment Center in Gerritsen Beach, Brooklyn",
  },
  testimonials: {
    eyebrow: "What Families Say",
    items: [
      {
        author: "Vania",
        quote:
          "Elements has been an incredible experience for our family. My daughter's growth, independence, and excitement about learning has been amazing to watch. It's a warm, loving community where children learn and grow.",
      },
      {
        author: "Mom to J",
        quote:
          "My son loves coming every week and always looks forward to it. He's found so many things he loves there — his interest in geography started at Elements. The guides treat my child like their own.",
      },
      {
        author: "Miriam",
        quote:
          "The most meaningful experience has been seeing her build relationships with the other kids. Her vocabulary and love for learning is growing. Give it a try.",
      },
    ],
  },
  whatIsElements: {
    action: {
      href: "/programs",
      label: "Explore Our Programs",
    },
    body:
      "Elements Workspace is a Montessori-inspired enrichment center in Gerritsen Beach, Brooklyn, built for homeschooling families with children ages 3–10. Our guides are experienced educators who understand child development in depth and who, over time, come to know each child in their group specifically — their interests, their pace, where they're ready to be stretched. From that knowledge, they prepare an environment where children have genuine choice and uninterrupted time to go deep.",
    eyebrow: "What Is Elements",
    pillars: [
      {
        description:
          "Guides accumulate real knowledge of each child — what they're drawn to, where they're ready for a challenge, what they need to settle and focus. That knowledge shapes the prepared environment every day.",
        title: "Genuinely known.",
      },
      {
        description:
          "Our approach is rooted in a method with one core principle: match the environment to what children at each developmental stage are genuinely ready for, then give them real choice within it and the uninterrupted time to use it. The result is a child who is appropriately challenged — and working in territory that genuinely engages them.",
        title: "Developmentally prepared.",
      },
      {
        description:
          "Every family at Elements has made a deliberate choice about education. That shared purpose shapes the culture of the space — how children relate to each other, how families connect. Small enough to know everyone. Intentional enough to build something together.",
        title: "Built on shared purpose.",
      },
    ],
    title: "A community built on intimate scale, genuine bonds, and shared purpose.",
  },
} as const;
