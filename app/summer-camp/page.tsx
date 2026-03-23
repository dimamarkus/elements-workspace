import type { Metadata } from "next";

import { ButtonLink } from "../../components/marketing/button-link";
import { ContentCard } from "../../components/marketing/content-card";
import { Eyebrow } from "../../components/marketing/eyebrow";
import { PhotoPlaceholder } from "../../components/marketing/photo-placeholder";
import { SectionHeading } from "../../components/marketing/section-heading";
import { SiteSection } from "../../components/marketing/site-section";
import { summerCampPage } from "../../content/pages/summer-camp";
import { mediaSlots } from "../../content/shared/media";

export const metadata: Metadata = {
  title: "Summer Camp",
  description: summerCampPage.seo.description,
};

export default function SummerCampPage() {
  return (
    <main className="flex flex-1 flex-col">
      <SiteSection className="pt-14 sm:pt-20" tone="cream">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="space-y-6">
            <Eyebrow>{summerCampPage.hero.eyebrow}</Eyebrow>
            <div className="space-y-4">
              <h1 className="max-w-4xl font-display text-5xl leading-none text-balance text-foreground sm:text-6xl lg:text-7xl">
                {summerCampPage.hero.title}
              </h1>
              <p className="text-base leading-8 text-terra-dark">
                {summerCampPage.hero.dates}
              </p>
              <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                {summerCampPage.hero.subheadline}
              </p>
            </div>
          </div>

          <PhotoPlaceholder
            badge={summerCampPage.hero.badge}
            className="min-h-96"
            slot={mediaSlots.summerCamp.hero}
          />
        </div>
      </SiteSection>

      <SiteSection tone="white">
        <div className="space-y-8">
          <SectionHeading
            eyebrow="What to Expect"
            title={summerCampPage.whatToExpect.title}
            description={summerCampPage.whatToExpect.body}
          />
          <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
            {summerCampPage.whatToExpect.closing}
          </p>
          <div className="grid gap-4 lg:grid-cols-3">
            {summerCampPage.whatToExpect.pillars.map((pillar, index) => (
              <ContentCard key={pillar.title} tone={index === 1 ? "sage" : "white"}>
                <h3 className="font-display text-3xl leading-tight text-foreground">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-muted-foreground">
                  {pillar.body}
                </p>
              </ContentCard>
            ))}
          </div>
        </div>
      </SiteSection>

      <SiteSection tone="cream">
        <div className="space-y-8">
          <SectionHeading
            eyebrow="A Typical Day"
            title="Structured enough to feel grounding. Open enough to feel like summer."
          />
          <div className="overflow-x-auto rounded-3xl border border-border-soft bg-white">
            <table className="min-w-full border-collapse text-left text-sm leading-7">
              <thead className="bg-background text-foreground">
                <tr>
                  <th className="px-5 py-4 font-medium">Time</th>
                  <th className="px-5 py-4 font-medium">Block</th>
                  <th className="px-5 py-4 font-medium">Notes</th>
                </tr>
              </thead>
              <tbody>
                {summerCampPage.timeline.map((row) => (
                  <tr key={row.join("-")} className="border-t border-border-soft">
                    {row.map((cell) => (
                      <td key={cell} className="px-5 py-4 text-muted-foreground">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm leading-7 text-muted-foreground">
            {summerCampPage.timelineNote}
          </p>
        </div>
      </SiteSection>

      <SiteSection tone="white">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="Your Guide"
            title={summerCampPage.guide.title}
            description={summerCampPage.guide.intro}
          />
          <div className="space-y-4">
            <PhotoPlaceholder
              className="min-h-72"
              slot={mediaSlots.summerCamp.guide}
            />
            <ContentCard tone="white">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-sage-dark">
                Credentials
              </p>
              <ul className="mt-4 space-y-2 text-base leading-8 text-muted-foreground">
                {summerCampPage.guide.credentials.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </ContentCard>
          </div>
        </div>
      </SiteSection>

      <SiteSection tone="cream">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading eyebrow="Program Details" title="What families need to know." />
          <ContentCard tone="white">
            <dl className="space-y-4">
              {summerCampPage.details.map(([label, value]) => (
                <div
                  key={label}
                  className="grid gap-1 border-b border-border-soft pb-4 last:border-b-0 last:pb-0 sm:grid-cols-[0.35fr_0.65fr]"
                >
                  <dt className="text-sm font-medium uppercase tracking-[0.18em] text-sage-dark">
                    {label}
                  </dt>
                  <dd className="text-base leading-8 text-muted-foreground">{value}</dd>
                </div>
              ))}
            </dl>
          </ContentCard>
        </div>
      </SiteSection>

      <SiteSection tone="white">
        <ContentCard tone="terra">
          <h2 className="font-display text-4xl leading-tight text-foreground">
            {summerCampPage.register.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
            {summerCampPage.register.body}
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
            {summerCampPage.register.note}
          </p>
          <div className="mt-6">
            <ButtonLink href={summerCampPage.register.secondaryAction.href}>
              {summerCampPage.register.secondaryAction.label}
            </ButtonLink>
          </div>
        </ContentCard>
      </SiteSection>
    </main>
  );
}
