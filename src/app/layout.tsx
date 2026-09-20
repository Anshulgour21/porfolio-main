import type { Metadata } from "next";
import { Geist, Geist_Mono, Oswald } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anshul Gour | Full Stack Developer",
  description: "Portfolio of Anshul Gour, a Full Stack Developer focused on React, Next.js and modern web applications.",
  openGraph: {
    title: "Anshul Gour | Full Stack Developer",
    description: "Portfolio of Anshul Gour, a Full Stack Developer focused on React, Next.js and modern web applications.",
    type: "website",
    locale: "en_US",
  }
};

import { Navbar } from "@/components/layout/Navbar";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} antialiased scroll-smooth`}>
      <body className="bg-background text-foreground min-h-screen flex flex-col relative transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Navbar />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
