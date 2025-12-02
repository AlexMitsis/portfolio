'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Chubb',
    role: 'Software Engineer',
    period: 'Jun 2024 - Present',
    location: 'GREECE',
    logo: '/chubb.jpeg',
    url: 'https://www.linkedin.com/company/chubb',
    gradient: 'from-[#AB9DF2]/5 via-[#2D2A2E]/95 to-[#FC9867]/5',
    borderColor: 'border-[#AB9DF2]/20 hover:border-[#AB9DF2]/40',
    logoGradient: 'from-[#AB9DF2]/30 via-[#2D2A2E]/70 to-[#FC9867]/30',
    textColor: 'text-[#AB9DF2]',
    hoverColor: 'group-hover:text-[#AB9DF2]',
    decorGradient1: 'from-[#AB9DF2]/20 to-[#FC9867]/20',
    decorGradient2: 'from-[#FC9867]/15 to-[#AB9DF2]/15',
    shadowColor: 'shadow-[#AB9DF2]/20',
    shadowHover: 'group-hover:shadow-[0_0_60px_rgba(171,157,242,0.25)]',
    badges: [
      { text: 'CURRENT ROLE', gradient: 'from-[#AB9DF2]/20 to-[#FC9867]/20', color: 'text-[#AB9DF2]', border: 'border-[#AB9DF2]/30', hasIndicator: true },
      { text: 'HYBRID', gradient: 'from-[#FFD866]/20 to-[#FC9867]/20', color: 'text-[#FFD866]', border: 'border-[#FFD866]/30', hasIndicator: false },
      { text: 'GREECE', gradient: 'from-[#A9DC76]/20 to-[#78DCE8]/20', color: 'text-[#A9DC76]', border: 'border-[#A9DC76]/30', hasIndicator: false }
    ],
    bullets: [
      "Developed features for Chubb's largest enterprise underwriting platform in Europe, using Mendix, Java, JavaScript and PostgreSQL.",
      "Collaborated with global, cross-functional teams to integrate APIs, implement solutions, and debug production issues, ensuring system reliability and client satisfaction in the process.",
      "Key contributor as the first software engineer in the Greece-based team, helping establish a collaborative culture by onboarding new engineers, introducing best practices, and encouraging knowledge sharing."
    ],
    techs: ['Mendix', 'Java', 'JavaScript', 'PostgreSQL'],
    bulletColor: 'text-[#A9DC76]',
    techColor: 'text-[#AB9DF2]',
    techBorder: 'border-[#AB9DF2]/20 hover:border-[#AB9DF2]/40',
    techHover: 'hover:bg-[#AB9DF2]/5'
  },
  {
    company: 'MediPass',
    role: 'Software Engineer (AI/ML)',
    period: 'Mar 2024 - May 2024',
    location: 'GREECE',
    logo: '/medipass.jpeg',
    url: 'https://www.linkedin.com/company/medipass-healthtech',
    emoji: '💊',
    gradient: 'from-[#FFD866]/5 via-[#2D2A2E]/95 to-[#FF6188]/5',
    borderColor: 'border-[#FFD866]/20 hover:border-[#FFD866]/40',
    logoGradient: 'from-[#FFD866]/30 via-[#2D2A2E]/70 to-[#FF6188]/30',
    textColor: 'text-[#FFD866]',
    hoverColor: 'group-hover:text-[#FFD866]',
    decorGradient1: 'from-[#FFD866]/20 to-[#FF6188]/20',
    decorGradient2: 'from-[#FF6188]/15 to-[#FFD866]/15',
    shadowColor: 'shadow-[#FFD866]/20',
    shadowHover: 'group-hover:shadow-[0_0_60px_rgba(255,216,102,0.25)]',
    badges: [
      { text: 'HACKATHON WINNER', gradient: 'from-[#FFD866]/20 to-[#FF6188]/20', color: 'text-[#FFD866]', border: 'border-[#FFD866]/30', hasIndicator: false },
      { text: 'REMOTE', gradient: 'from-[#78DCE8]/20 to-[#AB9DF2]/20', color: 'text-[#78DCE8]', border: 'border-[#78DCE8]/30', hasIndicator: false },
      { text: 'GREECE', gradient: 'from-[#A9DC76]/20 to-[#78DCE8]/20', color: 'text-[#A9DC76]', border: 'border-[#A9DC76]/30', hasIndicator: false }
    ],
    bullets: [
      "Led the development of fertilityPATH, a Retrieval-Augmented Generation (RAG) recommendation system for fertility clinics, implemented with Python, Django, LangChain and LLM APIs to provide personalized clinic recommendations based on user queries and background information.",
      "Web scraped thousands of fertility clinic reviews and data with Selenium and stored them as vector embeddings in Pinecone, allowing the model to match specific user cases with relevant positive experiences.",
      "Secured second place out of 28 teams, at the Health and Wellness Crete 2024 Hackathon, showcasing the platform's potential to revolutionize the fertility clinic selection process."
    ],
    techs: ['Python', 'Django', 'LangChain', 'Pinecone', 'Selenium'],
    bulletColor: 'text-[#FFD866]',
    techColor: 'text-[#FFD866]',
    techBorder: 'border-[#FFD866]/20 hover:border-[#FFD866]/40',
    techHover: 'hover:bg-[#FFD866]/5'
  },
  {
    company: 'Cactus - Digital Growth',
    role: 'Web Developer (Internship)',
    period: 'Nov 2022 - Jan 2023',
    location: 'GREECE',
    logo: '/cactus.jpeg',
    url: 'https://www.linkedin.com/company/cactus-web-development',
    emoji: '🌵',
    gradient: 'from-[#78DCE8]/5 via-[#2D2A2E]/95 to-[#A9DC76]/5',
    borderColor: 'border-[#78DCE8]/20 hover:border-[#78DCE8]/40',
    logoGradient: 'from-[#78DCE8]/30 via-[#2D2A2E]/70 to-[#A9DC76]/30',
    textColor: 'text-[#78DCE8]',
    hoverColor: 'group-hover:text-[#78DCE8]',
    decorGradient1: 'from-[#78DCE8]/20 to-[#A9DC76]/20',
    decorGradient2: 'from-[#A9DC76]/15 to-[#78DCE8]/15',
    shadowColor: 'shadow-[#78DCE8]/20',
    shadowHover: 'group-hover:shadow-[0_0_60px_rgba(120,220,232,0.25)]',
    badges: [
      { text: 'INTERNSHIP', gradient: 'from-[#78DCE8]/20 to-[#A9DC76]/20', color: 'text-[#78DCE8]', border: 'border-[#78DCE8]/30', hasIndicator: false },
      { text: 'ON-SITE', gradient: 'from-[#FC9867]/20 to-[#FF6188]/20', color: 'text-[#FC9867]', border: 'border-[#FC9867]/30', hasIndicator: false },
      { text: 'GREECE', gradient: 'from-[#A9DC76]/20 to-[#78DCE8]/20', color: 'text-[#A9DC76]', border: 'border-[#A9DC76]/30', hasIndicator: false }
    ],
    bullets: [
      "Contributed to 10+ projects and independently delivered web apps end-to-end using HTML, CSS, JavaScript, PHP and Laravel."
    ],
    techs: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Laravel'],
    bulletColor: 'text-[#78DCE8]',
    techColor: 'text-[#78DCE8]',
    techBorder: 'border-[#78DCE8]/20 hover:border-[#78DCE8]/40',
    techHover: 'hover:bg-[#78DCE8]/5'
  }
];

