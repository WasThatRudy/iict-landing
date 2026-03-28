import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--color-background)]";

  const variants: Record<string, string> = {
    primary:
      "bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white rounded-full px-5 py-3 focus:ring-[var(--color-primary)]",
    secondary:
      "border border-[var(--color-border-subtle)] text-[var(--color-text-primary)] hover:bg-white/5 rounded-full px-5 py-2 focus:ring-white",
    outline:
      "border border-white text-white hover:bg-white/10 rounded-full px-5 py-2 focus:ring-white",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
