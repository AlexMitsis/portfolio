'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.div
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2D2A2E] via-[#221F22] to-[#2D2A2E]">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-[#AB9DF2]/20 to-[#FC9867]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-[#78DCE8]/20 to-[#A9DC76]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#FFD866]/10 to-[#FF6188]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 md:px-8 max-w-5xl mx-auto">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-mono text-[#FCFCFA]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Alex Mitsis
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#727072] mb-8 font-mono"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <span className="text-[#FC9867]" aria-hidden="true">{'// '}</span>
          <span className="inline-block sm:inline">Software Engineer</span>{' '}
          <span className="text-[#5C6370]" aria-hidden="true">|</span>{' '}
          <span className="inline-block sm:inline">Bioinformatics Researcher</span>{' '}
          <span className="text-[#5C6370]" aria-hidden="true">|</span>{' '}
          <span className="inline-block sm:inline">AI/ML Developer</span>{' '}
          <span className="text-[#5C6370]" aria-hidden="true">|</span>{' '}
          <span className="inline-block sm:inline">EU based</span>
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="px-3 sm:px-4 py-2 bg-[#2D2A2E]/60 backdrop-blur-sm border border-[#AB9DF2]/30 rounded-lg">
            <span className="text-[#AB9DF2] font-mono text-xs sm:text-sm">Chubb</span>
          </div>
          <div className="px-3 sm:px-4 py-2 bg-[#2D2A2E]/60 backdrop-blur-sm border border-[#FFD866]/30 rounded-lg">
            <span className="text-[#FFD866] font-mono text-xs sm:text-sm">MSc Bioinformatics</span>
          </div>
          <div className="px-3 sm:px-4 py-2 bg-[#2D2A2E]/60 backdrop-blur-sm border border-[#A9DC76]/30 rounded-lg">
            <span className="text-[#A9DC76] font-mono text-xs sm:text-sm">BSc Computer Science</span>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <a
            href="#work-experience"
            className="group px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-[#AB9DF2]/20 to-[#FC9867]/20 hover:from-[#AB9DF2]/30 hover:to-[#FC9867]/30 backdrop-blur-sm text-[#FCFCFA] font-mono text-sm sm:text-base rounded-xl border border-[#AB9DF2]/40 hover:border-[#AB9DF2]/60 transition-all duration-300"
          >
            Work Experience <span aria-hidden="true">→</span>
          </a>
          <a
            href="#skills"
            className="group px-4 sm:px-6 py-2.5 sm:py-3 bg-[#2D2A2E]/60 hover:bg-[#2D2A2E]/80 backdrop-blur-sm text-[#FCFCFA] font-mono text-sm sm:text-base rounded-xl border border-[#5C6370]/40 hover:border-[#FC9867]/60 transition-all duration-300"
          >
            Skills <span aria-hidden="true">→</span>
          </a>
          <a
            href="#projects"
            className="group px-4 sm:px-6 py-2.5 sm:py-3 bg-[#2D2A2E]/60 hover:bg-[#2D2A2E]/80 backdrop-blur-sm text-[#FCFCFA] font-mono text-sm sm:text-base rounded-xl border border-[#5C6370]/40 hover:border-[#FF6188]/60 transition-all duration-300"
          >
            Projects <span aria-hidden="true">→</span>
          </a>
        </motion.div>

        <motion.div
          className="mt-16 flex justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-[#AB9DF2] font-mono mb-1">2+</div>
            <div className="text-sm text-[#727072] font-mono">Years Experience</div>
          </div>
          <div className="w-px bg-[#5C6370]/30"></div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#FFD866] font-mono mb-1">2</div>
            <div className="text-sm text-[#727072] font-mono">Featured Projects</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6, repeat: Infinity, repeatType: "reverse", repeatDelay: 0.5 }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[#727072] text-xs font-mono">Scroll to explore</span>
          <svg className="w-6 h-6 text-[#AB9DF2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </motion.div>
  );
}
