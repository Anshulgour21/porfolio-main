import { FadeIn } from "../animations/FadeIn";

export function SkillsSection() {
  const skills = [
    "React", "Next.js", "JavaScript", "TypeScript", 
    "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "MySQL", 
    "REST APIs", "Git", "Responsive Design"
  ];

  return (
    <section id="skills" className="py-24 md:py-32 w-full max-w-7xl mx-auto px-6 md:px-12 border-t border-border">
      <div className="flex flex-col items-center text-center">
        <FadeIn>
          <span className="section-label mb-6 inline-block">02 — SKILLS</span>
        </FadeIn>
        
        <FadeIn delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-16 max-w-3xl">
            Technologies I work with.
          </h2>
        </FadeIn>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
          {skills.map((skill, index) => (
            <FadeIn key={skill} delay={0.1 + (index * 0.05)}>
              <div className="px-6 py-3 rounded-full border border-border bg-background text-lg font-medium text-muted hover:text-accent hover:border-accent transition-colors duration-300">
                {skill}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
