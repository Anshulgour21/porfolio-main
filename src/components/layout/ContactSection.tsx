import { ArrowRight, Mail } from "lucide-react";
import { FadeIn } from "../animations/FadeIn";
import { GithubIcon, LinkedinIcon } from "../ui/Icons";

export function ContactSection() {
  const emailAddress = "hello@example.com"; // Placeholder - replace with actual email

  return (
    <section id="contact" className="py-32 md:py-48 w-full max-w-4xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
      <FadeIn>
        <span className="section-label mb-8 inline-block">06 — CONTACT</span>
      </FadeIn>
      
      <FadeIn delay={0.1}>
        <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-8">
          Let&apos;s build something useful.
        </h2>
      </FadeIn>

      <FadeIn delay={0.2}>
        <p className="text-xl md:text-2xl text-muted max-w-2xl leading-relaxed mb-16">
          I&apos;m open to software development opportunities, frontend roles and projects where I can contribute to real products and build meaningful web experiences.
        </p>
      </FadeIn>

      <FadeIn delay={0.3} className="flex flex-col sm:flex-row items-center gap-6 mb-24">
        <a 
          href={`mailto:${emailAddress}`}
          className="group flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-8 py-4 text-lg font-semibold transition-transform hover:scale-105 active:scale-95"
        >
          Get In Touch 
          <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
        </a>
      </FadeIn>

      <FadeIn delay={0.4} className="flex items-center gap-8 border-t border-border pt-12 w-full justify-center">
        <a 
          href="https://www.linkedin.com/in/anshul-gour-aa5877220"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center gap-2 text-muted hover:text-foreground transition-colors"
          aria-label="LinkedIn"
        >
          <div className="p-4 rounded-full border border-border bg-background group-hover:border-muted transition-colors">
            <LinkedinIcon size={24} />
          </div>
          <span className="text-sm font-medium">LinkedIn ↗</span>
        </a>
        
        <a 
          href="https://github.com/Anshulgour21"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center gap-2 text-muted hover:text-foreground transition-colors"
          aria-label="GitHub"
        >
          <div className="p-4 rounded-full border border-border bg-background group-hover:border-muted transition-colors">
            <GithubIcon size={24} />
          </div>
          <span className="text-sm font-medium">GitHub ↗</span>
        </a>
      </FadeIn>
    </section>
  );
}
