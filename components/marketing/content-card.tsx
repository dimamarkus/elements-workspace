import type { ReactNode } from "react";

import { cn } from "../../lib/cn";

type ContentCardProps = {
  children: ReactNode;
  className?: string;
  tone?: "cream" | "sage" | "terra" | "white";
};

const toneClasses: Record<NonNullable<ContentCardProps["tone"]>, string> = {
  cream: "bg-background",
  sage: "bg-sage-light",
  terra: "bg-terra-light",
  white: "bg-white/70",
};

export function ContentCard({
  children,
  className,
  tone = "white",
}: ContentCardProps) {
  return (
    <div
      className={cn(
        "rounded-[1.75rem] border border-border-soft p-7",
        toneClasses[tone],
        className,
      )}
    >
      {children}
    </div>
  );
}
