import { primaryCta } from "../shared/site";

export const summerCampPage = {
  details: [
    ["Dates", "July 1–31, 2026 · Four weeks"],
    ["Schedule", "Monday–Thursday · 9:00am–2:30pm"],
    ["Ages", "6–11 · Intimate group, intentionally limited"],
    ["Tuition", "Pending Jenny confirmation before launch"],
  ],
  guide: {
    credentials: [
      "Montessori-licensed educator (North American Montessori Center)",
      "35+ years working with children ages 6–12",
      "Background in creative writing, poetry, art, and curriculum development",
      "After-school director, playwright, community builder",
      "Also joining Elements as Moonstones lead guide for Fall 2026",
    ],
    holdMessage:
      "Guide name and photo remain unpublished until Jenny confirms they are ready to go live.",
    intro:
      "This summer program is led by one of the most experienced educators joining the Elements community — a guide who knows how to hold a close-knit group of 6–11 year olds and make every day feel purposeful and worth coming back to.",
    title: "Led by a Montessori educator with 35+ years of experience.",
  },
  hero: {
    badge: "4 weeks · July · Gerritsen Beach",
    dates: "July 1–31 · Monday–Thursday · Ages 6–11",
    eyebrow: "Summer 2026 · Elements Workspace",
    imageNote:
      "Kids outdoors or at creative work, natural light. Second photo should show beach or nature.",
    subheadline:
      "Four weeks of morning writing, afternoon world exploration, beach days, and the kind of summer your child will still be talking about in September.",
    title: "A summer of stories, places, and ideas.",
  },
  register: {
    body:
      "An experienced guide, an intimate group, four purposeful weeks in one of Brooklyn's best neighborhoods.",
    note:
      "The final registration link will appear here once Jenny confirms the live destination.",
    secondaryAction: primaryCta,
    title: "Enrollment is limited. Summer fills fast.",
  },
  seo: {
    description:
      "A four-week Montessori-inspired summer program in Gerritsen Beach, Brooklyn. Morning writing, afternoon world exploration, beach days, intimate group. Ages 6–11 · July 2026.",
    title: "Elements Summer Camp 2026 — Brooklyn | Ages 6–11 | July",
  },
  timeline: [
    ["9:00–9:30", "Arrival & Morning Work", "Manipulatives, puzzles, practical life. Children settle at their own pace."],
    ["9:30–10:30", "Morning Circle & Writing", "Circle opens the day. Journal writing follows — words and pictures, with guide modeling and individual support."],
    ["10:30–10:45", "Snack", "Community snack time."],
    ["10:45–12:30", "Outdoor Play & Lunch", "Outdoor time, then lunch together, then quiet reading and rest until 1:00."],
    ["1:00–2:30", "Country & Culture Study", "Guided lesson on a country or culture, followed by activities and crafts that bring it to life."],
    ["2:30", "Story Time, Songs & Dismissal", "A gentle close to the day."],
  ],
  timelineNote:
    "Beach & library days: On select Wednesdays or Thursdays, the afternoon shifts to a beach or library outing.",
  whatToExpect: {
    body:
      "Mornings are for writing — real writing, with guidance and room to grow. Afternoons go deep into countries and cultures from around the world: guided lessons, hands-on crafts, follow-up activities. Gerritsen Beach is right outside the door.",
    closing:
      "Your child will write more, know more, and come home with real friendships.",
    pillars: [
      {
        body:
          "Journal writing each morning — words, pictures, and growing skill. Children work at their own level with their guide modeling and supporting throughout.",
        title: "Morning writing & literacy",
      },
      {
        body:
          "Each afternoon, the group explores a country or culture through guided lessons, crafts, and activities. By the end of July, children have traveled — in the most real sense available to them.",
        title: "Country & culture study",
      },
      {
        body: "Regular outdoor and beach days are built into the weekly rhythm.",
        title: "Beach days & outdoor time",
      },
    ],
    title: "A close-knit community. A summer with real substance.",
  },
} as const;
