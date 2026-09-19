import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { TechBadge } from "../ui/TechBadge";
import { ProjectData } from "./ProjectModal";

interface ProjectCardProps {
  project: ProjectData;
  layout?: "image-right" | "image-first" | "image-left" | "full-width";
  onClick: () => void;
}

export function ProjectCard({ project, layout = "image-right", onClick }: ProjectCardProps) {
  const contentSection = (
    <div className="flex flex-col justify-center flex-1 py-6 md:py-12 px-6 md:px-12 group cursor-pointer" onClick={onClick}>
      <div className="mb-4 flex items-center gap-4">
        <span className="text-sm font-semibold tracking-widest text-muted">
          {project.number}
        </span>
        <span className="h-px w-8 bg-border"></span>
        <span className="text-xs font-semibold uppercase tracking-widest text-muted">
          {project.category}
        </span>
      </div>
      
      <h3 className="mb-6 text-3xl md:text-5xl font-semibold tracking-tight transition-colors group-hover:text-accent">
        {project.name}
      </h3>
      
      <p className="mb-8 text-lg text-muted max-w-xl leading-relaxed">
        {project.description}
      </p>
      
      <div className="mb-10 flex flex-wrap gap-2">
        {project.technologies.slice(0, 4).map((tech) => (
          <TechBadge key={tech} text={tech} />
        ))}
        {project.technologies.length > 4 && (
          <TechBadge text={`+${project.technologies.length - 4}`} />
        )}
      </div>

      <div className="flex items-center gap-2 font-semibold text-sm tracking-wide transition-colors group-hover:text-accent">
        VIEW PROJECT
        <ArrowUpRight className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" size={18} />
      </div>
    </div>
  );

  const imageSection = (
    <div 
      className={`relative flex-1 cursor-pointer overflow-hidden bg-muted/10 group ${
        layout === "full-width" ? "aspect-video md:aspect-[21/9]" : "aspect-[4/3] md:aspect-auto h-[300px] md:h-full min-h-[400px]"
      }`}
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-accent/0 transition-colors duration-500 group-hover:bg-accent/5 z-10 mix-blend-overlay"></div>
      <Image
        src={project.imageSrc}
        alt={project.name}
        fill
        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );

  if (layout === "full-width") {
    return (
      <div className="flex flex-col gap-8 rounded-2xl border border-border bg-background transition-colors hover:border-muted/50 overflow-hidden">
        {imageSection}
        <div className="px-6 md:px-12 pb-12">
          {contentSection}
        </div>
      </div>
    );
  }

  if (layout === "image-first") {
    return (
      <div className="flex flex-col rounded-2xl border border-border bg-background transition-colors hover:border-muted/50 overflow-hidden">
        {imageSection}
        {contentSection}
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row rounded-2xl border border-border bg-background transition-colors hover:border-muted/50 overflow-hidden min-h-[500px]">
      {layout === "image-left" ? (
        <>
          {imageSection}
          {contentSection}
        </>
      ) : (
        <>
          {contentSection}
          {imageSection}
        </>
      )}
    </div>
  );
}
