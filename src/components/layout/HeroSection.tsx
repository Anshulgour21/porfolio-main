"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { MapPin, Github, Linkedin, Mail, GraduationCap, Code2, FolderGit2, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/Icons";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 50, stiffness: 400 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const bgX = useTransform(smoothX, [-0.5, 0.5], [15, -15]);
  const bgY = useTransform(smoothY, [-0.5, 0.5], [15, -15]);

  const portraitX = useTransform(smoothX, [-0.5, 0.5], [-5, 5]);
  const portraitY = useTransform(smoothY, [-0.5, 0.5], [-5, 5]);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section id="home" className="relative w-full min-h-[100vh] overflow-hidden bg-background flex flex-col justify-between pt-24 lg:pt-24 pb-4">
      
      {/* 
        ========================================================================
        1. OVERSIZED BACKGROUND TYPOGRAPHY
        ========================================================================
      */}
      <motion.div 
        className="absolute top-[10%] lg:top-[8%] inset-x-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden"
        style={{ x: bgX, y: bgY }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <h1 className="font-oswald text-[30vw] md:text-[32vw] lg:text-[22vw] font-bold text-slate-200 dark:text-white/5 tracking-tighter leading-none whitespace-nowrap select-none">
          DEVELOPER
        </h1>
      </motion.div>

      {/* 
        ========================================================================
        2. FOREGROUND CONTENT WRAPPER
        ========================================================================
      */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center lg:items-start justify-between flex-1 gap-12 lg:gap-0 mt-0 lg:mt-8">
        
        {/* LEFT COLUMN: TEXT CONTENT */}
        <motion.div 
          className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-[40%] z-20 order-2 lg:order-1 pt-0 lg:pt-8 xl:pl-8"
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.8 }}
        >
          {/* Hello I'm */}
          <div className="flex items-center gap-4 mb-2 lg:mb-4">
            <span className="font-caveat text-3xl md:text-4xl text-muted transform -rotate-2">
              Hello, I&apos;m
            </span>
            <div className="hidden lg:block w-12 h-[1px] bg-border ml-2"></div>
          </div>

          {/* Name */}
          <h2 className="font-oswald text-6xl md:text-7xl lg:text-[6.5rem] font-bold leading-[0.85] tracking-tight uppercase mb-6 flex flex-col">
            <span className="text-foreground">ANSHUL</span>
            <span className="text-accent">GOUR</span>
          </h2>
          
          {/* Role */}
          <h3 className="text-lg md:text-xl font-bold tracking-widest text-foreground uppercase mb-2">
            FULL STACK DEVELOPER
          </h3>

          {/* Availability */}
          <div className="flex items-center gap-3 mb-8 text-accent font-bold tracking-[0.15em] text-[11px] md:text-xs uppercase">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent"></span>
            </span>
            OPEN TO OPPORTUNITIES
          </div>

          {/* Description */}
          <p className="text-base text-muted max-w-sm leading-relaxed mb-10 font-medium">
            I build responsive, modern web experiences with clean UI and practical functionality.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            <a href="#work" className="flex items-center justify-center gap-2 rounded-lg bg-accent text-white px-7 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/25">
              View Projects 
              <ArrowRight size={16} />
            </a>
            <a href="#contact" className="flex items-center justify-center rounded-lg border-2 border-border/60 bg-transparent text-foreground px-7 py-3 text-sm font-semibold transition-colors hover:border-foreground/20">
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* CENTER/RIGHT: PORTRAIT PLACEHOLDER OR EMPTY SPACE */}
        <div className="w-full lg:w-[45%] relative flex justify-center items-end order-1 lg:order-2 h-[10vh] md:h-[15vh] lg:h-[75vh]">
          {/* Portrait removed temporarily as requested */}
        </div>

        {/* FAR RIGHT COLUMN: STATS (Desktop Only) */}
        <motion.div 
          className="hidden lg:flex flex-col justify-center gap-12 w-[15%] z-20 order-3 pt-12 xl:pr-8"
          initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="flex flex-col items-start">
            <div className="text-accent mb-3"><GraduationCap size={24} strokeWidth={1.5} /></div>
            <p className="font-oswald text-2xl font-bold text-foreground">2026</p>
            <p className="text-[9px] font-bold uppercase tracking-widest text-muted mt-1">B.TECH GRADUATION</p>
          </div>
          
          <div className="w-8 h-[1px] bg-border/80"></div>
          
          <div className="flex flex-col items-start">
            <div className="text-accent mb-3"><Code2 size={24} strokeWidth={1.5} /></div>
            <p className="font-oswald text-2xl font-bold text-foreground">FULL STACK</p>
            <p className="text-[9px] font-bold uppercase tracking-widest text-muted mt-1">DEVELOPER</p>
          </div>
          
          <div className="w-8 h-[1px] bg-border/80"></div>
          
          <div className="flex flex-col items-start">
            <div className="text-accent mb-3"><FolderGit2 size={24} strokeWidth={1.5} /></div>
            <p className="font-oswald text-2xl font-bold text-foreground">10+</p>
            <p className="text-[9px] font-bold uppercase tracking-widest text-muted mt-1">PROJECTS</p>
          </div>
        </motion.div>

      </div>

      {/* 
        ========================================================================
        3. MOBILE ONLY STATS ROW (Appears below portrait)
        ========================================================================
      */}
      <motion.div 
        className="lg:hidden flex flex-wrap justify-center gap-6 w-full max-w-md mx-auto px-6 mt-8 mb-8 z-20 order-3"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.8 }}
      >
        <div className="flex flex-col items-center">
          <GraduationCap size={20} className="text-accent mb-2" strokeWidth={1.5} />
          <p className="font-oswald text-xl font-bold text-foreground">2026</p>
          <p className="text-[9px] font-bold uppercase tracking-widest text-muted mt-1">B.TECH</p>
        </div>
        <div className="flex flex-col items-center">
          <Code2 size={20} className="text-accent mb-2" strokeWidth={1.5} />
          <p className="font-oswald text-xl font-bold text-foreground">FULL STACK</p>
          <p className="text-[9px] font-bold uppercase tracking-widest text-muted mt-1">DEVELOPER</p>
        </div>
        <div className="flex flex-col items-center">
          <FolderGit2 size={20} className="text-accent mb-2" strokeWidth={1.5} />
          <p className="font-oswald text-xl font-bold text-foreground">10+</p>
          <p className="text-[9px] font-bold uppercase tracking-widest text-muted mt-1">PROJECTS</p>
        </div>
      </motion.div>

      {/* FAR RIGHT EDITORIAL TEXT (Desktop Only) */}
      <div className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 flex-col gap-1 text-[9px] font-bold uppercase tracking-[0.3em] text-muted/40 z-20">
        <span>BUILD</span>
        <span>LEARN</span>
        <span>IMPROVE</span>
        <span>REPEAT</span>
      </div>

      {/* 
        ========================================================================
        4. BOTTOM INFO BAR
        ========================================================================
      */}
      <motion.div 
        className="relative z-20 w-full max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between pb-4 pt-6 gap-6 md:gap-8 order-4"
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8 }}
      >
        {/* Location */}
        <div className="flex items-center gap-2 whitespace-nowrap">
          <MapPin size={16} className="text-muted" strokeWidth={2} />
          <span className="text-[11px] font-bold tracking-widest text-muted uppercase">BASED IN INDIA</span>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-full h-[1px] bg-border mx-8"></div>

        {/* Socials & Edge Label */}
        <div className="flex items-center justify-between md:justify-end w-full md:w-auto gap-8 whitespace-nowrap">
          <div className="flex items-center gap-6 text-foreground">
            <a href="https://github.com/Anshulgour21" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors"><GithubIcon size={18} /></a>
            <a href="https://www.linkedin.com/in/anshul-gour-aa5877220" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors"><LinkedinIcon size={18} /></a>
            <a href="mailto:hello@example.com" className="hover:text-accent transition-colors"><Mail size={18} /></a>
          </div>
          <span className="text-[11px] font-bold tracking-widest text-muted uppercase">WEB / APP / DIGITAL</span>
        </div>
      </motion.div>

    </section>
  );
}
