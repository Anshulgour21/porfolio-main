import { FadeIn } from "../animations/FadeIn";

export function QuickLinksBar() {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 px-8 py-4 rounded-full border border-border/80 bg-background/50 backdrop-blur-sm shadow-sm hover:border-border transition-colors">
      <span className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase whitespace-nowrap">
        Quick Links
      </span>
      <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-sm font-medium">
        <a 
          href="/resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          Resume ↗
        </a>
        <a 
          href="https://github.com/Anshulgour21" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          GitHub ↗
        </a>
        <a 
          href="https://www.linkedin.com/in/anshul-gour-aa5877220" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          LinkedIn ↗
        </a>
        <a 
          href="#work" 
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          Projects
        </a>
        <a 
          href="#contact" 
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          Contact
        </a>
      </div>
    </div>
  );
}
