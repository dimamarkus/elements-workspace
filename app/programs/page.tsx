import type { Metadata } from "next";

import { ButtonLink } from "../../components/marketing/button-link";
import { ContentCard } from "../../components/marketing/content-card";
import { PageHero } from "../../components/marketing/page-hero";
import { PhotoPlaceholder } from "../../components/marketing/photo-placeholder";
import { PricingTable } from "../../components/marketing/pricing-table";
import { SectionHeading } from "../../components/marketing/section-heading";
import { SiteSection } from "../../components/marketing/site-section";
import { programsPage } from "../../content/pages/programs";
import { mediaSlots } from "../../content/shared/media";

export const metadata: Metadata = {
  title: "Our Programs",
  description: programsPage.seo.description,
};

export default function ProgramsPage() {
  return (
    <main className="flex flex-1 flex-col">
      <PageHero
        className="bg-background pt-14 sm:pt-20"
        description={programsPage.hero.description}
        eyebrow={programsPage.hero.eyebrow}
        title={programsPage.hero.title}
      />

      <SiteSection tone="white">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="space-y-5">
            <SectionHeading title={programsPage.starbirds.label} />
            <p className="text-lg leading-8 text-terra-dark">
              {programsPage.starbirds.tagline}
            </p>
            <p className="text-base leading-8 text-muted-foreground">
              {programsPage.starbirds.schedule}
            </p>
            <p className="text-base leading-8 text-muted-foreground">
              {programsPage.starbirds.intro}
            </p>
            <p className="text-base leading-8 text-muted-foreground">
              {programsPage.starbirds.pace}
            </p>
            <div className="flex flex-wrap gap-3">
              {programsPage.starbirds.ctas.map((cta) => (
                <ButtonLink
                  key={cta.label}
                  href={cta.href}
                  variant={cta.label === "Book a Tour" ? "primary" : "secondary"}
                >
                  {cta.label}
                </ButtonLink>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <PhotoPlaceholder
              className="min-h-80"
              slot={mediaSlots.programs.starbirds}
            />
            <ContentCard tone="cream">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-sage-dark">
                Good fit if
              </p>
              <ul className="mt-4 space-y-3 text-base leading-8 text-muted-foreground">
                {programsPage.starbirds.goodFit.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
              <p className="mt-5 text-sm leading-7 text-muted-foreground">
                {programsPage.starbirds.fitNote}
              </p>
            </ContentCard>
          </div>
        </div>
      </SiteSection>

      <SiteSection className="py-10 sm:py-12" tone="cream">
        <div className="space-y-5">
          <h2 className="font-display text-3xl leading-tight text-foreground sm:text-4xl">
            {programsPage.starbirds.pricingTitle}
          </h2>
          <PricingTable
            columns={programsPage.starbirds.pricingColumns}
            rows={programsPage.starbirds.pricingRows}
          />
          <p className="text-sm leading-7 text-muted-foreground">
            {programsPage.starbirds.pricingSupport}
          </p>
          <p className="text-sm leading-7 text-muted-foreground">
            {programsPage.starbirds.supportNote}
          </p>
          <p className="text-sm leading-7 text-muted-foreground">
            {programsPage.starbirds.pricingContext}
          </p>
        </div>
      </SiteSection>

      <SiteSection tone="white">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="space-y-5">
            <SectionHeading title={programsPage.moonstones.label} />
            <p className="text-lg leading-8 text-terra-dark">
              {programsPage.moonstones.tagline}
            </p>
            <p className="text-base leading-8 text-muted-foreground">
              {programsPage.moonstones.schedule}
            </p>
            <p className="text-base leading-8 text-muted-foreground">
              {programsPage.moonstones.intro}
            </p>
            <p className="text-base leading-8 text-muted-foreground">
              {programsPage.moonstones.pace}
            </p>
            <p className="text-base leading-8 text-muted-foreground">
              {programsPage.moonstones.threeDayNote}
            </p>
            <p className="text-base leading-8 text-muted-foreground">
              {programsPage.moonstones.extraDays}
            </p>
            <div className="flex flex-wrap gap-3">
              {programsPage.moonstones.ctas.map((cta) => (
                <ButtonLink
                  key={cta.label}
                  href={cta.href}
                  variant={cta.label === "Book a Tour" ? "primary" : "secondary"}
                >
                  {cta.label}
                </ButtonLink>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <PhotoPlaceholder
              className="min-h-80"
              slot={mediaSlots.programs.moonstones}
            />
            <ContentCard tone="cream">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-sage-dark">
                Good fit if
              </p>
              <ul className="mt-4 space-y-3 text-base leading-8 text-muted-foreground">
                {programsPage.moonstones.goodFit.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </ContentCard>
          </div>
        </div>
      </SiteSection>

      <SiteSection className="py-10 sm:py-12" tone="cream">
        <div className="space-y-5">
          <h2 className="font-display text-3xl leading-tight text-foreground sm:text-4xl">
            {programsPage.moonstones.pricingTitle}
          </h2>
          <PricingTable
            columns={programsPage.moonstones.pricingColumns}
            rows={programsPage.moonstones.pricingRows}
          />
          <p className="text-sm leading-7 text-muted-foreground">
            {programsPage.moonstones.pricingSupport}
          </p>
          <p className="text-sm leading-7 text-muted-foreground">
            {programsPage.moonstones.supportNote}
          </p>
          <p className="text-sm leading-7 text-muted-foreground">
            {programsPage.moonstones.pricingContext}
          </p>
        </div>
      </SiteSection>

      <SiteSection tone="white">
        <div className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow="Enrichment"
            title="More room for deeper work."
            description={programsPage.enrichmentDays}
          />
          <ContentCard tone="terra">
            <h3 className="font-display text-3xl leading-tight text-foreground">
              {programsPage.yoga.title}
            </h3>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              {programsPage.yoga.description}
            </p>
            <ul className="mt-5 space-y-2 text-base leading-8 text-muted-foreground">
              {programsPage.yoga.bullets.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
            <div className="mt-6">
              <ButtonLink href={programsPage.yoga.cta.href}>
                {programsPage.yoga.cta.label}
              </ButtonLink>
            </div>
          </ContentCard>
        </div>
      </SiteSection>

      <SiteSection tone="cream">
        <div className="space-y-8">
          <SectionHeading
            eyebrow="Why Families Choose Elements"
            title="Why families choose Elements."
          />
          <div className="grid gap-4 lg:grid-cols-2">
            {programsPage.whyElements.map((item, index) => (
              <ContentCard key={item.title} tone={index % 2 === 0 ? "white" : "sage"}>
                <h3 className="font-display text-3xl leading-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-muted-foreground">
                  {item.body}
                </p>
              </ContentCard>
            ))}
          </div>
        </div>
      </SiteSection>
    </main>
  );
}
