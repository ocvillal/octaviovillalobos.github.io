export interface ExperienceEntry {
  org: string;
  location: string;
  role: string;
  period: string;
  bullets: string[];
}

export const experience: ExperienceEntry[] = [
  {
    org: "Silicon Valley Certification Hub",
    location: "Palo Alto, CA",
    role: "Software Engineer Intern",
    period: "July 2025 – Present",
    bullets: [
      "Collaborated with a team of three engineers to design and deploy new platform features, improving user outcomes.",
      "Designed an LLM-powered situational coaching system that generates personalized scenario assessments for users.",
      "Contributed to full-stack development, ensuring scalable performance and integration into the existing platform.",
    ],
  },
  {
    org: "University of California, Santa Cruz",
    location: "Santa Cruz, CA",
    role: "Teaching Assistant",
    period: "September 2024 – Present",
    bullets: [
      "Led weekly discussion sections reinforcing core course concepts for undergraduate students.",
      "Evaluated assignments and exams, providing detailed, actionable feedback to support student learning.",
      "Held office hours to assist students with course material and problem-solving strategies.",
      "Collaborated with course staff to develop and update lesson plans, assignments, and exam materials.",
    ],
  },
];
