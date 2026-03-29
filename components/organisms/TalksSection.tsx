import TalkCard from "@/components/molecules/TalkCard";
import { TalkCard as TalkCardType } from "@/types";

interface TalksSectionProps {
  talks: TalkCardType[];
}

export default function TalksSection({ talks }: TalksSectionProps) {
  const [left, center1, center2, right] = talks;

  return (
    <section
      id="talks"
      className="py-14 md:py-20"
      style={{ backgroundColor: "var(--color-background)" }}
      aria-label="Talks from IICT 2025"
    >
      <div className="mx-auto px-5 md:px-8" style={{ maxWidth: 1240 }}>
        <h2
          className="text-[var(--color-text-primary)] mb-10 md:mb-12 leading-tight"
          style={{
            fontFamily: "var(--font-boldonse)",
            fontSize: "clamp(28px, 3.5vw, 52px)",
            letterSpacing: "-0.01em",
            maxWidth: 700,
          }}
        >
          Check Talks From 2025 IICT Conference
        </h2>

        {/* Mobile / tablet: simple 1-col or 2-col grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden">
          {talks.map((talk) => talk && <TalkCard key={talk.id} talk={talk} />)}
        </div>

        {/* Desktop: 3-col staggered layout */}
        <div className="hidden lg:grid grid-cols-3 gap-4 items-start">
          <div className="flex flex-col" style={{ paddingTop: 182 }}>
            {left && <TalkCard talk={left} />}
          </div>
          <div className="flex flex-col gap-4">
            {center1 && <TalkCard talk={center1} />}
            {center2 && <TalkCard talk={center2} />}
          </div>
          <div className="flex flex-col" style={{ paddingTop: 178 }}>
            {right && <TalkCard talk={right} />}
          </div>
        </div>
      </div>
    </section>
  );
}
