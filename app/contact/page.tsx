import type { Metadata } from "next";

import { RoutePlaceholder } from "../../components/marketing/route-placeholder";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a tour, join the waitlist, or contact Elements Workspace directly.",
};

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-1">
      <RoutePlaceholder
        description="This page will become the highest-intent conversion page, with tour links, waitlist handling, direct contact details, and a final location block."
        eyebrow="Contact"
        title="Come see it for yourself."
      />
    </main>
  );
}
