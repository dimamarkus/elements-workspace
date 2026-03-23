import { cn } from "../../lib/cn";

type PhotoPlaceholderProps = {
  badge?: string;
  className?: string;
  note: string;
  tone?: "cream" | "sage" | "terra";
};

const toneClasses: Record<NonNullable<PhotoPlaceholderProps["tone"]>, string> = {
  cream: "bg-background",
  sage: "bg-sage-light",
  terra: "bg-terra-light",
};

export function PhotoPlaceholder({
  badge,
  className,
  note,
  tone = "sage",
}: PhotoPlaceholderProps) {
  return (
    <div
      className={cn(
        "relative flex min-h-[18rem] overflow-hidden rounded-[2rem] border border-border-soft p-6",
        toneClasses[tone],
        className,
      )}
    >
      {badge ? (
        <span className="absolute right-4 top-4 rounded-full bg-white px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-terra-dark shadow-sm">
          {badge}
        </span>
      ) : null}
      <div className="mt-auto max-w-sm space-y-3">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-sage-dark">
          Photo Placeholder
        </p>
        <p className="text-base leading-7 text-muted-foreground">{note}</p>
      </div>
    </div>
  );
}
