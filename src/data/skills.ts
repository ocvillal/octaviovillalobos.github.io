export interface SkillCategory {
  label: string;
  description: string;
  tags: string[];
}

export const skills: SkillCategory[] = [
  {
    label: "Engineering",
    description: "Full-stack development across languages, frameworks, and game engines.",
    tags: ["Python", "C#", "Java", "JavaScript", "SQL", "Flask", "Unity", "Full-Stack Dev"],
  },
  {
    label: "AI & ML",
    description: "Building and evaluating LLM, RL, and neural-network-driven systems.",
    tags: ["PyTorch", "LangChain", "RAG", "LLMs", "Reinforcement Learning", "Neural Networks", "GNNs"],
  },
  {
    label: "Research",
    description: "From experiment design to peer-reviewed publication.",
    tags: ["Cyber Defense Simulation", "Machine Translation", "Experimentation", "Academic Writing"],
  },
];
