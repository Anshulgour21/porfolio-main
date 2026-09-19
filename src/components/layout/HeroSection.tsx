import { FadeIn } from "../animations/FadeIn";
import { AvailabilityBadge } from "../ui/AvailabilityBadge";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center px-6 md:px-12 pt-20">
      <div className="absolute top-8">
        <FadeIn delay={0.1}>
          <AvailabilityBadge />
        </FadeIn>
      </div>

      <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
        <FadeIn delay={0.2}>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-semibold text-foreground tracking-tighter mb-6">
            Anshul Gour
          </h1>
        </FadeIn>
        
        <FadeIn delay={0.3}>
          <h2 className="text-xl md:text-3xl text-muted font-normal tracking-tight max-w-2xl leading-relaxed">
            I build modern, responsive web applications using React, Next.js, and modern frontend technologies.
          </h2>
        </FadeIn>

        <FadeIn delay={0.4} className="mt-12 flex items-center gap-6">
          <a href="#work" className="text-sm font-semibold uppercase tracking-widest text-foreground hover:text-accent transition-colors pb-1 border-b border-foreground hover:border-accent">
            View Work
          </a>
          <a href="#contact" className="text-sm font-semibold uppercase tracking-widest text-muted hover:text-foreground transition-colors pb-1 border-b border-transparent hover:border-foreground">
            Contact Me
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
