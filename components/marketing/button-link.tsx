import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "../../lib/cn";

type ButtonLinkProps = {
  children: ReactNode;
  className?: string;
  href: string;
  variant?: "primary" | "secondary";
};

const variantClasses: Record<NonNullable<ButtonLinkProps["variant"]>, string> = {
  primary:
    "bg-sage text-white hover:bg-sage-dark focus-visible:outline-sage-dark",
  secondary:
    "border border-sage text-sage-dark hover:bg-sage-light focus-visible:outline-sage-dark",
};

export function ButtonLink({
  children,
  className,
  href,
  variant = "primary",
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        variantClasses[variant],
        className,
      )}
      href={href}
    >
      {children}
    </Link>
  );
}
