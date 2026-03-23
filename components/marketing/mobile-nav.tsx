"use client";

import Link from "next/link";
import { useState } from "react";

import type { NavigationItem } from "../../content/shared/site";
import { ButtonLink } from "./button-link";

type MobileNavProps = {
  ctaHref: string;
  ctaLabel: string;
  items: NavigationItem[];
};

export function MobileNav({ ctaHref, ctaLabel, items }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        aria-expanded={isOpen}
        aria-label="Toggle navigation menu"
        className="inline-flex items-center justify-center rounded-full border border-border-soft px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-white/60"
        onClick={() => setIsOpen((current) => !current)}
        type="button"
      >
        {isOpen ? "Close" : "Menu"}
      </button>

      {isOpen ? (
        <div className="mt-4 space-y-4 rounded-4xl border border-border-soft bg-white/90 p-5 shadow-sm">
          <nav aria-label="Mobile" className="grid gap-3">
            {items.map((item) => (
              <Link
                key={item.href}
                className="text-base leading-7 text-muted-foreground transition-colors hover:text-foreground"
                href={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <ButtonLink href={ctaHref}>{ctaLabel}</ButtonLink>
        </div>
      ) : null}
    </div>
  );
}
