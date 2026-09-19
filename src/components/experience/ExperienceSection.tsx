export function ExperienceSection() {
  const experiences = [
    {
      id: "internship",
      year: "[Dates]",
      company: "[Company Name]",
      role: "Frontend Developer Intern",
      description: "Worked on building the frontend for an Udemy-like web application while integrating with an existing backend.",
      bullets: [
        "Built responsive frontend screens using Next.js and Tailwind CSS.",
        "Integrated frontend interfaces with existing backend REST APIs.",
        "Focused on modern web application development and responsive UI design."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 md:py-32 w-full max-w-4xl mx-auto px-6 md:px-12">
      <div className="mb-16 flex flex-col items-start">
        <span className="section-label mb-6">04 — EXPERIENCE</span>
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Where I&apos;ve worked and what I&apos;ve built.
        </h2>
      </div>

      <div className="relative border-l border-border pl-8 md:pl-12 ml-4 md:ml-6">
        {experiences.map((exp) => (
          <div key={exp.id} className="relative mb-16 last:mb-0 group">
            {/* Timeline indicator marker */}
            <span className="absolute -left-[41px] md:-left-[57px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-background border border-border group-hover:border-accent group-hover:bg-accent/10 transition-colors">
              <span className="h-1.5 w-1.5 rounded-full bg-muted group-hover:bg-accent transition-colors"></span>
            </span>
            
            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-3">
              <span className="text-sm font-semibold tracking-widest text-muted uppercase md:w-32 flex-shrink-0">
                {exp.year}
              </span>
              <div>
                <h3 className="text-2xl font-semibold text-foreground">{exp.role}</h3>
                <h4 className="text-lg font-medium text-accent">{exp.company}</h4>
              </div>
            </div>
            
            <div className="md:ml-38 mt-4">
              <p className="text-lg text-muted mb-6">
                {exp.description}
              </p>
              
              <ul className="flex flex-col gap-3">
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx} className="relative text-muted pl-5">
                    <span className="absolute left-0 top-2.5 h-1 w-1 rounded-full bg-muted"></span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
