import type { Metadata } from "next";

import { RoutePlaceholder } from "../../components/marketing/route-placeholder";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the founder and guides behind Elements Workspace in Brooklyn.",
};

export default function TeamPage() {
  return (
    <main className="flex min-h-screen flex-1">
      <RoutePlaceholder
        description="This page will introduce Jenny first, then render approved guide details once the hold-only content is cleared for publication."
        eyebrow="Our Team"
        title="The people your child will know."
      />
    </main>
  );
}
