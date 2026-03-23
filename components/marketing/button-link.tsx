import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";

import { cn } from "../../lib/cn";

type ButtonLinkProps = {
  children: ReactNode;
  className?: string;
  href: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  variant?: "ghost" | "light" | "primary" | "secondary";
};

const variantClasses: Record<NonNullable<ButtonLinkProps["variant"]>, string> = {
  ghost:
    "border border-white/30 text-white hover:bg-white/10 focus-visible:outline-white",
  light:
    "bg-white text-foreground hover:bg-white/90 focus-visible:outline-white",
  primary:
    "bg-sage text-white hover:bg-sage-dark focus-visible:outline-sage-dark",
  secondary:
    "border border-sage text-sage-dark hover:bg-sage-light focus-visible:outline-sage-dark",
};

export function ButtonLink({
  children,
  className,
  href,
  onClick,
  variant = "primary",
}: ButtonLinkProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
    variantClasses[variant],
    className,
  );

  if (href.startsWith("http://") || href.startsWith("https://")) {
    return (
      <a className={classes} href={href} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} href={href} onClick={onClick}>
      {children}
    </Link>
  );
}
