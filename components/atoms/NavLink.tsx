interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  hasDropdown?: boolean;
  active?: boolean;
}

export default function NavLink({
  href,
  children,
  hasDropdown = false,
  active = false,
}: NavLinkProps) {
  return (
    <a
      href={href}
      className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-white ${
        active ? "text-white" : "text-[var(--color-text-secondary)]"
      }`}
    >
      {children}
      {hasDropdown && (
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M2 4L6 8L10 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </a>
  );
}
