export interface ProjectLink {
  label: string;
  href: string;
  kind: "repo" | "demo" | "video" | "paper" | "other";
}

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  body?: string;
  tech: string[];
  images: ProjectImage[];
  coverImage: string;
  links: ProjectLink[];
  featured?: boolean;
}
