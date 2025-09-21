'use client';

import { useState } from 'react';

const timelineData = {
  industry: [
    {
      title: "Software Engineer",
      company: "Chubb",
      period: "June 2024 - Present",
      current: true,
      description: "Building features for Chubb's largest enterprise underwriting platform in Europe, serving global markets with high availability requirements.",
      achievements: [
        "First software engineer in Greece-based team, establishing collaborative culture",
        "Collaborated with global cross-functional teams on critical production systems",
        "Integrated APIs and debugged production issues ensuring system reliability"
      ],
      technologies: ["Mendix", "Java", "JavaScript", "PostgreSQL"]
    },
    {
      title: "Software Engineer (AI/ML)",
      company: "MediPass",
      period: "March 2024 - May 2024",
      award: "Hackathon Winner",
      description: "Led development of fertilityPATH, an AI-powered recommendation system for fertility clinics using RAG architecture.",
      achievements: [
        "Built RAG system using LangChain and LLM APIs for personalized recommendations",
        "Web scraped 1000+ fertility clinic reviews using Selenium",
        "Secured 2nd place out of 28 teams at Health & Wellness Crete 2024 Hackathon"
      ],
      technologies: ["Python", "Django", "LangChain", "Pinecone", "Selenium"]
    },
    {
      title: "Web Developer & IT Manager",
      company: "TEDxAUTH - Thessaloniki",
      period: "October 2023 - October 2024",
      description: "Led web development and IT infrastructure for university's TEDx event, managing digital presence and technical operations.",
      achievements: [
        "Redesigned and maintained tedxauth.com using modern web technologies",
        "Managed IT infrastructure for event operations and streaming",
        "Collaborated with organizing team to deliver successful TEDx event"
      ],
      technologies: ["PHP", "JavaScript", "Twig", "Tailwind"]
    },
    {
      title: "Web Developer (Internship)",
      company: "Cactus - Digital Growth",
      period: "November 2022 - January 2023",
      description: "Full-stack web development internship focusing on client projects and professional software development practices.",
      achievements: [
        "Contributed to 10+ client projects from inception to completion",
        "Independently led multiple projects demonstrating initiative",
        "Gained foundation in professional software development workflows"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "Laravel"]
    }
  ],
  academic: [
    {
      title: "Graduate Research Assistant",
      company: "ΚΕΔΕΚ - Aristotle University of Thessaloniki",
      period: "June 2024 - Present",
      current: true,
      description: "Conducting Master's Thesis research in Bioinformatics, focusing on NGS genomic data analysis in Gilthead Seabream populations.",
      achievements: [
        "Developed Data Mining pipeline for genomic data (Pool-seq)",
        "Enhanced understanding of genetic changes in aquaculture species through GWAS",
        "Supported by European-funded \"SEaLIFT\" research programme"
      ],
      technologies: ["Python", "R", "GWAS", "NGS Analysis", "Bioinformatics"]
    },
    {
      title: "MSc Applied Bioinformatics",
      company: "Aristotle University of Thessaloniki",
      period: "October 2023 - Present",
      current: true,
      description: "Advanced program focusing on computational biology, genomic data analysis, and machine learning applications in healthcare and drug discovery.",
      achievements: [
        "Focus on machine learning techniques and statistical modeling",
        "Custom pipelines for large-scale genomic data analysis",
        "Applications in drug discovery and personalized medicine"
      ],
      technologies: ["Python", "R", "Machine Learning", "Statistical Modeling"]
    },
    {
      title: "Erasmus Exchange - Computer Science",
      company: "University of Maribor, Slovenia",
      period: "February 2023 - July 2023",
      description: "International exchange program focusing on advanced computer science topics and cross-cultural academic experience.",
      achievements: [
        "Information Security and Cryptography coursework",
        "Mobile Development and Software Engineering for AI systems",
        "Advanced Bioinformatics algorithms and applications"
      ],
      technologies: ["Information Security", "Mobile Dev", "AI Systems", "Bioinformatics"]
    },
    {
      title: "BSc Computer Science - Applied Informatics",
      company: "University of Macedonia, Greece",
      period: "2018 - 2023",
      description: "Comprehensive 4-year computer science degree with strong foundation in software engineering and data science.",
      achievements: [
        "Strong foundation in Software Engineering and OOP principles",
        "Data Mining, Machine Learning, and Database systems",
        "Capstone projects in web development and data analysis"
      ],
      technologies: ["Java", "Python", "Databases", "Data Mining", "Algorithms"]
    }
  ]
};

