"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

import type { NavigationItem } from "../../content/shared/site";
import { cn } from "../../lib/cn";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { ButtonLink } from "./button-link";

type MobileNavProps = {
  ctaHref: string;
  ctaLabel: string;
  items: NavigationItem[];
};

export function MobileNav({ ctaHref, ctaLabel, items }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div className="md:hidden">
      <Sheet onOpenChange={setIsOpen} open={isOpen}>
        <SheetTrigger asChild>
          <button
            aria-label="Toggle navigation menu"
            className="inline-flex items-center gap-2 rounded-full border border-border-soft px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-white/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage-dark"
            type="button"
          >
            <Menu
              aria-hidden="true"
              className={cn("h-4 w-4 transition-transform", isOpen && "rotate-90")}
            />
            {isOpen ? "Close" : "Menu"}
          </button>
        </SheetTrigger>
        <SheetContent className="w-[90vw] max-w-sm md:hidden" side="right">
          <div className="flex h-full flex-col gap-6">
            <div className="space-y-2 pr-14">
              <SheetTitle>Site navigation</SheetTitle>
              <SheetDescription className="max-w-xs">
                Browse the main sections of the Elements Workspace site.
              </SheetDescription>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-terra">
                Explore
              </p>
              <nav aria-label="Mobile" className="grid gap-3">
                {items.map((item) => (
                  <Link
                    key={item.href}
                    className="text-xl leading-8 text-foreground transition-colors hover:text-terra-dark"
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="mt-auto border-t border-border-soft pt-5">
              <ButtonLink href={ctaHref} onClick={() => setIsOpen(false)}>
                {ctaLabel}
              </ButtonLink>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
