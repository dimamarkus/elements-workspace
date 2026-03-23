import type { Metadata } from "next";

import { RoutePlaceholder } from "../../components/marketing/route-placeholder";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore the Starbirds and Moonstones programs at Elements Workspace for homeschooling families in Brooklyn.",
};

export default function ProgramsPage() {
  return (
    <main className="flex min-h-screen flex-1">
      <RoutePlaceholder
        description="This page will house the two core programs, pricing tables, enrichment options, and the clearest explanation of how the age bands differ."
        eyebrow="Programs"
        title="Two programs. One community."
      />
    </main>
  );
}
