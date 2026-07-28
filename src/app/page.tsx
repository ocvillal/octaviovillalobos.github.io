import { Hero } from "@/components/hero/Hero";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { Publications } from "@/components/sections/Publications";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <ProjectGrid />
      <Publications />
      <Experience />
      <Contact />
    </>
  );
}
