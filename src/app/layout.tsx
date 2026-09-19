import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
