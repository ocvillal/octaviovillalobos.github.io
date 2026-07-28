import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/data/projects";
import { ProjectDetail } from "@/components/projects/ProjectDetail";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = getProject(params.slug);
  if (!project) return {};
  return {
    title: `${project.name} — Octavio Villalobos`,
    description: project.subtitle,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();
  return <ProjectDetail project={project} />;
}
