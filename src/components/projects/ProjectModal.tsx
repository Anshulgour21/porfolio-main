"use client";

import { X, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import { TechBadge } from "../ui/TechBadge";
import { GithubIcon } from "../ui/Icons";

export interface ProjectData {
  id: string;
  number: string;
  name: string;
  category: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  imageSrc: string;
}

interface ProjectModalProps {
  project: ProjectData | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm transition-opacity">
      <div 
        className="relative flex h-full w-full flex-col overflow-y-auto bg-background md:h-[90vh] md:max-w-5xl md:rounded-2xl md:border md:border-border md:shadow-2xl"
        role="dialog"
        aria-modal="true"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-background/80 px-6 py-4 backdrop-blur-md">
          <h2 className="text-xl font-semibold tracking-tight">{project.name}</h2>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-muted transition-colors hover:bg-border hover:text-foreground"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex flex-col gap-8 p-6 md:p-10">
          <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border bg-muted/20">
            <Image
              src={project.imageSrc}
              alt={`${project.name} preview`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          <div className="grid gap-12 md:grid-cols-3">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-semibold mb-4">Overview</h3>
              <p className="text-lg leading-relaxed text-muted">
                {project.description}
              </p>
              
              {/* Additional details can be added here later if provided by the user */}
            </div>

            <div className="flex flex-col gap-8">
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-muted mb-3">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <TechBadge key={tech} text={tech} />
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-muted mb-3">
                  Links
                </h4>
                <div className="flex flex-col gap-3">
                  {project.liveUrl && project.liveUrl !== "LINK TO BE PROVIDED" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 text-sm font-medium transition-colors hover:text-accent"
                    >
                      <ExternalLink size={16} />
                      <span className="underline-offset-4 group-hover:underline">View Live Project</span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 text-sm font-medium transition-colors hover:text-accent"
                    >
                      <GithubIcon size={16} />
                      <span className="underline-offset-4 group-hover:underline">View Source Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
