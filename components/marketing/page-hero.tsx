import type { ReactNode } from "react";

import { cn } from "../../lib/cn";
import { Eyebrow } from "./eyebrow";
import { SiteContainer } from "./site-container";

type PageHeroProps = {
  actions?: ReactNode;
  children?: ReactNode;
  className?: string;
  description: string;
  eyebrow?: string;
  title: string;
};

export function PageHero({
  actions,
  children,
  className,
  description,
  eyebrow,
  title,
}: PageHeroProps) {
  return (
    <section className={cn("py-20 sm:py-24", className)}>
      <SiteContainer>
        <div className="space-y-6">
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          <div className="space-y-4">
            <h1 className="max-w-4xl font-display text-5xl leading-none text-balance text-foreground sm:text-6xl">
              {title}
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl">
              {description}
            </p>
          </div>
          {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
          {children}
        </div>
      </SiteContainer>
    </section>
  );
}
