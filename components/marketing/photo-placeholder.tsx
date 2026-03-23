import Image from "next/image";

import type { MediaSlot } from "../../content/shared/media";
import { cn } from "../../lib/cn";

type PhotoPlaceholderProps = {
  badge?: string;
  className?: string;
  slot: MediaSlot;
};

const toneClasses: Record<MediaSlot["tone"], string> = {
  cream: "bg-background",
  sage: "bg-sage-light",
  terra: "bg-terra-light",
};

export function PhotoPlaceholder({
  badge,
  className,
  slot,
}: PhotoPlaceholderProps) {
  return (
    <div
      className={cn(
        "relative flex min-h-72 overflow-hidden rounded-4xl border border-border-soft p-6",
        toneClasses[slot.tone],
        className,
      )}
    >
      {slot.isReady ? (
        <Image
          alt={slot.alt}
          className="object-cover"
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          src={slot.publicPath}
        />
      ) : null}
      {badge ? (
        <span className="absolute right-4 top-4 rounded-full bg-white px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-terra-dark shadow-sm">
          {badge}
        </span>
      ) : null}
      {slot.isReady ? (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-black/25 to-transparent" />
      ) : (
        <div className="mt-auto max-w-sm space-y-3">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-sage-dark">
            Photo Placeholder
          </p>
          <p className="text-base leading-7 text-muted-foreground">{slot.note}</p>
          <p className="text-sm leading-7 text-muted-foreground/80">
            Drop replacement at <code>{slot.dropPath}</code> and then flip{" "}
            <code>isReady</code> in <code>content/shared/media.ts</code>.
          </p>
        </div>
      )}
    </div>
  );
}
