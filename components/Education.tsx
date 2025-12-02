'use client';

import { motion } from 'framer-motion';

const educationData = [
  {
    institution: 'Aristotle University of Thessaloniki',
    degree: 'MSc in Applied Bioinformatics',
    period: 'Oct 2023 - Present',
    location: 'GREECE',
    logo: '/auth.jpeg',
    url: 'https://www.auth.gr/en/homepage/',
    emoji: '🎓',
    gradient: 'from-[#AB9DF2]/5 via-[#2D2A2E]/95 to-[#FF6188]/5',
    borderColor: 'border-[#AB9DF2]/20 hover:border-[#AB9DF2]/40',
    logoGradient: 'from-[#AB9DF2]/30 via-[#2D2A2E]/70 to-[#FF6188]/30',
    textColor: 'text-[#AB9DF2]',
    hoverColor: 'group-hover:text-[#AB9DF2]',
    decorGradient1: 'from-[#AB9DF2]/20 to-[#FF6188]/20',
    decorGradient2: 'from-[#FF6188]/15 to-[#AB9DF2]/15',
    shadowColor: 'shadow-[#AB9DF2]/20',
    shadowHover: 'group-hover:shadow-[0_0_60px_rgba(171,157,242,0.25)]',
    badges: [
      { text: 'CURRENT', gradient: 'from-[#AB9DF2]/20 to-[#FF6188]/20', color: 'text-[#AB9DF2]', border: 'border-[#AB9DF2]/30', hasIndicator: true },
      { text: 'GREECE', gradient: 'from-[#A9DC76]/20 to-[#78DCE8]/20', color: 'text-[#A9DC76]', border: 'border-[#A9DC76]/30', hasIndicator: false }
    ],
    bullets: [
      "Master's programme in English focused on developing large-scale genomic data analysis pipelines utilizing Machine Learning techniques and Statistical Modeling.",
      "Performed population genomics analysis on Pool-seq data from wild and farmed gilthead seabream, identifying selection signals linked to domestication."
    ],
    techs: ['Python', 'R', 'Machine Learning', 'Statistical Modeling', 'Bioinformatics'],
    bulletColor: 'text-[#AB9DF2]',
    techColor: 'text-[#AB9DF2]',
    techBorder: 'border-[#AB9DF2]/20 hover:border-[#AB9DF2]/40',
    techHover: 'hover:bg-[#AB9DF2]/5'
  },
  {
    institution: 'University of Macedonia',
    degree: 'BSc in Computer Science - Applied Informatics',
    period: '2018 - 2023',
    location: 'GREECE',
    logo: '/uom.webp',
    url: 'https://www.uom.gr/en',
    emoji: '💻',
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
      { text: 'BACHELOR', gradient: 'from-[#78DCE8]/20 to-[#A9DC76]/20', color: 'text-[#78DCE8]', border: 'border-[#78DCE8]/30', hasIndicator: false },
      { text: 'GREECE', gradient: 'from-[#A9DC76]/20 to-[#78DCE8]/20', color: 'text-[#A9DC76]', border: 'border-[#A9DC76]/30', hasIndicator: false }
    ],
    bullets: [
      "4-year Computer Science degree with strong foundation in Software Engineering, Parallel Computing, Distributed Systems, Databases, Data Science and Machine Learning."
    ],
    techs: ['Software Engineering', 'OOP', 'Parallel Computing', 'Distributed Systems', 'Databases', 'Data Science', 'ML'],
    bulletColor: 'text-[#78DCE8]',
    techColor: 'text-[#78DCE8]',
    techBorder: 'border-[#78DCE8]/20 hover:border-[#78DCE8]/40',
    techHover: 'hover:bg-[#78DCE8]/5',
    subExperience: {
      logo: '/universityofmaribor.jpeg',
      url: 'https://www.um.si/en/home-page/',
      emoji: '🌍',
      institution: 'University of Maribor',
      degree: 'Erasmus Exchange',
      period: 'Feb 2023 - Jul 2023',
      location: 'SLOVENIA',
      badge: { text: 'ERASMUS', gradient: 'from-[#FFD866]/20 to-[#78DCE8]/20', color: 'text-[#FFD866]', border: 'border-[#FFD866]/30' },
      bullets: [
        "Courses: Information Security, Mobile Development, Software Engineering for AI Systems, Bioinformatics."
      ],
      techs: ['Security', 'Mobile Dev', 'AI Systems', 'Bioinformatics'],
      bulletColor: 'text-[#FFD866]',
      techColor: 'text-[#FFD866]',
      techBorder: 'border-[#FFD866]/20 hover:border-[#FFD866]/40',
      techHover: 'hover:bg-[#FFD866]/5'
    }
  }
];

