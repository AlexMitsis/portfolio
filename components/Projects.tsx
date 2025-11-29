'use client';

import ProjectCarouselEmbla from './ProjectCarouselEmbla';

const projects = [
  {
    title: "Porcupine Chat",
    subtitle: "Secure Room-Based Messaging",
    description: "A modern chat application emphasizing security, privacy, and user experience with end-to-end encryption.",
    features: [
      "ECDH key exchange with AES-256-GCM encryption",
      "End-to-end encrypted group and private rooms",
      "Google OAuth authentication with invite links"
    ],
    technologies: ["React", "Supabase", "Tailwind CSS", "Web Crypto API", "AES-256-GCM", "OAuth"],
    github: "https://github.com/AlexMitsis/porcupine-chat",
    icon: "💬",
    gradient: "from-[#FF6188] to-[#AB9DF2]",
    badge: "OPEN SOURCE",
    badgeColor: "from-[#A9DC76]/20 to-[#78DCE8]/20 text-[#A9DC76] border-[#A9DC76]/30"
  },
  {
    title: "Seabream Genomics Pipeline",
    subtitle: "High-Performance Bioinformatics",
    description: "Bioinformatics pipeline for population genomics analysis of wild and domesticated gilthead seabream.",
    features: [
      "Genome-wide differentiation and selection scans",
      "Modular workflows for 25 whole-genome datasets",
      "Interactive visualizations with Docker reproducibility"
    ],
    technologies: ["Python", "NumPy", "Popoolation2", "BayPass", "PCA", "Docker", "Pool-seq"],
    github: "https://github.com/AlexMitsis/seabream-thesis",
    icon: "🧬",
    gradient: "from-[#A9DC76] to-[#78DCE8]",
    badge: "RESEARCH",
    badgeColor: "from-[#AB9DF2]/20 to-[#FF6188]/20 text-[#AB9DF2] border-[#AB9DF2]/30"
  }
];

export default function Projects() {
  return (
    <>
      {/* Divider */}
      <div className="relative -my-[18px] z-20">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-[#5C6370]/30"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-[#2D2A2E] px-6 py-2 text-[#AB9DF2] font-mono text-sm border border-[#AB9DF2]/30 rounded-full">
            Projects
          </span>
        </div>
      </div>

      {/* Projects Carousel */}
      <ProjectCarouselEmbla projects={projects} />
    </>
  );
}
