import { Hero } from "@/components/hero/Hero";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { Publications } from "@/components/sections/Publications";
import { Contact } from "@/components/sections/Contact";
import { SectionRail } from "@/components/nav/SectionRail";

export default function Home() {
  return (
    <>
      <SectionRail />
      <Hero />
      <Skills />
      <ProjectGrid />
      <Publications />
      <Experience />
      <Contact />
    </>
  );
}