export default function Education() {
  return (
    <>
      {/* Divider */}
      <div className="relative -my-[18px] z-20">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-[#5C6370]/30"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-[#2D2A2E] px-6 py-2 text-[#AB9DF2] font-mono text-sm border border-[#AB9DF2]/30 rounded-full">
            Education
          </span>
        </div>
      </div>

      {/* Education */}
      <div id="education" className="py-24 px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="space-y-0">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="group mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className={`relative bg-gradient-to-br ${edu.gradient} backdrop-blur-3xl p-4 sm:p-6 md:p-8 rounded-2xl md:rounded-[2rem] border ${edu.borderColor} transition-all duration-500 overflow-hidden ${edu.shadowHover} group-hover:scale-[1.01]`}>
                {/* Decorative background */}
                <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${edu.decorGradient1} rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700`}></div>
                <div className={`absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br ${edu.decorGradient2} rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700`}></div>

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
                        href={edu.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <div className={`w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br ${edu.logoGradient} backdrop-blur-xl rounded-2xl border ${edu.borderColor.split(' ')[0]} flex items-center justify-center shadow-lg ${edu.shadowColor} ${edu.logo ? 'overflow-hidden p-3' : ''}`}>
                          {edu.logo ? (
                            <img
                              src={edu.logo}
                              alt={`${edu.institution} Logo`}
                              className="w-full h-full object-contain rounded-xl"
                              loading="lazy"
                            />
                          ) : (
                            <span className="text-3xl sm:text-4xl" aria-hidden="true">{edu.emoji}</span>
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
                        className={`text-[#FCFCFA] font-bold text-xl sm:text-2xl mb-2 ${edu.hoverColor} transition-colors duration-300`}
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15, duration: 0.5 }}
                      >
                        {edu.degree}
                      </motion.h3>
                      <motion.p
                        className={`${edu.textColor} font-mono text-xs sm:text-sm mb-3`}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                      >
                        <a
                          href={edu.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {edu.institution}
                        </a> • {edu.period}
                      </motion.p>
                      <motion.div
                        className="flex items-center gap-2 mb-4"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.25, duration: 0.5 }}
                      >
                        {edu.badges.map((badge, idx) => (
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
                        {edu.bullets.map((bullet, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <span className={`${edu.bulletColor} -mt-0.5 flex-shrink-0`} aria-hidden="true">‣</span>
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
                        {edu.techs.map((tech, i) => (
                          <motion.span
                            key={i}
                            className={`px-3 py-1.5 bg-[#2D2A2E]/60 backdrop-blur-sm ${edu.techColor} text-xs font-mono rounded-lg border ${edu.techBorder} ${edu.techHover} transition-all duration-300`}
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

                      {/* Sub-experience (e.g., Erasmus) */}
                      {edu.subExperience && (
                        <motion.div
                          className="mt-6 relative"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.8, duration: 0.6 }}
                        >
                          {/* Branch line connecting from main logo to Erasmus card - only visible on screens > 1500px */}
                          <div className="hidden 2xl:block absolute pointer-events-none" style={{ left: '-72px', top: '-80px', width: '150px', height: '180px' }}>
                            <svg width="150" height="180" viewBox="0 0 150 180" fill="none" className="overflow-visible">
                              {/* Vertical line down from logo */}
                              <line x1="0" y1="-30" x2="0" y2="150" stroke="#78DCE8" strokeWidth="2" opacity="0.4" />
                              {/* Curved corner */}
                              <path
                                d="M 0 150 Q 0 165, 15 165"
                                stroke="#78DCE8"
                                strokeWidth="2"
                                fill="none"
                                opacity="0.4"
                              />
                              {/* Horizontal line to the right - connects to middle of Erasmus card */}
                              <line x1="15" y1="165" x2="75" y2="165" stroke="#78DCE8" strokeWidth="2" opacity="0.4" />
                            </svg>
                          </div>

                          {/* Erasmus card with slightly darker background */}
                          <motion.div
                            className="bg-[#2D2A2E]/50 backdrop-blur-sm rounded-2xl md:rounded-[2rem] border border-[#78DCE8]/20 p-4 sm:p-6 transition-all duration-500 hover:border-[#78DCE8]/40"
                          >
                            <div className="flex items-start gap-4">
                              <div className="flex-shrink-0">
                                <a
                                  href={edu.subExperience.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="block"
                                >
                                  <div className={`w-12 h-12 bg-[#2D2A2E]/80 backdrop-blur-xl rounded-xl border border-[#78DCE8]/30 flex items-center justify-center shadow-lg shadow-[#78DCE8]/20 ${edu.subExperience.logo ? 'overflow-hidden p-2' : ''}`}>
                                    {edu.subExperience.logo ? (
                                      <img
                                        src={edu.subExperience.logo}
                                        alt={`${edu.subExperience.institution} Logo`}
                                        className="w-full h-full object-contain rounded-lg"
                                        loading="lazy"
                                      />
                                    ) : (
                                      <span className="text-xl" aria-hidden="true">{edu.subExperience.emoji}</span>
                                    )}
                                  </div>
                                </a>
                              </div>
                              <div className="flex-1">
                                <h4 className="text-[#78DCE8] font-bold text-base sm:text-lg mb-2">
                                  {edu.subExperience.degree}
                                </h4>
                                <p className="text-[#78DCE8]/80 font-mono text-xs mb-3">
                                  <a
                                    href={edu.subExperience.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline"
                                  >
                                    {edu.subExperience.institution}
                                  </a> • {edu.subExperience.period}
                                </p>
                                <div className="flex items-center gap-2 mb-3 flex-wrap">
                                  <span className={`px-2 py-0.5 bg-gradient-to-r ${edu.subExperience.badge.gradient} backdrop-blur-sm ${edu.subExperience.badge.color} text-xs font-mono rounded-full border ${edu.subExperience.badge.border}`}>
                                    {edu.subExperience.badge.text}
                                  </span>
                                  <span className="px-2 py-0.5 bg-gradient-to-r from-[#A9DC76]/20 to-[#78DCE8]/20 backdrop-blur-sm text-[#A9DC76] text-xs font-mono rounded-full border border-[#A9DC76]/30">
                                    SLOVENIA
                                  </span>
                                </div>
                                <div className="space-y-2 mb-3">
                                  {edu.subExperience.bullets.map((bullet, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                      <span className="text-[#78DCE8] -mt-0.5 flex-shrink-0" aria-hidden="true">‣</span>
                                      <p className="text-[#FCFCFA]/90 text-sm leading-relaxed">{bullet}</p>
                                    </div>
                                  ))}
                                </div>
                                <div className="flex flex-wrap gap-2">
                                  {edu.subExperience.techs.map((tech, i) => (
                                    <span
                                      key={i}
                                      className="px-2.5 py-1 bg-[#2D2A2E]/60 backdrop-blur-sm text-[#78DCE8] text-xs font-mono rounded-lg border border-[#78DCE8]/20 hover:border-[#78DCE8]/40 hover:bg-[#2D2A2E]/80 transition-all duration-300"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        </motion.div>
                      )}
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
