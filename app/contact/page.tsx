import type { Metadata } from "next";

import { ButtonLink } from "../../components/marketing/button-link";
import { ContentCard } from "../../components/marketing/content-card";
import { PageHero } from "../../components/marketing/page-hero";
import { PhotoPlaceholder } from "../../components/marketing/photo-placeholder";
import { SectionHeading } from "../../components/marketing/section-heading";
import { SiteSection } from "../../components/marketing/site-section";
import { contactPage } from "../../content/pages/contact";
import { contactDetails } from "../../content/shared/site";

export const metadata: Metadata = {
  title: "Contact",
  description: contactPage.seo.description,
};

export default function ContactPage() {
  return (
    <main className="flex flex-1 flex-col">
      <PageHero
        className="bg-background pt-14 sm:pt-20"
        description={contactPage.hero.description}
        eyebrow={contactPage.hero.eyebrow}
        title={contactPage.hero.title}
      />

      <SiteSection tone="white">
        <div className="grid gap-4 lg:grid-cols-3">
          {contactPage.cards.map((card, index) => (
            <ContentCard
              key={card.title}
              tone={index === 1 ? "sage" : index === 2 ? "terra" : "white"}
            >
              <h2 className="font-display text-3xl leading-tight text-foreground">
                {card.title}
              </h2>
              <p className="mt-4 text-base leading-8 text-muted-foreground">
                {card.body}
              </p>
              {"cta" in card && card.cta ? (
                <div className="mt-6">
                  <ButtonLink href={card.cta.href}>{card.cta.label}</ButtonLink>
                </div>
              ) : null}
            </ContentCard>
          ))}
        </div>
      </SiteSection>

      <SiteSection tone="cream">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-5">
            <SectionHeading
              eyebrow="General Questions"
              title="Reach Jenny directly."
            />
            <div className="space-y-2 text-base leading-8 text-muted-foreground">
              <p>
                <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
              </p>
              <p>{contactDetails.phone}</p>
              <p>
                <a href={contactDetails.instagramUrl} target="_blank" rel="noreferrer">
                  {contactDetails.instagramHandle}
                </a>
              </p>
              <p>{contactPage.responseNote}</p>
            </div>
            <div className="rounded-3xl border border-border-soft bg-white/70 p-6">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-sage-dark">
                Waitlist Details
              </p>
              <ul className="mt-4 space-y-2 text-base leading-8 text-muted-foreground">
                {contactPage.upcomingFormFields.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid gap-4">
            <PhotoPlaceholder
              className="min-h-72"
              note="Contact-page map or location visual placeholder."
              tone="cream"
            />
            <ContentCard tone="white">
              <h2 className="font-display text-3xl leading-tight text-foreground">
                Visit Elements Workspace
              </h2>
              <p className="mt-4 text-base leading-8 text-muted-foreground">
                {contactDetails.address}
              </p>
              <p className="mt-4 text-base leading-8 text-muted-foreground">
                Street parking available. Accessible from Gerritsen Beach,
                Marine Park, Sheepshead Bay, Homecrest, Mill Basin, Bergen
                Beach and surrounding neighborhoods via the B31.
              </p>
              <p className="mt-4 text-base leading-8 text-muted-foreground">
                Current hours: {contactPage.hours}
              </p>
            </ContentCard>
          </div>
        </div>
      </SiteSection>
    </main>
  );
}
