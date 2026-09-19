"use client";

import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-border bg-background py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        
        {/* Left */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="text-sm font-semibold tracking-widest text-foreground uppercase mb-1">
            Anshul Gour
          </span>
          <span className="text-sm text-muted">
            Full Stack Developer
          </span>
        </div>

        {/* Right - Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-muted">
          <a href="https://www.linkedin.com/in/anshul-gour-aa5877220" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            LinkedIn
          </a>
          <a href="https://github.com/Anshulgour21" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            GitHub
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            Resume
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 flex flex-col-reverse md:flex-row justify-between items-center gap-6">
        <span className="text-xs text-muted">
          © {new Date().getFullYear()} Anshul Gour
        </span>
        
        <button 
          onClick={scrollToTop}
          className="group flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted hover:text-foreground transition-colors"
        >
          Back to top 
          <ArrowUp size={14} className="transition-transform group-hover:-translate-y-1" />
        </button>
      </div>
    </footer>
  );
}
