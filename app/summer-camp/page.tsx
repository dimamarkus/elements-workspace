import type { Metadata } from "next";

import { RoutePlaceholder } from "../../components/marketing/route-placeholder";

export const metadata: Metadata = {
  title: "Summer Camp",
  description:
    "Discover the Summer Camp offering at Elements Workspace, designed around stories, places, and ideas.",
};

export default function SummerCampPage() {
  return (
    <main className="flex min-h-screen flex-1">
      <RoutePlaceholder
        description="This route will become a campaign-style landing page for summer enrollment, with its own hero, daily rhythm, and hold-aware guide details."
        eyebrow="Summer Camp"
        title="A summer of stories, places, and ideas."
      />
    </main>
  );
}
