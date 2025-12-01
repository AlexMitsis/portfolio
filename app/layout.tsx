import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
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
      <head>
        {/* Favicon */}
        <link rel="icon" href="/alexmitsis.ico" />
        {/* Performance: Preconnect to external domains */}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        <link rel="preconnect" href="https://media.licdn.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
