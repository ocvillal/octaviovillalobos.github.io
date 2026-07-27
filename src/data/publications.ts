export interface Publication {
  title: string;
  venue: string;
  detail: string;
  year: number;
  links: { label: string; href: string }[];
}

export const publications: Publication[] = [
  {
    title: "Large Language Models are Autonomous Cyber Defenders",
    venue: "IEEE Conference on Artificial Intelligence (CAI) 2025",
    detail: "Pages 1125–1132",
    year: 2025,
    links: [
      { label: "PDF", href: "https://arxiv.org/pdf/2505.04843" },
      { label: "DOI/Link", href: "https://arxiv.org/abs/2505.04843" },
    ],
  },
];
