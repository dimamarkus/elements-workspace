import type { ReactNode } from "react";

import { secondaryCta } from "../../content/shared/site";
import { ButtonLink } from "./button-link";
import { PageHero } from "./page-hero";

type RoutePlaceholderProps = {
  children?: ReactNode;
  description: string;
  eyebrow: string;
  title: string;
};

export function RoutePlaceholder({
  children,
  description,
  eyebrow,
  title,
}: RoutePlaceholderProps) {
  return (
    <PageHero
      actions={<ButtonLink href={secondaryCta.href}>{secondaryCta.label}</ButtonLink>}
      description={description}
      eyebrow={eyebrow}
      title={title}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-3xl border border-border-soft bg-white/70 p-6">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-sage-dark">
            Build Status
          </p>
          <p className="mt-3 text-base leading-7 text-muted-foreground">
            This route is scaffolded and ready for the full content pass in the
            next checkpoint.
          </p>
        </div>
        <div className="rounded-3xl border border-border-soft bg-sage-light p-6">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-sage-dark">
            Next Pass
          </p>
          <p className="mt-3 text-base leading-7 text-muted-foreground">
            Replace placeholder structure with the approved copy, imagery, and
            supporting sections from the content package.
          </p>
        </div>
      </div>
      {children}
    </PageHero>
  );
}
