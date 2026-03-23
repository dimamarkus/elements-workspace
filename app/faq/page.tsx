import type { Metadata } from "next";

import { FaqItem } from "../../components/marketing/faq-item";
import { PageHero } from "../../components/marketing/page-hero";
import { SiteSection } from "../../components/marketing/site-section";
import { faqPage } from "../../content/pages/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description: faqPage.seo.description,
};

export default function FaqPage() {
  return (
    <main className="flex flex-1 flex-col">
      <PageHero
        className="bg-background pt-14 sm:pt-20"
        description={faqPage.hero.description}
        eyebrow={faqPage.hero.eyebrow}
        title={faqPage.hero.title}
      />

      <SiteSection tone="white">
        <div className="space-y-4">
          {faqPage.items.map((item) => (
            <FaqItem
              key={item.question}
              answer={item.answer}
              question={item.question}
            />
          ))}
        </div>
      </SiteSection>
    </main>
  );
}
