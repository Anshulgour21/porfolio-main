import { FadeIn } from "../animations/FadeIn";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 w-full max-w-7xl mx-auto px-6 md:px-12 border-t border-border">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start">
        
        <div className="md:col-span-5 flex flex-col">
          <FadeIn>
            <span className="section-label mb-6 inline-block">01 — ABOUT</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8">
              A bit about me.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2} className="relative aspect-square w-full max-w-md overflow-hidden rounded-2xl bg-muted/20 grayscale-0 md:grayscale hover:grayscale-0 transition-all duration-700">
            <Image 
              src="/profile.jpg" 
              alt="Anshul Gour" 
              fill 
              className="object-cover" 
              sizes="(max-width: 768px) 100vw, 400px" 
              priority
            />
          </FadeIn>
        </div>

        <div className="md:col-span-7 flex flex-col justify-center pt-8 md:pt-20">
          <FadeIn delay={0.3}>
            <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-6">
              I am a Full Stack Developer specializing in Frontend Development. I focus on building modern, responsive web applications using React, Next.js, and JavaScript.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <p className="text-lg md:text-xl text-muted leading-relaxed mb-10">
              Beyond the frontend, I also work with Node.js, Express.js, REST APIs, and databases to build complete, end-to-end web applications. I am currently pursuing my B.Tech in Computer Science at Shri Vaishnav Vidyapeeth Vishwavidyalaya (SVVV) Indore (2022-2026), where I am passionate about crafting polished digital experiences that solve real problems.
            </p>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border">
              <div>
                <span className="block text-sm font-semibold tracking-widest text-muted uppercase mb-2">Education</span>
                <span className="text-foreground font-medium">B.Tech, SVVV Indore<br/>2022 - 2026 (7.29 CGPA)</span>
              </div>
              <div>
                <span className="block text-sm font-semibold tracking-widest text-muted uppercase mb-2">Core Tech</span>
                <span className="text-foreground font-medium">React, Next.js, Node.js, Tailwind</span>
              </div>
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
