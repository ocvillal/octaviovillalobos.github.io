export interface EducationEntry {
  org: string;
  location: string;
  degree: string;
  meta: string[];
  period: string;
}

export const education: EducationEntry[] = [
  {
    org: "University of California, Santa Cruz",
    location: "Santa Cruz, CA",
    degree: "Master of Science in Computer Science",
    meta: ["GPA: 3.85/4.00"],
    period: "September 2024 – June 2026",
  },
  {
    org: "University of California, Santa Cruz",
    location: "Santa Cruz, CA",
    degree: "Bachelor of Science in Computer Science",
    meta: ["GPA: 3.6/4.00 | With Honors"],
    period: "October 2020 – June 2024",
  },
];
