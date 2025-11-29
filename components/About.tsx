'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <>
      {/* Divider */}
      <div className="relative -my-[18px] z-20">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-[#5C6370]/30"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-[#2D2A2E] px-6 py-2 text-[#78DCE8] font-mono text-sm border border-[#78DCE8]/30 rounded-full">
            About Me
          </span>
        </div>
      </div>

      {/* About Me Section */}
      <div id="about" className="py-12 px-8">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {/* Profile Card */}
            <motion.div
              className="md:col-span-1 flex"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-[#2D2A2E]/60 backdrop-blur-md p-6 rounded-2xl border border-[#78DCE8]/20 hover:border-[#78DCE8]/40 transition-all duration-500 w-full">
                <div className="flex flex-col items-center text-center">
                  {/* Profile Picture */}
                  <div className="w-40 h-40 rounded-2xl border-2 border-[#78DCE8]/40 overflow-hidden mb-4 shadow-lg">
                    <Image
                      src="https://media.licdn.com/dms/image/v2/D4D03AQHcOPwbCUTjtQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1727566246471?e=1766016000&v=beta&t=uTbUNZ3m5umSbHnlRKGm7jU9EeZbpxuX_A-vC9pp-R0"
                      alt="Alex Mitsis"
                      width={160}
                      height={160}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-[#FCFCFA] mb-2 font-mono">
                    Alex Mitsis
                  </h3>

                  <p className="text-[#78DCE8] text-sm font-mono mb-4">
                    Software Engineer
                  </p>

                  <div className="w-full space-y-2">
                    <div className="flex items-center gap-2 text-xs text-[#FCFCFA]/60 font-mono">
                      <span className="text-[#AB9DF2]">📍</span>
                      <span>Greece</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#FCFCFA]/60 font-mono">
                      <span className="text-[#A9DC76]">💼</span>
                      <span>Chubb</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#FCFCFA]/60 font-mono">
                      <span className="text-[#FFD866]">🎓</span>
                      <span>MSc Bioinformatics</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bio Content */}
            <motion.div
              className="md:col-span-2 space-y-6 flex flex-col"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="bg-[#2D2A2E]/60 backdrop-blur-md p-8 rounded-2xl border border-[#5C6370]/20 hover:border-[#78DCE8]/30 transition-all duration-500">
                <h4 className="text-lg font-bold text-[#78DCE8] mb-4 font-mono">Background</h4>
                <p className="text-[#FCFCFA]/80 leading-relaxed font-mono text-sm">
                  I&apos;m a <span className="text-[#AB9DF2]">Software Engineer</span> and <span className="text-[#FFD866]">Bioinformatics Researcher</span> with a passion for building elegant solutions to complex problems. With experience spanning <span className="text-[#A9DC76]">enterprise platforms</span>, <span className="text-[#FF6188]">AI/ML systems</span>, and <span className="text-[#78DCE8]">genomics pipelines</span>, I bring a unique interdisciplinary perspective to software development.
                </p>
              </div>

              <div className="bg-[#2D2A2E]/60 backdrop-blur-md p-8 rounded-2xl border border-[#5C6370]/20 hover:border-[#AB9DF2]/30 transition-all duration-500">
                <h4 className="text-lg font-bold text-[#AB9DF2] mb-4 font-mono">What I Do</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-start gap-3">
                    <span className="text-[#A9DC76] text-lg">→</span>
                    <div>
                      <p className="text-[#FCFCFA] font-mono text-sm font-semibold mb-1">Full-Stack Development</p>
                      <p className="text-[#FCFCFA]/60 text-xs font-mono">Building scalable enterprise applications</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#FF6188] text-lg">→</span>
                    <div>
                      <p className="text-[#FCFCFA] font-mono text-sm font-semibold mb-1">AI/ML Engineering</p>
                      <p className="text-[#FCFCFA]/60 text-xs font-mono">Creating intelligent systems with LLMs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#78DCE8] text-lg">→</span>
                    <div>
                      <p className="text-[#FCFCFA] font-mono text-sm font-semibold mb-1">Bioinformatics</p>
                      <p className="text-[#FCFCFA]/60 text-xs font-mono">Analyzing genomic data at scale</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
