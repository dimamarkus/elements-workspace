import type { Metadata } from "next";

import { ContentCard } from "../../components/marketing/content-card";
import { PageHero } from "../../components/marketing/page-hero";
import { PhotoPlaceholder } from "../../components/marketing/photo-placeholder";
import { SectionHeading } from "../../components/marketing/section-heading";
import { SiteSection } from "../../components/marketing/site-section";
import { aboutPage } from "../../content/pages/about";
import { contactDetails } from "../../content/shared/site";

export const metadata: Metadata = {
  title: "About Us",
  description: aboutPage.seo.description,
};

export default function AboutPage() {
  return (
    <main className="flex flex-1 flex-col">
      <PageHero
        className="bg-background pt-14 sm:pt-20"
        description={aboutPage.hero.description}
        eyebrow={aboutPage.hero.eyebrow}
        title={aboutPage.hero.title}
      />

      <SiteSection tone="white">
        <div className="space-y-8">
          <SectionHeading eyebrow="Our Philosophy" title="Responsive. Intentional. Community-rooted." />
          <div className="grid gap-4 lg:grid-cols-3">
            {aboutPage.philosophy.map((item, index) => (
              <ContentCard key={item.title} tone={index === 1 ? "sage" : "white"}>
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

      <SiteSection tone="cream">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <ContentCard tone="white">
            <h2 className="font-display text-4xl leading-tight text-foreground">
              {aboutPage.story.title}
            </h2>
            <div className="mt-5 space-y-4 text-base leading-8 text-muted-foreground">
              {aboutPage.story.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </ContentCard>
          <ContentCard tone="white">
            <h2 className="font-display text-4xl leading-tight text-foreground">
              {aboutPage.whoWeServe.title}
            </h2>
            <div className="mt-5 space-y-4 text-base leading-8 text-muted-foreground">
              {aboutPage.whoWeServe.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </ContentCard>
        </div>
      </SiteSection>

      <SiteSection tone="white">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            <SectionHeading eyebrow="The Space" title={aboutPage.space.title} />
            <p className="text-base leading-8 text-muted-foreground">
              {contactDetails.address}
            </p>
            <ul className="space-y-3 text-base leading-8 text-muted-foreground">
              {aboutPage.space.items.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <PhotoPlaceholder className="min-h-64" note={aboutPage.space.note} tone="sage" />
            <PhotoPlaceholder className="min-h-64" note="Learning room and materials detail." tone="cream" />
            <PhotoPlaceholder className="min-h-64" note="Common room or family arrival area." tone="terra" />
            <PhotoPlaceholder className="min-h-64" note="Outdoor access or co-working space." tone="sage" />
          </div>
        </div>
      </SiteSection>
    </main>
  );
}