export default function Home() {
  const [activeSection, setActiveSection] = useState('overview');

  const renderTimelineItem = (item: any, index: number, type: 'industry' | 'academic') => (
    <div key={index} className="relative mb-12 pl-8">
      <div className={`absolute left-0 top-2 w-4 h-4 rounded-full border-2 ${
        type === 'industry' ? 'border-[#78DCE8] bg-[#2D2A2E]' : 'border-[#AB9DF2] bg-[#2D2A2E]'
      }`}></div>
      <div className="absolute left-2 top-6 w-0.5 bg-[#5C6370] h-full"></div>

      <div className={`bg-[#2D2A2E]/90 backdrop-blur-sm rounded-lg p-6 border transition-all duration-300 hover:bg-[#403E41] hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#78DCE8]/10 ${
        type === 'industry' ? 'border-[#78DCE8]/20 hover:border-[#78DCE8]/40' : 'border-[#AB9DF2]/20 hover:border-[#AB9DF2]/40'
      }`}>
        <div className="flex items-center gap-3 mb-3">
          <h4 className="text-xl font-bold text-[#FCFCFA] font-mono">{item.title}</h4>
          {item.current && (
            <span className="bg-gradient-to-r from-[#A9DC76] to-[#78DCE8] text-[#2D2A2E] px-2 py-1 rounded text-xs font-bold font-mono">
              CURRENT
            </span>
          )}
          {item.award && (
            <span className="bg-gradient-to-r from-[#FFD866] to-[#FC9867] text-[#2D2A2E] px-2 py-1 rounded text-xs font-bold font-mono">
              {item.award.toUpperCase()}
            </span>
          )}
        </div>

        <p className={`font-bold mb-1 font-mono ${type === 'industry' ? 'text-[#78DCE8]' : 'text-[#AB9DF2]'}`}>
          {item.company}
        </p>
        <p className="text-[#727072] text-sm mb-4 font-mono font-medium">{item.period}</p>
        <p className="text-[#FCFCFA] leading-relaxed mb-4 text-sm">{item.description}</p>

        <div className="mb-4">
          <ul className="space-y-2">
            {item.achievements.map((achievement: string, i: number) => (
              <li key={i} className="text-[#FCFCFA] text-sm pl-4 relative">
                <span className={`absolute left-0 font-bold font-mono ${type === 'industry' ? 'text-[#78DCE8]' : 'text-[#AB9DF2]'}`}>
                  //
                </span>
                {achievement}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2">
          {item.technologies.map((tech: string, i: number) => (
            <span key={i} className={`px-3 py-1 rounded text-xs font-bold font-mono transition-all duration-200 hover:-translate-y-0.5 ${
              type === 'industry'
                ? 'bg-[#78DCE8]/10 text-[#78DCE8] border border-[#78DCE8]/30 hover:bg-[#78DCE8]/20'
                : 'bg-[#AB9DF2]/10 text-[#AB9DF2] border border-[#AB9DF2]/30 hover:bg-[#AB9DF2]/20'
            }`}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#2D2A2E]">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-80 min-h-screen bg-[#221F22] border-r border-[#5C6370] p-6">
          <div className="sticky top-6">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-[#FCFCFA] mb-2 font-mono">
                <span className="text-[#FF6188]">const</span>{' '}
                <span className="text-[#A9DC76]">mitsi</span>{' '}
                <span className="text-[#FCFCFA]">=</span>{' '}
                <span className="text-[#FFD866]">"portfolio"</span>
              </h1>
              <p className="text-sm text-[#727072] mb-4 font-mono">
                <span className="text-[#78DCE8]">// Software Engineer</span><br/>
                <span className="text-[#78DCE8]">// Bioinformatics Researcher</span>
              </p>
              <div className="space-y-2">
                <div className="bg-[#78DCE8]/10 text-[#78DCE8] px-3 py-1 rounded text-xs border border-[#78DCE8]/30 font-mono font-bold">
                  CURRENTLY @ CHUBB
                </div>
                <div className="bg-[#AB9DF2]/10 text-[#AB9DF2] px-3 py-1 rounded text-xs border border-[#AB9DF2]/30 font-mono font-bold">
                  MSC BIOINFORMATICS
                </div>
              </div>
            </div>

            <nav className="space-y-2">
              <button
                onClick={() => setActiveSection('overview')}
                className={`w-full text-left px-4 py-3 rounded transition-all duration-200 font-mono font-bold ${
                  activeSection === 'overview'
                    ? 'bg-[#403E41] text-[#FCFCFA] border border-[#FFD866]/30'
                    : 'text-[#727072] hover:bg-[#403E41] hover:text-[#FCFCFA] border border-transparent'
                }`}
              >
                <span className="text-[#FF6188]">01.</span> overview()
              </button>
              <button
                onClick={() => setActiveSection('industry')}
                className={`w-full text-left px-4 py-3 rounded transition-all duration-200 font-mono font-bold ${
                  activeSection === 'industry'
                    ? 'bg-[#78DCE8]/20 text-[#78DCE8] border border-[#78DCE8]/30'
                    : 'text-[#727072] hover:bg-[#78DCE8]/10 hover:text-[#78DCE8] border border-transparent'
                }`}
              >
                <span className="text-[#FF6188]">02.</span> industry.experience()
              </button>
              <button
                onClick={() => setActiveSection('academic')}
                className={`w-full text-left px-4 py-3 rounded transition-all duration-200 font-mono font-bold ${
                  activeSection === 'academic'
                    ? 'bg-[#AB9DF2]/20 text-[#AB9DF2] border border-[#AB9DF2]/30'
                    : 'text-[#727072] hover:bg-[#AB9DF2]/10 hover:text-[#AB9DF2] border border-transparent'
                }`}
              >
                <span className="text-[#FF6188]">03.</span> academic.experience()
              </button>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8 bg-[#2D2A2E]">
          {activeSection === 'overview' && (
            <div>
              <header className="mb-12">
                <h2 className="text-4xl font-bold text-[#FCFCFA] mb-4 font-mono">
                  <span className="text-[#78DCE8]">// </span>
                  <span className="text-[#FFD866]">Welcome</span>
                  <span className="text-[#FCFCFA]">.to.</span>
                  <span className="text-[#A9DC76]">my</span>
                  <span className="text-[#FCFCFA]">(</span>
                  <span className="text-[#FF6188]">"portfolio"</span>
                  <span className="text-[#FCFCFA]">);</span>
                </h2>
                <p className="text-xl text-[#727072] mb-6 font-mono">
                  <span className="text-[#78DCE8]">/* </span>
                  I'm a software engineer and bioinformatics researcher<br/>
                  with expertise in AI/ML development, enterprise platforms,<br/>
                  and genomic data analysis.
                  <span className="text-[#78DCE8]"> */</span>
                </p>
              </header>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-[#2D2A2E]/90 backdrop-blur-sm rounded-lg p-8 border border-[#78DCE8]/20 hover:border-[#78DCE8]/40 transition-all">
                  <h3 className="text-2xl font-bold text-[#78DCE8] mb-4 font-mono">currentRole.industry()</h3>
                  <h4 className="text-xl font-semibold text-[#FCFCFA] mb-2 font-mono">Software Engineer <span className="text-[#727072]">@</span> Chubb</h4>
                  <p className="text-[#A9DC76] mb-4 font-mono font-bold">June 2024 - Present</p>
                  <p className="text-[#FCFCFA] text-sm">
                    Building features for Europe's largest enterprise underwriting platform with global reach.
                  </p>
                </div>

                <div className="bg-[#2D2A2E]/90 backdrop-blur-sm rounded-lg p-8 border border-[#AB9DF2]/20 hover:border-[#AB9DF2]/40 transition-all">
                  <h3 className="text-2xl font-bold text-[#AB9DF2] mb-4 font-mono">currentRole.academic()</h3>
                  <h4 className="text-xl font-semibold text-[#FCFCFA] mb-2 font-mono">Graduate Research Assistant</h4>
                  <p className="text-[#A9DC76] mb-4 font-mono font-bold">Aristotle University</p>
                  <p className="text-[#FCFCFA] text-sm">
                    NGS genomic data analysis in aquaculture species using advanced bioinformatics pipelines.
                  </p>
                </div>
              </div>

              <div className="bg-[#2D2A2E]/90 backdrop-blur-sm rounded-lg p-8 border border-[#FFD866]/20 hover:border-[#FFD866]/40 transition-all">
                <h3 className="text-2xl font-bold text-[#FFD866] mb-4 font-mono">recentAchievement.hackathon()</h3>
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-gradient-to-r from-[#A9DC76] to-[#78DCE8] text-[#2D2A2E] px-3 py-1 rounded text-sm font-bold font-mono">
                    HACKATHON WINNER
                  </span>
                  <h4 className="text-xl font-semibold text-[#FCFCFA] font-mono">2nd Place - Health & Wellness Crete 2024</h4>
                </div>
                <p className="text-[#FCFCFA] text-sm">
                  <span className="text-[#78DCE8] font-mono">// </span>
                  Led development of fertilityPATH, an AI-powered recommendation system using RAG architecture.
                </p>
              </div>
            </div>
          )}

          {activeSection === 'industry' && (
            <div>
              <header className="mb-12">
                <h2 className="text-4xl font-bold text-[#78DCE8] mb-4 font-mono">
                  <span className="text-[#FF6188]">class </span>
                  <span className="text-[#FFD866]">IndustryExperience</span>
                  <span className="text-[#FCFCFA]"> {`{}`}</span>
                </h2>
                <p className="text-xl text-[#727072] font-mono">
                  <span className="text-[#78DCE8]">// </span>Professional software development roles across<br/>
                  <span className="text-[#78DCE8]">// </span>enterprise platforms, AI/ML, and web development.
                </p>
              </header>

              <div className="space-y-8">
                {timelineData.industry.map((item, index) =>
                  renderTimelineItem(item, index, 'industry')
                )}
              </div>
            </div>
          )}

          {activeSection === 'academic' && (
            <div>
              <header className="mb-12">
                <h2 className="text-4xl font-bold text-[#AB9DF2] mb-4 font-mono">
                  <span className="text-[#FF6188]">class </span>
                  <span className="text-[#FFD866]">AcademicExperience</span>
                  <span className="text-[#FCFCFA]"> {`{}`}</span>
                </h2>
                <p className="text-xl text-[#727072] font-mono">
                  <span className="text-[#AB9DF2]">// </span>Research and educational background in<br/>
                  <span className="text-[#AB9DF2]">// </span>bioinformatics, computer science, and data analysis.
                </p>
              </header>

              <div className="space-y-8">
                {timelineData.academic.map((item, index) =>
                  renderTimelineItem(item, index, 'academic')
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
