import Link from "next/link";

import { contactDetails, navigationItems, siteName } from "../../content/shared/site";
import { SiteContainer } from "./site-container";

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-foreground py-12 text-background">
      <SiteContainer className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          <h2 className="font-display text-3xl leading-none">{siteName}</h2>
          <div className="space-y-1 text-sm leading-7 text-background/80">
            <p>{contactDetails.address}</p>
            <p>{contactDetails.phone}</p>
            <p>
              <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
            </p>
            <p>
              <a href={contactDetails.instagramUrl} target="_blank" rel="noreferrer">
                {contactDetails.instagramHandle}
              </a>
            </p>
          </div>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-3 text-sm text-background/80">
          {navigationItems.map((item) => (
            <Link key={item.href} className="transition-colors hover:text-background" href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </SiteContainer>
    </footer>
  );
}
