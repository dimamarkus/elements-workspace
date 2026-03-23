import type { Metadata } from "next";

import { RoutePlaceholder } from "../../components/marketing/route-placeholder";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Read the common questions families ask about Elements Workspace, homeschooling, and enrollment.",
};

export default function FaqPage() {
  return (
    <main className="flex min-h-screen flex-1">
      <RoutePlaceholder
        description="This page will become the clearest answer hub for the questions families actually ask before they book a tour or apply."
        eyebrow="FAQ"
        title="Questions we actually get."
      />
    </main>
  );
}
