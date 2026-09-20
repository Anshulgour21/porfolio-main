"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-8 h-8 rounded-full border border-border bg-background" />;
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex items-center justify-center w-9 h-9 rounded-full border border-border bg-background/50 hover:bg-muted/10 transition-colors group overflow-hidden"
      aria-label="Toggle Dark Mode"
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {/* Unique Abstract Icon: A rotating half-circle / eclipse concept */}
        <motion.div
          initial={false}
          animate={{
            rotate: isDark ? 180 : 0,
            scale: isDark ? 0.9 : 1
          }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {isDark ? (
            // Dark mode icon: Moon/Star abstract
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4 text-blue-400">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          ) : (
            // Light mode icon: Minimal Sun abstract
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4 text-amber-500">
              <circle cx="12" cy="12" r="5" strokeWidth={2} />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
            </svg>
          )}
        </motion.div>
      </div>
    </button>
  );
}
