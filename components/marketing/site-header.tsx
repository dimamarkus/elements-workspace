import Link from "next/link";

import {
  navigationItems,
  primaryCta,
  siteName,
} from "../../content/shared/site";
import { ButtonLink } from "./button-link";
import { MobileNav } from "./mobile-nav";
import { SiteContainer } from "./site-container";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border-soft bg-background/95 backdrop-blur">
      <SiteContainer className="py-4">
        <div className="flex items-center justify-between gap-4">
          <Link
            className="font-display text-2xl leading-none text-foreground"
            href="/"
          >
            {siteName}
          </Link>
          <MobileNav
            ctaHref={primaryCta.href}
            ctaLabel={primaryCta.label}
            items={navigationItems}
          />
        </div>

        <div className="mt-4 hidden items-center justify-between gap-6 md:flex">
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
          <ButtonLink href={primaryCta.href}>
            {primaryCta.label}
          </ButtonLink>
        </div>
      </SiteContainer>
    </header>
  );
}
