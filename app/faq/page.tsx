import type { Metadata } from "next";

import { FaqItem } from "../../components/marketing/faq-item";
import { Accordion } from "../../components/ui/accordion";
import { PageHero } from "../../components/marketing/page-hero";
import { SiteSection } from "../../components/marketing/site-section";
import { JsonLd } from "../../components/seo/json-ld";
import { faqPage } from "../../content/pages/faq";
import { createPageMetadata } from "../../lib/seo/metadata";
import { createFaqJsonLd } from "../../lib/seo/structured-data";

export const metadata: Metadata = createPageMetadata({
  description: faqPage.seo.description,
  path: "/faq",
  title: "FAQ",
});

export default function FaqPage() {
  return (
    <main className="flex flex-1 flex-col">
      <JsonLd data={createFaqJsonLd(faqPage.items)} />
      <PageHero
        className="bg-background pt-14 sm:pt-20"
        description={faqPage.hero.description}
        eyebrow={faqPage.hero.eyebrow}
        title={faqPage.hero.title}
      />

      <SiteSection tone="white">
        <Accordion className="space-y-4" collapsible type="single">
          {faqPage.items.map((item, index) => (
            <FaqItem
              key={item.question}
              answer={item.answer}
              question={item.question}
              value={`faq-item-${index + 1}`}
            />
          ))}
        </Accordion>
      </SiteSection>
    </main>
  );
}
