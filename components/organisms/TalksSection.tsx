import TalkCard from "@/components/molecules/TalkCard";
import { TalkCard as TalkCardType } from "@/types";

interface TalksSectionProps {
  talks: TalkCardType[];
}

export default function TalksSection({ talks }: TalksSectionProps) {
  const [left, center1, center2, right] = talks;

  return (
    <section
      className="py-20"
      style={{ backgroundColor: "var(--color-background)" }}
      aria-label="Talks from IICT 2025"
    >
      <div
        className="mx-auto"
        style={{ maxWidth: 1240, paddingLeft: 32, paddingRight: 32 }}
      >
        {/* Heading */}
        <h2
          className="text-[var(--color-text-primary)] mb-12 leading-tight"
          style={{
            fontFamily: "var(--font-boldonse)",
            fontSize: "clamp(32px, 3.5vw, 52px)",
            letterSpacing: "-0.01em",
            maxWidth: 700,
          }}
        >
          Check Talks From 2025 IICT Conference
        </h2>

        {/* Cards grid — 3 columns, left/right cards are offset down */}
        <div className="grid grid-cols-3 gap-4 items-start">
          {/* Left column — single card offset down */}
          <div className="flex flex-col" style={{ paddingTop: 182 }}>
            {left && <TalkCard talk={left} />}
          </div>

          {/* Center column — 2 stacked cards */}
          <div className="flex flex-col gap-4">
            {center1 && <TalkCard talk={center1} />}
            {center2 && <TalkCard talk={center2} />}
          </div>

          {/* Right column — single card offset down */}
          <div className="flex flex-col" style={{ paddingTop: 178 }}>
            {right && <TalkCard talk={right} />}
          </div>
        </div>
      </div>
    </section>
  );
}
