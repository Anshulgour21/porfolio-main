import { FileText, Download, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/Icons";

export function RecruiterLinks() {
  return (
    <section className="py-24 w-full max-w-7xl mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        
        {/* Resume Section */}
        <div className="flex flex-col rounded-2xl border border-border bg-background p-8 md:p-12 transition-colors hover:border-muted/50">
          <span className="section-label mb-6">05 — RESUME</span>
          <h3 className="text-3xl font-semibold mb-4 text-foreground">Want the complete picture?</h3>
          <p className="text-lg text-muted mb-10 leading-relaxed">
            My resume has the full overview of my education, skills, projects and experience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-auto">
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-6 py-3 font-semibold transition-transform hover:scale-105 active:scale-95"
            >
              <FileText size={18} />
              View Resume <ArrowUpRight size={18} className="ml-1" />
            </a>
            <a 
              href="/resume.pdf" 
              download
              className="flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3 font-semibold transition-colors hover:bg-muted/10 active:scale-95"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>
        </div>

        {/* GitHub & LinkedIn Section */}
        <div className="flex flex-col gap-8 md:gap-16">
          
          {/* GitHub */}
          <div className="flex flex-col rounded-2xl border border-border bg-background p-8 md:p-12 transition-colors hover:border-muted/50 flex-1">
            <div className="flex items-center gap-4 mb-4">
              <GithubIcon size={32} className="text-foreground" />
              <h3 className="text-2xl font-semibold text-foreground">GitHub</h3>
            </div>
            <p className="text-lg text-muted mb-8 leading-relaxed">
              Explore my GitHub for additional projects, experiments and development work.
            </p>
            <a 
              href="https://github.com/Anshulgour21" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-auto group flex items-center gap-2 text-sm font-semibold transition-colors hover:text-accent"
            >
              Visit GitHub 
              <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex flex-col rounded-2xl border border-border bg-background p-8 md:p-12 transition-colors hover:border-muted/50 flex-1">
            <div className="flex items-center gap-4 mb-4">
              <LinkedinIcon size={32} className="text-foreground" />
              <h3 className="text-2xl font-semibold text-foreground">LinkedIn</h3>
            </div>
            <p className="text-lg text-muted mb-8 leading-relaxed">
              Let&apos;s connect. I share updates on my projects and software development journey.
            </p>
            <a 
              href="https://www.linkedin.com/in/anshul-gour-aa5877220" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-auto group flex items-center gap-2 text-sm font-semibold transition-colors hover:text-accent"
            >
              Connect on LinkedIn 
              <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
