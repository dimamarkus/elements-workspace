export type MediaTone = "cream" | "sage" | "terra";

export type MediaSlot = {
  alt: string;
  dropPath: string;
  note: string;
  publicPath: string;
  tone: MediaTone;
};

function createMediaSlot(slot: MediaSlot) {
  return slot;
}

export const mediaSlots = {
  about: {
    commonRoom: createMediaSlot({
      alt: "The common room where families gather at Elements Workspace.",
      dropPath: "public/images/about/common-room.jpg",
      note: "Common room or family arrival area.",
      publicPath: "/images/about/common-room.jpg",
      tone: "terra",
    }),
    learningRoom: createMediaSlot({
      alt: "A learning room at Elements Workspace with natural light and prepared materials.",
      dropPath: "public/images/about/learning-room.jpg",
      note: "Learning room and materials detail.",
      publicPath: "/images/about/learning-room.jpg",
      tone: "cream",
    }),
    outdoorSpace: createMediaSlot({
      alt: "Outdoor access or parent co-working area at Elements Workspace.",
      dropPath: "public/images/about/outdoor-space.jpg",
      note: "Outdoor access or co-working space.",
      publicPath: "/images/about/outdoor-space.jpg",
      tone: "sage",
    }),
    spaceOverview: createMediaSlot({
      alt: "Interior view of the Elements Workspace environment.",
      dropPath: "public/images/about/space-overview.jpg",
      note: "3–5 real interior photos — environment, materials, light. Not staged. Jenny to provide.",
      publicPath: "/images/about/space-overview.jpg",
      tone: "sage",
    }),
  },
  contact: {
    location: createMediaSlot({
      alt: "Exterior or location reference image for Elements Workspace.",
      dropPath: "public/images/contact/location.jpg",
      note: "Exterior location shot, neighborhood reference, or map-style visual.",
      publicPath: "/images/contact/location.jpg",
      tone: "cream",
    }),
  },
  homepage: {
    heroAccent: createMediaSlot({
      alt: "Outdoor or community moment at Elements Workspace.",
      dropPath: "public/images/homepage/hero-accent.jpg",
      note: "Outdoor moment, snack time, or community.",
      publicPath: "/images/homepage/hero-accent.jpg",
      tone: "terra",
    }),
    heroMain: createMediaSlot({
      alt: "Children engaged in work at Elements Workspace.",
      dropPath: "public/images/homepage/hero-main.jpg",
      note: "Best candid of kids engaged in the space. Natural light. Not posed.",
      publicPath: "/images/homepage/hero-main.jpg",
      tone: "sage",
    }),
  },
  programs: {
    moonstones: createMediaSlot({
      alt: "A Moonstones-age child working independently at Elements Workspace.",
      dropPath: "public/images/programs/moonstones.jpg",
      note: "Child 6–9 in focused independent work. Real concentration, not performance.",
      publicPath: "/images/programs/moonstones.jpg",
      tone: "terra",
    }),
    starbirds: createMediaSlot({
      alt: "A Starbirds-age child engaged in work at Elements Workspace.",
      dropPath: "public/images/programs/starbirds.jpg",
      note: "Starbirds-age child at work — practical life, art, or outdoor. Real concentration.",
      publicPath: "/images/programs/starbirds.jpg",
      tone: "sage",
    }),
  },
  summerCamp: {
    guide: createMediaSlot({
      alt: "Lead summer guide portrait for Elements Workspace.",
      dropPath: "public/images/summer-camp/guide.jpg",
      note: "Guide photo will be added here once Jenny confirms it is ready to publish.",
      publicPath: "/images/summer-camp/guide.jpg",
      tone: "cream",
    }),
    hero: createMediaSlot({
      alt: "Children outdoors or at creative work during summer camp.",
      dropPath: "public/images/summer-camp/hero.jpg",
      note: "Kids outdoors or at creative work, natural light. Second photo should show beach or nature.",
      publicPath: "/images/summer-camp/hero.jpg",
      tone: "sage",
    }),
  },
  team: {
    founder: createMediaSlot({
      alt: "Portrait of Jenny Markus, founder of Elements Workspace.",
      dropPath: "public/images/team/jenny-markus.jpg",
      note: "Jenny headshot or candid.",
      publicPath: "/images/team/jenny-markus.jpg",
      tone: "cream",
    }),
    guide: createMediaSlot({
      alt: "Guide portrait for the Elements Workspace team page.",
      dropPath: "public/images/team/guide.jpg",
      note: "Guide headshot or candid will be added here once approval is confirmed.",
      publicPath: "/images/team/guide.jpg",
      tone: "terra",
    }),
  },
} as const;
