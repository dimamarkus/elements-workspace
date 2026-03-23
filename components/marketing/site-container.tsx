import type { ReactNode } from "react";

import { cn } from "../../lib/cn";

type SiteContainerProps = {
  children: ReactNode;
  className?: string;
};

export function SiteContainer({
  children,
  className,
}: SiteContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12", className)}>
      {children}
    </div>
  );
}
