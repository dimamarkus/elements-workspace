import Link from "next/link";

import {
  navigationItems,
  primaryCta,
  siteName,
} from "../../content/shared/site";
import { ButtonLink } from "./button-link";
import { SiteContainer } from "./site-container";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border-soft bg-background/95 backdrop-blur">
      <SiteContainer className="flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center justify-between gap-4">
          <Link
            className="font-display text-2xl leading-none text-foreground"
            href="/"
          >
            {siteName}
          </Link>
          <ButtonLink className="lg:hidden" href={primaryCta.href}>
            {primaryCta.label}
          </ButtonLink>
        </div>

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
          <nav aria-label="Primary" className="flex flex-wrap gap-x-5 gap-y-2">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <ButtonLink className="hidden lg:inline-flex" href={primaryCta.href}>
            {primaryCta.label}
          </ButtonLink>
        </div>
      </SiteContainer>
    </header>
  );
}
