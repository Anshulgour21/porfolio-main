"use client";

import { useState, useEffect } from "react";
import { Download, Menu, X } from "lucide-react";
import { ThemeToggle } from "../ui/ThemeToggle";

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#work" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  // Handle scroll events for navbar background and active section
  useEffect(() => {
    const handleScroll = () => {
      // Add background when scrolled down
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Simple scroll spy logic
      const sections = navLinks.map(link => link.href.substring(1));
      
      // Default to home if at top
      if (window.scrollY < 100) {
        setActiveSection("home");
        return;
      }

      for (const section of [...sections].reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      // Update hash without destroying Next.js router state
      window.history.pushState(window.history.state, "", href);
      setActiveSection(targetId);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-md border-border py-4 shadow-sm" 
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* LOGO */}
        <a 
          href="#home" 
          onClick={(e) => handleLinkClick(e, "#home")}
          className="text-xl font-semibold text-foreground tracking-tight hover:opacity-80 transition-opacity"
        >
          Anshul Gour
        </a>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`relative text-sm font-medium transition-colors hover:text-foreground ${
                  isActive ? "text-foreground" : "text-muted"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-500" />
                )}
              </a>
            );
          })}
        </div>

        {/* CTA BUTTON & MOBILE TOGGLE */}
        <div className="flex items-center gap-4">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-5 py-2 text-sm font-medium border border-border/60 rounded-full hover:bg-muted/10 transition-colors"
          >
            Download Resume
            <Download size={14} className="text-blue-500" />
          </a>
          
          {/* Dark Mode Toggle */}
          <div className="hidden md:flex">
            <ThemeToggle />
          </div>

          {/* Hamburger Menu Toggle (Mobile) */}
          <button 
            className="md:hidden text-foreground p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg md:hidden flex flex-col px-6 py-4 gap-4 pb-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`text-lg font-medium py-2 ${
                activeSection === link.href.substring(1) ? "text-blue-500" : "text-foreground"
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-5 py-3 mt-4 text-sm font-medium border border-border rounded-full hover:bg-muted/10 transition-colors"
          >
            Download Resume
            <Download size={14} className="text-blue-500" />
          </a>
          <div className="flex justify-center mt-2">
            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  );
}
