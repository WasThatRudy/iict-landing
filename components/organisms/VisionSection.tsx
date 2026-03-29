export default function VisionSection() {
  return (
    <section
      id="vision"
      aria-label="Vision of IICT"
      style={{ backgroundColor: "var(--color-background)", padding: "clamp(32px, 5vw, 64px) 20px" }}
    >
      <div className="mx-auto" style={{ maxWidth: 1240 }}>
        <div
          className="relative overflow-hidden flex flex-col items-center justify-center text-center"
          style={{
            backgroundColor: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: 20,
            padding: "clamp(40px, 6vw, 72px) clamp(24px, 6vw, 80px)",
          }}
        >
          {/* Decorative background glow */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              background:
                "radial-gradient(ellipse at 70% 110%, rgba(139,92,246,0.8) 0%, transparent 45%), radial-gradient(ellipse at 30% 105%, rgba(236,72,153,0.6) 0%, transparent 40%)",
            }}
          />

          {/* Label */}
          <p
            className="relative mb-6"
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: 14,
              color: "rgba(255,255,255,0.5)",
              letterSpacing: "-0.01em",
            }}
          >
            [Vision of IICT]
          </p>

          {/* Full form */}
          <h2
            className="relative mb-8"
            style={{
              fontFamily: "var(--font-bebas-neue)",
              fontSize: "clamp(40px, 7vw, 96px)",
              color: "var(--color-text-primary)",
              letterSpacing: "0.06em",
              lineHeight: 1.1,
            }}
          >
            Innovations In Compiler Technology
          </h2>

          {/* Body */}
          <p
            className="relative"
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontWeight: 600,
              fontSize: "clamp(13px, 1.2vw, 16px)",
              color: "#e7e7e7",
              lineHeight: 1.7,
              letterSpacing: "-0.03em",
              maxWidth: 860,
            }}
          >
            The IICT (Innovations In Compiler Technology) workshop aims to bring together researchers,
            practitioners, and enthusiasts in the field of compiler technologies. This year&apos;s theme
            focuses on the cutting-edge advancements in design, implementation, and optimization of
            compiler techniques as well as their applications in emerging software and hardware platforms.
            The workshop consists of accepted talks by our esteemed Program Committee along with invited
            talks by experts from both academia and industry. This is a novel opportunity to interact and
            learn from experts and enthusiasts from both academia and industry. We invite presentation
            proposals for our upcoming workshop.
          </p>
        </div>
      </div>
    </section>
  );
}
