export function QuickAccessBar() {
  const links = [
    { label: "Resume", href: "/resume.pdf" },
    { label: "GitHub", href: "https://github.com/Anshulgour21" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/anshul-gour-aa5877220" },
    { label: "Projects", href: "#work" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-8 flex justify-center">
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 rounded-full border border-border bg-background/50 backdrop-blur-sm px-8 py-4">
        <span className="text-xs font-semibold uppercase tracking-widest text-muted hidden md:inline-block mr-4">
          Quick Links
        </span>
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") || link.href.endsWith(".pdf") ? "_blank" : undefined}
            rel={link.href.startsWith("http") || link.href.endsWith(".pdf") ? "noopener noreferrer" : undefined}
            className="text-sm font-medium text-muted hover:text-foreground transition-colors flex items-center gap-1"
          >
            {link.label}
            {(link.href.startsWith("http") || link.href.endsWith(".pdf")) && (
              <span className="text-[10px] ml-0.5">↗</span>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}
