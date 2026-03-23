import { contactDetails } from "../../content/shared/site";
import { Eyebrow } from "./eyebrow";
import { SiteSection } from "./site-section";

type LocationStripProps = {
  note: string;
};

export function LocationStrip({ note }: LocationStripProps) {
  return (
    <SiteSection tone="dark">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div className="space-y-4">
          <Eyebrow className="text-white/70">Location</Eyebrow>
          <h2 className="font-display text-4xl leading-none text-balance sm:text-5xl">
            Come see it in person.
          </h2>
        </div>
        <div className="space-y-3 text-base leading-8 text-white/80 sm:text-lg">
          <p>{contactDetails.address}</p>
          <p>{note}</p>
        </div>
      </div>
    </SiteSection>
  );
}
