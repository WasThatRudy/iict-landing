export interface ImportantDate {
  label: string;
  date: string;
  isoDate: string;
  isMilestone?: boolean;
  // When set, renderers should display this previous value struck out
  // above the current `date`, and surface an "Extended" marker.
  previousDate?: string;
}

// Single source of truth for CFP/conference dates. Imported by both
// the homepage strip (HomeImportantDatesSection) and the full
// timeline on /submissions (SubmissionsImportantDatesSection).
export const IMPORTANT_DATES: ImportantDate[] = [
  { label: "Submissions open",                   date: "1 June 2026",                  isoDate: "2026-06-01" },
  { label: "Submission deadline",                date: "8 July 2026, 11:59 PM IST",    isoDate: "2026-07-08", isMilestone: true, previousDate: "1 July 2026" },
  { label: "Notification of conditional accept", date: "10 August 2026",               isoDate: "2026-08-10" },
  { label: "90-second video due",                date: "17 August 2026",               isoDate: "2026-08-17" },
  { label: "Final notification",                 date: "4 September 2026",             isoDate: "2026-09-04" },
  { label: "Workshop dates",                     date: "2 – 3 October 2026",           isoDate: "2026-10-02", isMilestone: true },
];

export type DateStatus = "past" | "upcoming" | "today";

export function dateStatus(isoDate: string, today: Date): DateStatus {
  const d = new Date(isoDate + "T00:00:00");
  const t = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  if (d < t) return "past";
  if (d.getTime() === t.getTime()) return "today";
  return "upcoming";
}
