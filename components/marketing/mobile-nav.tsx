"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";

import type { NavigationItem } from "../../content/shared/site";
import { cn } from "../../lib/cn";
import { ButtonLink } from "./button-link";

type MobileNavProps = {
  ctaHref: string;
  ctaLabel: string;
  items: NavigationItem[];
};

export function MobileNav({ ctaHref, ctaLabel, items }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const descriptionId = useId();
  const pathname = usePathname();
  const titleId = useId();

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setIsMounted(false);
    }, 300);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const sheet = (
    <div
      aria-hidden={!isOpen}
      className={cn(
        "fixed inset-0 z-60 md:hidden",
        isOpen ? "pointer-events-auto" : "pointer-events-none",
      )}
    >
      <button
        aria-label="Close navigation menu"
        className={cn(
          "absolute inset-0 bg-foreground/12 backdrop-blur-sm transition-opacity duration-200",
          isOpen ? "opacity-100" : "opacity-0",
        )}
        onClick={() => setIsOpen(false)}
        type="button"
      />

      <div
        aria-describedby={descriptionId}
        aria-labelledby={titleId}
        aria-modal="true"
        className={cn(
          "absolute inset-y-0 right-0 z-10 flex h-full w-[90vw] max-w-sm flex-col gap-6 overflow-y-auto border-l border-border-soft bg-background px-6 py-6 shadow-2xl transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
          isOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0",
        )}
        id="mobile-navigation-sheet"
        role="dialog"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <h2 className="font-display text-2xl text-foreground" id={titleId}>
              Site navigation
            </h2>
            <p
              className="max-w-xs text-sm leading-7 text-muted-foreground"
              id={descriptionId}
            >
              Browse the main sections of the Elements Workspace site.
            </p>
          </div>
          <button
            aria-label="Close navigation menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-soft text-muted-foreground transition-colors hover:bg-sage-light hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage-dark"
            onClick={() => setIsOpen(false)}
            ref={closeButtonRef}
            type="button"
          >
            <X aria-hidden="true" className="h-5 w-5" />
          </button>
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
    </div>
  );

  return (
    <div className="md:hidden">
      <button
        aria-controls="mobile-navigation-sheet"
        aria-expanded={isOpen}
        aria-label="Toggle navigation menu"
        className="inline-flex items-center gap-2 rounded-full border border-border-soft px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-white/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage-dark"
        onClick={() => setIsOpen((current) => !current)}
        type="button"
      >
        <Menu
          aria-hidden="true"
          className={cn("h-4 w-4 transition-transform", isOpen && "rotate-90")}
        />
        {isOpen ? "Close" : "Menu"}
      </button>
      {isMounted ? createPortal(sheet, document.body) : null}
    </div>
  );
}
