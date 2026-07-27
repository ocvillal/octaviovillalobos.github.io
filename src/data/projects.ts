import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "selma",
    name: "Selma",
    subtitle: "Framework for socially realistic NPCs",
    description:
      "A framework for creating realistic and socially aware RL NPC agents in video games. Currently under development, with a conference submission in progress.",
    tech: ["Python", "LLM", "RL"],
    coverImage: "/images/projects/selma/cover.png",
    images: [{ src: "/images/projects/selma/cover.png", alt: "Selma project preview" }],
    links: [],
    featured: true,
  },
  {
    slug: "french-english-mt",
    name: "French → English MT",
    subtitle: "Phrase-based decoder + Marian NMT",
    description:
      "A French-to-English machine translation system that combines a custom phrase-based decoder with a neural machine translation model trained using Marian NMT.",
    body: "Integrates IBM Model 1 word alignments, phrase table extraction, and an n-gram language model into a stack-based beam search decoder, and evaluates translation quality using BLEU and chrF metrics.",
    tech: [
      "Python",
      "Marian NMT",
      "IBM Model 1",
      "Phrase-based MT",
      "n-gram LM",
      "Beam Search",
      "BLEU/chrF",
    ],
    coverImage: "/images/projects/french-english-mt/cover.png",
    images: [
      { src: "/images/projects/french-english-mt/cover.png", alt: "French to English MT project preview" },
      { src: "/images/projects/french-english-mt/detail.png", alt: "Translator interface" },
    ],
    links: [
      { label: "Repo", href: "https://github.com/ocvillal/LMs-for-fun", kind: "repo" },
      { label: "Video", href: "https://youtu.be/a4ptV0TBVAo", kind: "video" },
    ],
  },
  {
    slug: "insight-deck",
    name: "Insight Deck",
    subtitle: "Automatic IPO deck generator",
    description:
      "InsightDeck is an AI tool that automatically generates IPO presentations without human intervention — gathering, processing, and parsing information into a visually appealing slide deck while grounding the information to ensure accuracy.",
    tech: ["Python", "LangChain", "RAG", "LLMs", "Parsing", "Orchestration", "Vector DB"],
    coverImage: "/images/projects/insight-deck/cover.png",
    images: [{ src: "/images/projects/insight-deck/cover.png", alt: "Insight Deck project preview" }],
    links: [
      {
        label: "Demo",
        href: "https://drive.google.com/file/d/18gyinlpYX6gSNGlk4oA5BBwcgGtA347S/view?resourcekey",
        kind: "demo",
      },
    ],
  },
  {
    slug: "formula-forecast",
    name: "Formula Forecast",
    subtitle: "Neural network Formula One predictor",
    description:
      "A predictive model for Formula 1 finishing positions, motivated by how difficult top-10 race outcomes are to forecast due to interacting factors like driver skill, car performance, track characteristics, weather, strategy, and unpredictable incidents.",
    body: "Matches the accuracy of top betting sites like Underdog.",
    tech: ["Neural Networks", "PyTorch", "Pandas", "Matplotlib", "Scikit-Learn"],
    coverImage: "/images/projects/formula-forecast/cover.png",
    images: [{ src: "/images/projects/formula-forecast/cover.png", alt: "Formula Forecast project preview" }],
    links: [],
  },
  {
    slug: "llms-are-acds",
    name: "LLMs are ACDs",
    subtitle: "IEEE CAI 2025 · Autonomous Cyber Defense",
    description:
      "We show that large language models can act as autonomous cyber defenders (ACDs), detecting and responding to cyber attacks through reinforcement learning.",
    body: "Published at the IEEE Conference on Artificial Intelligence 2025. Collaborative work with Alvaro Cardenas.",
    tech: ["LLMs", "Cage Challenge", "CybORG", "GNN", "RL Agents"],
    coverImage: "/images/projects/llms-are-acds/cover.png",
    images: [
      { src: "/images/projects/llms-are-acds/cover.png", alt: "LLMs are ACDs project preview" },
      { src: "/images/projects/llms-are-acds/detail.png", alt: "Cage Challenge environment" },
    ],
    links: [
      {
        label: "Repo",
        href: "https://github.com/ocvillal/LLM-s-are-ACDs/blob/main/README.md",
        kind: "repo",
      },
      { label: "Paper", href: "https://arxiv.org/abs/2505.04843", kind: "paper" },
    ],
    featured: true,
  },
  {
    slug: "home-gen-new-gen",
    name: "Home Gen New Gen",
    subtitle: "AI-powered layout generation for game environments",
    description:
      "A tool that automatically generates stylistic and functional interior room layouts for games using user-selected 3D furniture and decoration models.",
    body: "Uses genetic algorithms, pathfinding, and planning techniques to evolve unique room designs while ensuring navigable and coherent layouts.",
    tech: ["Python", "C#", "Java", "Unity"],
    coverImage: "/images/projects/home-gen-new-gen/cover.png",
    images: [{ src: "/images/projects/home-gen-new-gen/cover.png", alt: "Home Gen New Gen project preview" }],
    links: [
      {
        label: "Repo",
        href: "https://github.com/ocvillal/AI-as-an-Interior-Designer",
        kind: "repo",
      },
      { label: "Video", href: "https://www.youtube.com/watch?v=P6nQ91sXMjA", kind: "video" },
    ],
  },
  {
    slug: "bird-tracker",
    name: "Bird Tracker",
    subtitle: "Map-driven birdwatching platform",
    description:
      "An interactive bird-watching platform inspired by eBird.org, built to support checklist submissions, personalized statistics, and regional birding insights — all wrapped in a dynamic, map-driven experience.",
    tech: ["JavaScript", "HTML", "SQL", "Python", "Flask", "Google Maps API"],
    coverImage: "/images/projects/bird-tracker/cover.webp",
    images: [
      { src: "/images/projects/bird-tracker/cover.webp", alt: "Bird Tracker project preview" },
      { src: "/images/projects/bird-tracker/detail.png", alt: "Bird Tracker detail view" },
    ],
    links: [
      { label: "Repo", href: "https://github.com/ocvillal/birdtracker", kind: "repo" },
      {
        label: "Video",
        href: "https://drive.google.com/file/d/18DFIfYY8NEXVMSEZHH7OPE5cWgCnbUdf/view?usp=sharing",
        kind: "video",
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
