export interface TalkCard {
  id: string;
  title: string;
  watchUrl: string;
  bgImageSrc?: string;
  ctaLabel?: string;  // defaults to "Watch"
  gradient?: string;  // CSS gradient for card background blob
}

export interface NavLink {
  label: string;
  href: string;
  hasDropdown?: boolean;
}
