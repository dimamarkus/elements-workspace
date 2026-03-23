import type { ReactNode } from "react";

import { cn } from "../../lib/cn";
import { Eyebrow } from "./eyebrow";

type SectionHeadingProps = {
  className?: string;
  description?: ReactNode;
  eyebrow?: string;
  title: ReactNode;
};

export function SectionHeading({
  className,
  description,
  eyebrow,
  title,
}: SectionHeadingProps) {
  return (
    <div className={cn("space-y-3", className)}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="font-display text-4xl leading-tight text-balance text-foreground sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <div className="max-w-3xl text-lg leading-8 text-muted-foreground">
          {description}
        </div>
      ) : null}
    </div>
  );
}
