import type { Metadata } from "next";

import { ButtonLink } from "../../components/marketing/button-link";
import { ContentCard } from "../../components/marketing/content-card";
import { PageHero } from "../../components/marketing/page-hero";
import { PhotoPlaceholder } from "../../components/marketing/photo-placeholder";
import { SectionHeading } from "../../components/marketing/section-heading";
import { SiteSection } from "../../components/marketing/site-section";
import { teamPage } from "../../content/pages/team";

export const metadata: Metadata = {
  title: "Our Team",
  description: teamPage.seo.description,
};

export default function TeamPage() {
  return (
    <main className="flex flex-1 flex-col">
      <PageHero
        className="bg-background pt-14 sm:pt-20"
        description={teamPage.hero.description}
        eyebrow={teamPage.hero.eyebrow}
        title={teamPage.hero.title}
      >
        <p className="max-w-3xl text-base leading-8 text-muted-foreground">
          {teamPage.hero.kicker}
        </p>
      </PageHero>

      <SiteSection tone="white">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <ContentCard tone="white">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-terra">
              Founder
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-foreground">
              {teamPage.founder.name}
            </h2>
            <p className="mt-5 text-base leading-8 text-muted-foreground">
              {teamPage.founder.bio}
            </p>
          </ContentCard>
          <PhotoPlaceholder
            className="min-h-96"
            note={teamPage.founder.note}
            tone="cream"
          />
        </div>
      </SiteSection>

      <SiteSection tone="cream">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="Guides"
            title={teamPage.guideHold.title}
            description={teamPage.guideHold.message}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <PhotoPlaceholder
              className="min-h-80"
              note={teamPage.guideHold.photoNote}
              tone="terra"
            />
            <ContentCard tone="white">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-sage-dark">
                Guide Details
              </p>
              <p className="mt-4 text-base leading-8 text-muted-foreground">
                Additional guide profiles will appear here once the remaining
                details and photos are confirmed for publication.
              </p>
            </ContentCard>
          </div>
        </div>
      </SiteSection>

      <SiteSection tone="white">
        <ContentCard tone="cream">
          <h2 className="font-display text-4xl leading-tight text-foreground">
            {teamPage.tourCallout.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
            {teamPage.tourCallout.description}
          </p>
          <div className="mt-6">
            <ButtonLink href={teamPage.tourCallout.cta.href}>
              {teamPage.tourCallout.cta.label}
            </ButtonLink>
          </div>
        </ContentCard>
      </SiteSection>
    </main>
  );
}
