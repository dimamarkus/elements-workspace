import type { Metadata } from "next";

import { RoutePlaceholder } from "../../components/marketing/route-placeholder";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about the philosophy, history, and environment behind Elements Workspace in Brooklyn.",
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-1">
      <RoutePlaceholder
        description="This page will introduce the origin of Elements Workspace, the educational philosophy behind it, and the physical space families encounter when they visit."
        eyebrow="About"
        title="We built this because we needed it."
      />
    </main>
  );
}
