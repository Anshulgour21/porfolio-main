import { FadeIn } from "../animations/FadeIn";
import { AvailabilityBadge } from "../ui/AvailabilityBadge";
import { QuickLinksBar } from "../ui/QuickLinksBar";

export function HeroSection() {
  return (
    <section id="home" className="relative w-full min-h-[90vh] flex flex-col items-center justify-center px-6 md:px-12 pt-32">
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
        
        <FadeIn delay={0.1} className="mb-12">
          <AvailabilityBadge />
        </FadeIn>

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

        <FadeIn delay={0.4} className="mt-12 flex justify-center w-full">
          <QuickLinksBar />
        </FadeIn>
      </div>
    </section>
  );
}
