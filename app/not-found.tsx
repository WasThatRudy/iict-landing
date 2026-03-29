import Link from "next/link";

export default function NotFound() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-5 text-center"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      {/* Large 404 */}
      <p
        style={{
          fontFamily: "var(--font-boldonse)",
          fontSize: "clamp(96px, 20vw, 240px)",
          color: "rgba(255,255,255,0.06)",
          lineHeight: 1,
          letterSpacing: "-0.02em",
          userSelect: "none",
        }}
      >
        404
      </p>

      <div className="flex flex-col items-center gap-4 -mt-4">
        <h1
          style={{
            fontFamily: "var(--font-boldonse)",
            fontSize: "clamp(22px, 3vw, 36px)",
            color: "var(--color-text-primary)",
            letterSpacing: "-0.01em",
          }}
        >
          Page not found
        </h1>
        <p
          style={{
            fontFamily: "var(--font-geist-mono)",
            fontSize: 14,
            color: "var(--color-text-secondary)",
            maxWidth: 360,
            lineHeight: 1.7,
          }}
        >
          Looks like this page got optimized away by the compiler.
        </p>

        <Link
          href="/"
          style={{
            marginTop: 16,
            fontFamily: "var(--font-bebas-neue)",
            fontSize: 15,
            letterSpacing: "0.14em",
            color: "white",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: 4,
            padding: "10px 24px",
            textDecoration: "none",
            transition: "border-color 0.15s",
          }}
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