export default function WorkExperience() {
  return (
    <>
      {/* Divider */}
      <div className="relative -my-[18px] z-20">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-[#5C6370]/30"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-[#2D2A2E] px-6 py-2 text-[#AB9DF2] font-mono text-sm border border-[#AB9DF2]/30 rounded-full">
            Experience
          </span>
        </div>
      </div>

      {/* Work Experience */}
      <div id="work-experience" className="py-24">
        <div className="px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="group mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className={`relative bg-gradient-to-br ${exp.gradient} backdrop-blur-3xl p-4 sm:p-6 md:p-8 rounded-2xl md:rounded-[2rem] border ${exp.borderColor} transition-all duration-500 overflow-hidden ${exp.shadowHover} group-hover:scale-[1.01]`}>
                {/* Decorative background */}
                <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${exp.decorGradient1} rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700`}></div>
                <div className={`absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br ${exp.decorGradient2} rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700`}></div>

                <div className="relative z-10">
                  <motion.div
                    className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <motion.div
                      className="relative"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <a
                        href={exp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <div className={`w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br ${exp.logoGradient} backdrop-blur-xl rounded-2xl border ${exp.borderColor.split(' ')[0]} flex items-center justify-center shadow-lg ${exp.shadowColor} ${exp.logo ? 'overflow-hidden p-3' : ''}`}>
                          {exp.logo ? (
                            <img
                              src={exp.logo}
                              alt={`${exp.company} Logo`}
                              className="w-full h-full object-contain rounded-xl"
                              loading="lazy"
                            />
                          ) : (
                            <span className="text-3xl sm:text-4xl" aria-hidden="true">{exp.emoji}</span>
                          )}
                        </div>
                      </a>
                    </motion.div>

                    <motion.div
                      className="flex-1"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1, duration: 0.5 }}
                    >
                      <motion.h3
                        className={`text-[#FCFCFA] font-bold text-xl sm:text-2xl mb-2 ${exp.hoverColor} transition-colors duration-300`}
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15, duration: 0.5 }}
                      >
                        {exp.role}
                      </motion.h3>
                      <motion.p
                        className={`${exp.textColor} font-mono text-xs sm:text-sm mb-3`}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                      >
                        <a
                          href={exp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {exp.company}
                        </a> • {exp.period}
                      </motion.p>
                      <motion.div
                        className="flex items-center gap-2 mb-4"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.25, duration: 0.5 }}
                      >
                        {exp.badges.map((badge, idx) => (
                          <span key={idx} className={`px-3 py-1 bg-gradient-to-r ${badge.gradient} backdrop-blur-sm ${badge.color} text-xs font-mono rounded-full border ${badge.border} ${badge.hasIndicator ? 'shadow-lg shadow-[#AB9DF2]/10 flex items-center gap-2' : ''}`}>
                            {badge.hasIndicator && <div className="w-2 h-2 bg-[#A9DC76] rounded-full animate-ping"></div>}
                            {badge.text}
                          </span>
                        ))}
                      </motion.div>
                      <motion.div
                        className="space-y-2 mb-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      >
                        {exp.bullets.map((bullet, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <span className={`${exp.bulletColor} -mt-0.5 flex-shrink-0`} aria-hidden="true">‣</span>
                            <p className="text-[#FCFCFA]/80 text-sm leading-relaxed">{bullet}</p>
                          </div>
                        ))}
                      </motion.div>

                      <motion.div
                        className="flex flex-wrap gap-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.35, duration: 0.5 }}
                      >
                        {exp.techs.map((tech, i) => (
                          <motion.span
                            key={i}
                            className={`px-3 py-1.5 bg-[#2D2A2E]/60 backdrop-blur-sm ${exp.techColor} text-xs font-mono rounded-lg border ${exp.techBorder} ${exp.techHover} transition-all duration-300`}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 + i * 0.05, duration: 0.4 }}
                            whileHover={{ y: -2, scale: 1.05 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        </div>
      </div>
    </>
  );
}
