"use client";

import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal, ProjectData } from "./ProjectModal";

const PROJECTS: ProjectData[] = [
  {
    id: "aura",
    number: "01",
    name: "Aura",
    category: "Jewellery E-Commerce",
    description: "A modern jewellery e-commerce experience focused on clean product presentation, browsing and a polished shopping interface.",
    technologies: ["React", "Next.js", "JavaScript", "Tailwind CSS"],
    liveUrl: "https://aura-ecom-eight.vercel.app/",
    imageSrc: "/projects/aura.jpg", // We'll assume the script saves it as .jpg
  },
  {
    id: "flavour-fusion",
    number: "02",
    name: "Flavour Fusion",
    category: "Food Delivery",
    description: "A modern food-focused web experience designed around discovering food, browsing products and creating a smooth digital ordering experience.",
    technologies: ["React", "Next.js", "JavaScript", "Tailwind CSS"],
    liveUrl: "https://flavourfusionwithus.thelogoless.com/",
    imageSrc: "/projects/flavour-fusion.jpg",
  },
  {
    id: "agx-media",
    number: "03",
    name: "AGX Media",
    category: "Digital Marketing Agency",
    description: "A creative agency website designed to present digital marketing, social media and video editing services through a modern visual experience.",
    technologies: ["React", "Next.js", "Tailwind CSS"], // Defaulting to this until provided
    liveUrl: "LINK TO BE PROVIDED",
    imageSrc: "/projects/agx-media.jpg", // We'll need a placeholder for this one
  },
  {
    id: "shivansh",
    number: "04",
    name: "Shivansh",
    category: "Devotional Web App",
    description: "A devotional web experience focused on Lord Shiva and Jyotirlingas, designed to present spiritual information through a modern and accessible interface.",
    technologies: ["React", "Next.js", "JavaScript", "Tailwind CSS"],
    liveUrl: "https://shivansh-devotional-web-app.vercel.app/",
    imageSrc: "/projects/shivansh.jpg",
  }
];

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  return (
    <section id="work" className="py-24 md:py-32 w-full max-w-7xl mx-auto px-6 md:px-12">
      <div className="mb-20 flex flex-col items-start">
        <span className="section-label mb-6">03 — SELECTED WORK</span>
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-8">
          Things I&apos;ve built.
        </h2>
        <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
          A selection of web experiences and applications I&apos;ve worked on across e-commerce, food, creative services and web applications.
        </p>
      </div>

      <div className="flex flex-col gap-12 md:gap-24">
        <ProjectCard 
          project={PROJECTS[0]} 
          layout="image-right" 
          onClick={() => setSelectedProject(PROJECTS[0])} 
        />
        <ProjectCard 
          project={PROJECTS[1]} 
          layout="image-first" 
          onClick={() => setSelectedProject(PROJECTS[1])} 
        />
        <ProjectCard 
          project={PROJECTS[2]} 
          layout="image-left" 
          onClick={() => setSelectedProject(PROJECTS[2])} 
        />
        <ProjectCard 
          project={PROJECTS[3]} 
          layout="full-width" 
          onClick={() => setSelectedProject(PROJECTS[3])} 
        />
      </div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}
