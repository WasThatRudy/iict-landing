export interface TalkCard {
  id: string;
  title: string;
  watchUrl: string;
  bgImageSrc: string;
}

export interface NavLink {
  label: string;
  href: string;
  hasDropdown?: boolean;
}
