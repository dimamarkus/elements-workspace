import { ButtonLink } from "../components/marketing/button-link";
import { Eyebrow } from "../components/marketing/eyebrow";
import { SiteContainer } from "../components/marketing/site-container";
import { primaryCta, secondaryCta } from "../content/shared/site";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-1">
      <SiteContainer className="flex flex-col justify-center gap-10 py-24">
        <section className="space-y-4">
          <Eyebrow>Elements Workspace</Eyebrow>
          <h1 className="max-w-4xl font-display text-5xl leading-none text-balance text-foreground sm:text-6xl lg:text-7xl">
            A place for homeschooling families in Brooklyn.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
            The build foundation is now in place. Next up: brand primitives,
            typed content, and the full homepage structure from the roadmap.
          </p>
        </section>

        <div className="flex flex-wrap gap-3">
          <ButtonLink href={primaryCta.href}>{primaryCta.label}</ButtonLink>
          <ButtonLink href={secondaryCta.href} variant="secondary">
            {secondaryCta.label}
          </ButtonLink>
        </div>

        <section className="grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-border-soft bg-white/70 p-6">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-sage-dark">
              Stack
            </p>
            <p className="mt-3 text-base leading-7 text-muted-foreground">
              Next.js App Router, Tailwind, server-first rendering, and custom
              brand components.
            </p>
          </div>
          <div className="rounded-3xl border border-border-soft bg-sage-light p-6">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-sage-dark">
              Focus
            </p>
            <p className="mt-3 text-base leading-7 text-muted-foreground">
              Strong typography, restrained JavaScript, and an editorial layout
              that fits the brand.
            </p>
          </div>
          <div className="rounded-3xl border border-border-soft bg-terra-light p-6">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-terra-dark">
              Next Checkpoint
            </p>
            <p className="mt-3 text-base leading-7 text-muted-foreground">
              Shared UI primitives, site config, and route scaffolding for the
              real content build.
            </p>
          </div>
        </section>
      </SiteContainer>
    </main>
  );
}
