import { primaryCta, secondaryCta } from "../shared/site";

export const programsPage = {
  enrichmentDays:
    "Enrichment days are built around work that needs more time and room — extended writing projects, science exploration, art, outdoor fieldwork, and guided independent study time.",
  hero: {
    description:
      "Both programs share the same foundation: prepared environments, intimate groups, experienced guides who know your child, and the consistent community that lets real relationships develop. What differs is age range, structure, and what your child is ready for.",
    eyebrow: "Programs",
    title: "Two programs. One community.",
  },
  seo: {
    description:
      "Montessori-inspired programs for homeschooling families in Brooklyn. Starbirds (ages 3–6) and Moonstones (ages 6–9) — intimate groups, experienced guides, a community that grows with your child.",
    title: "Our Programs — Elements Workspace | Brooklyn Homeschool Enrichment",
  },
  starbirds: {
    ctas: [primaryCta, secondaryCta],
    fitNote:
      "If your child is new to drop-off settings, we can work with you on a gentle separation.",
    goodFit: [
      "Your child is 3–6 and ready for a consistent drop-off routine",
      "You value a calm, prepared environment responsive to where your child actually is",
      "You're looking for a close-knit community of homeschooling families",
    ],
    intro:
      "Starbirds is our program for children ages 3–6. Our guides understand this developmental stage in depth and get to know each child specifically — so the environment they prepare is both developmentally appropriate and personally resonant.",
    label: "Starbirds — Ages 3–6",
    pace:
      "The morning has a clear, consistent rhythm: practical life work, pre-literacy and early numeracy through hands-on materials, creative expression, outdoor time, and community circle. Within that rhythm, each child has genuine choice about how to engage and what to pursue. The pace is unhurried.",
    pricingColumns: ["Option", "Monthly Rate", "Early-Bird (by July 1)"],
    pricingContext:
      "For context: Brooklyn private school tuition averages $23,000–$42,000/year for a 5-day program.",
    pricingRows: [
      { cells: ["2 sessions/week", "$650/mo", "$585/mo"] },
      { cells: ["3 sessions/week", "$975/mo", "$878/mo"] },
    ],
    pricingSupport:
      "Early-bird locks in for the full 2026–2027 year. July 1 deadline — no extensions.",
    pricingTitle: "Starbirds Pricing — Fall 2026",
    schedule: "Half-day drop-off · Wed & Thu, 9am–12pm",
    supportNote:
      "Limited financial assistance is available for families who need it. Ask during your tour.",
    tagline: "Where the foundations are laid — and the curiosity begins.",
  },
  whyElements: [
    {
      body:
        "In an intimate, consistent group, guides accumulate real knowledge of each child: what they're drawn to, where they're ready for a challenge, what helps them settle and focus. That knowledge informs how the environment is prepared and what gets offered each day.",
      title: "Guides who know your child — specifically.",
    },
    {
      body:
        "Montessori method shapes the environment around what children at each stage are genuinely ready for, gives them real choice within it, and protects the time they need to go deep. Children are appropriately challenged and working in territory that genuinely interests them.",
      title: "A complete developmental approach.",
    },
    {
      body:
        "The day has genuine structure — clear rhythms, real expectations, consistent community. Within it, children develop the capacity to direct their own attention and choose their own work.",
      title: "Structure that serves the child.",
    },
    {
      body:
        "Children here know each other. Guides know your child. Families know each other. Every family has made a deliberate choice about how their child learns — and that shapes everything about the culture of the space. A community that grows with your child.",
      title: "A community built on shared purpose.",
    },
  ],
  yoga: {
    bullets: ["When: Tuesdays, 3:15–4:00pm", "Pricing: $25/class", "No commitment required"],
    cta: primaryCta,
    description:
      "A lively, creative class where children discover mindfulness through movement, games, and music.",
    title: "Yoga for Kids — Ages 4–8",
  },
  moonstones: {
    ctas: [primaryCta, secondaryCta],
    goodFit: [
      "Your child is 6–9 and ready for sustained, structured independent work",
      "You're committed to at least three consistent days per week",
      "You want intentional, responsive education in a close-knit community",
      "You're homeschooling and want a program built entirely around that context",
    ],
    intro:
      "Moonstones is our full-day program for children ages 6–9. Our guides bring a thorough understanding of this developmental stage together with an accumulating knowledge of each child in the group. From that combination, they prepare an environment where children are appropriately challenged and working in territory that genuinely engages them.",
    label: "Moonstones — Ages 6–9",
    pace:
      "Each day includes reading, writing, and mathematics — through Montessori materials, sustained project work, and guided practice. Children also work across history & cultural studies, geography, science, art, and collaborative projects. The structure is real: clear rhythms, extended work periods, consistent community. Within it, children have genuine choice in how they engage and what they pursue.",
    pricingColumns: ["Package", "Monthly Rate", "Early-Bird (by July 1)"],
    pricingContext:
      "For context: Brooklyn private school tuition averages $23,000–$42,000/year for a 5-day program. Moonstones core at early-bird is approximately $17,550/year.",
    pricingRows: [
      { cells: ["Core — 3 days (Tue–Thu)", "$1,950/mo", "$1,755/mo"] },
      { cells: ["Core + 1 enrichment day (full)", "$2,600/mo", "$2,340/mo"] },
      { cells: ["Core + 1 enrichment day (half)", "$2,275/mo", "$2,048/mo"] },
      { cells: ["Core + both enrichment days", "$2,925/mo", "$2,633/mo"] },
    ],
    pricingSupport:
      "Early-bird locks in for the full 2026–2027 year. July 1 deadline — no extensions.",
    pricingTitle: "Moonstones Pricing — Fall 2026",
    schedule:
      "Full-day drop-off · Core days Tue–Thu (3-day minimum) · Optional enrichment Mon and/or Fri",
    supportNote:
      "Limited financial assistance is available for families who need it. Ask during your tour.",
    tagline: "Where curiosity deepens into real work.",
    threeDayNote:
      "The three-day core (Tue–Thu) is the minimum the model requires. Attunement between guides and children, peer relationships, and depth of work all develop through consistency.",
    extraDays:
      "Optional enrichment days (Mon and/or Fri) add deeper project work, guided independent study, and more community time.",
  },
} as const;
