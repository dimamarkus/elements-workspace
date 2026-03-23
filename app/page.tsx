import type { Metadata } from "next";

import { ButtonLink } from "../components/marketing/button-link";
import { Eyebrow } from "../components/marketing/eyebrow";
import { LocationStrip } from "../components/marketing/location-strip";
import { PhotoPlaceholder } from "../components/marketing/photo-placeholder";
import { SiteSection } from "../components/marketing/site-section";
import { homePage } from "../content/pages/home";

export const metadata: Metadata = {
  title: "Homeschool Enrichment Center in Gerritsen Beach, Brooklyn",
  description: homePage.seo.description,
};

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <SiteSection className="pt-14 sm:pt-20" tone="cream">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="space-y-6">
            <Eyebrow>{homePage.hero.eyebrow}</Eyebrow>
            <div className="space-y-4">
              <h1 className="max-w-4xl font-display text-5xl leading-none text-balance text-foreground sm:text-6xl lg:text-7xl">
                {homePage.hero.headline}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                {homePage.hero.subheadline}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href={homePage.hero.primaryAction.href}>
                {homePage.hero.primaryAction.label}
              </ButtonLink>
              <ButtonLink
                href={homePage.hero.secondaryAction.href}
                variant="secondary"
              >
                {homePage.hero.secondaryAction.label}
              </ButtonLink>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
            <PhotoPlaceholder
              badge={homePage.hero.badge}
              className="min-h-96"
              note={homePage.hero.photoNote}
              tone="sage"
            />
            <PhotoPlaceholder
              className="min-h-72"
              note={homePage.hero.accentPhotoNote}
              tone="terra"
            />
          </div>
        </div>
      </SiteSection>

      <SiteSection tone="white">
        <div className="space-y-10">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="space-y-3">
              <Eyebrow>{homePage.whatIsElements.eyebrow}</Eyebrow>
              <h2 className="font-display text-4xl leading-tight text-balance text-foreground sm:text-5xl">
                {homePage.whatIsElements.title}
              </h2>
            </div>
            <div className="space-y-6">
              <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
                {homePage.whatIsElements.body}
              </p>
              <ButtonLink href={homePage.whatIsElements.action.href} variant="secondary">
                {homePage.whatIsElements.action.label}
              </ButtonLink>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {homePage.whatIsElements.pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="rounded-[1.75rem] bg-background p-7"
              >
                <div className="mb-5 h-1 w-10 rounded-full bg-sage" />
                <h3 className="font-display text-2xl leading-tight text-foreground">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-muted-foreground">
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </SiteSection>

      <SiteSection className="py-8 sm:py-10" tone="cream">
        <div className="grid gap-6 rounded-4xl border border-border-soft bg-white/60 p-6 lg:grid-cols-[0.75fr_1.25fr_auto] lg:items-center">
          <p className="text-sm leading-7 text-muted-foreground">
            {homePage.currentlyRunning.intro}
          </p>
          <div className="grid gap-2 text-sm leading-7 text-foreground sm:grid-cols-3 sm:gap-4">
            {homePage.currentlyRunning.items.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
          <ButtonLink href={homePage.currentlyRunning.link.href} variant="secondary">
            {homePage.currentlyRunning.link.label}
          </ButtonLink>
        </div>
      </SiteSection>

      <SiteSection tone="sage-dark">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="space-y-4">
            <Eyebrow className="text-white/70">{homePage.fallCallout.eyebrow}</Eyebrow>
            <h2 className="font-display text-4xl leading-tight text-balance sm:text-5xl">
              {homePage.fallCallout.title}
            </h2>
          </div>
          <div className="space-y-6">
            <p className="max-w-3xl text-lg leading-8 text-white/80">
              {homePage.fallCallout.body}
            </p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink
                href={homePage.fallCallout.primaryAction.href}
                variant="light"
              >
                {homePage.fallCallout.primaryAction.label}
              </ButtonLink>
              <ButtonLink
                href={homePage.fallCallout.secondaryAction.href}
                variant="ghost"
              >
                {homePage.fallCallout.secondaryAction.label}
              </ButtonLink>
            </div>
          </div>
        </div>
      </SiteSection>

      <SiteSection tone="white">
        <div className="space-y-10">
          <div className="space-y-3">
            <Eyebrow>{homePage.testimonials.eyebrow}</Eyebrow>
            <h2 className="font-display text-4xl leading-tight text-balance text-foreground sm:text-5xl">
              Families stay for what builds around the program.
            </h2>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {homePage.testimonials.items.map((testimonial) => (
              <article
                key={testimonial.author}
                className="rounded-[1.75rem] bg-background p-7"
              >
                <p className="font-display text-5xl leading-none text-sage/35">
                  &ldquo;
                </p>
                <blockquote className="-mt-2 text-base leading-8 text-muted-foreground">
                  {testimonial.quote}
                </blockquote>
                <p className="mt-5 text-sm font-medium uppercase tracking-[0.18em] text-terra">
                  {testimonial.author}
                </p>
              </article>
            ))}
          </div>
        </div>
      </SiteSection>

      <SiteSection tone="cream">
        <div className="space-y-10">
          <div className="space-y-3">
            <Eyebrow>{homePage.gettingStarted.eyebrow}</Eyebrow>
            <h2 className="font-display text-4xl leading-tight text-balance text-foreground sm:text-5xl">
              Getting started is simple.
            </h2>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {homePage.gettingStarted.steps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-[1.75rem] border border-border-soft bg-white/70 p-7"
              >
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-sage-dark">
                  Step {index + 1}
                </p>
                <h3 className="mt-4 font-display text-3xl leading-tight text-foreground">
                  {step.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-muted-foreground">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
          <ButtonLink href={homePage.gettingStarted.action.href}>
            {homePage.gettingStarted.action.label}
          </ButtonLink>
        </div>
      </SiteSection>

      <LocationStrip note={homePage.location.note} />
    </main>
  );
}
