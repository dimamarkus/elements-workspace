import type { ReactNode } from "react";

import { cn } from "../../lib/cn";
import { SiteContainer } from "./site-container";

type SiteSectionProps = {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  tone?: "cream" | "dark" | "sage-dark" | "transparent" | "white";
};

const toneClasses: Record<NonNullable<SiteSectionProps["tone"]>, string> = {
  cream: "bg-background",
  dark: "bg-foreground text-background",
  "sage-dark": "bg-sage-dark text-white",
  transparent: "",
  white: "bg-white",
};

export function SiteSection({
  children,
  className,
  containerClassName,
  tone = "transparent",
}: SiteSectionProps) {
  return (
    <section className={cn("py-16 sm:py-20", toneClasses[tone], className)}>
      <SiteContainer className={containerClassName}>{children}</SiteContainer>
    </section>
  );
}
