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
  title: "Alex Mitsis | Software Engineer & Bioinformatics Researcher",
  description: "Portfolio of Alex Mitsis - Software Engineer at Chubb, MSc Bioinformatics researcher, and full-stack developer. Experience in enterprise platforms, genomic data analysis, and modern web applications.",
  keywords: ["Alex Mitsis", "Software Engineer", "Bioinformatics", "Full Stack Developer", "React", "Next.js", "Python", "Java"],
  authors: [{ name: "Alex Mitsis" }],
  creator: "Alex Mitsis",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Alex Mitsis | Software Engineer & Bioinformatics Researcher",
    description: "Portfolio of Alex Mitsis - Software Engineer specializing in full-stack development and bioinformatics.",
    siteName: "Alex Mitsis Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Mitsis | Software Engineer",
    description: "Portfolio of Alex Mitsis - Software Engineer specializing in full-stack development and bioinformatics.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
