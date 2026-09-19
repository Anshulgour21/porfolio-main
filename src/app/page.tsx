import { HeroSection } from "@/components/layout/HeroSection";
import { AboutSection } from "@/components/layout/AboutSection";
import { SkillsSection } from "@/components/layout/SkillsSection";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { ExperienceSection } from "@/components/experience/ExperienceSection";
import { RecruiterLinks } from "@/components/recruiter/RecruiterLinks";
import { QuickAccessBar } from "@/components/recruiter/QuickAccessBar";
import { ContactSection } from "@/components/layout/ContactSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-background selection:bg-accent/30 overflow-x-hidden">
      
      <HeroSection />
      
      <AboutSection />
      
      <SkillsSection />

      <ProjectsSection />
      
      <div className="w-full bg-muted/5 border-y border-border">
        <ExperienceSection />
      </div>

      <QuickAccessBar />
      
      <RecruiterLinks />
      
      <ContactSection />
      
      <Footer />
      
    </main>
  );
}
