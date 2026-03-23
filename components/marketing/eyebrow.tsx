import type { ReactNode } from "react";

import { cn } from "../../lib/cn";

type EyebrowProps = {
  children: ReactNode;
  className?: string;
};

export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <p
      className={cn(
        "text-sm font-medium uppercase tracking-[0.24em] text-terra",
        className,
      )}
    >
      {children}
    </p>
  );
}
