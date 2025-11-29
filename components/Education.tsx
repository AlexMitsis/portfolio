'use client';

import { motion } from 'framer-motion';

const educationData = [
  {
    institution: 'Aristotle University of Thessaloniki',
    degree: 'MSc in Applied Bioinformatics',
    period: 'Oct 2023 - Present',
    location: 'GREECE',
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
    institution: 'University of Maribor',
    degree: 'Erasmus Exchange - Computer Science',
    period: 'Feb 2023 - Jul 2023',
    location: 'SLOVENIA',
    emoji: '🌍',
    gradient: 'from-[#FFD866]/5 via-[#2D2A2E]/95 to-[#78DCE8]/5',
    borderColor: 'border-[#FFD866]/20 hover:border-[#FFD866]/40',
    logoGradient: 'from-[#FFD866]/30 via-[#2D2A2E]/70 to-[#78DCE8]/30',
    textColor: 'text-[#FFD866]',
    hoverColor: 'group-hover:text-[#FFD866]',
    decorGradient1: 'from-[#FFD866]/20 to-[#78DCE8]/20',
    decorGradient2: 'from-[#78DCE8]/15 to-[#FFD866]/15',
    shadowColor: 'shadow-[#FFD866]/20',
    shadowHover: 'group-hover:shadow-[0_0_60px_rgba(255,216,102,0.25)]',
    badges: [
      { text: 'ERASMUS', gradient: 'from-[#FFD866]/20 to-[#78DCE8]/20', color: 'text-[#FFD866]', border: 'border-[#FFD866]/30', hasIndicator: false },
      { text: 'SLOVENIA', gradient: 'from-[#A9DC76]/20 to-[#78DCE8]/20', color: 'text-[#A9DC76]', border: 'border-[#A9DC76]/30', hasIndicator: false }
    ],
    bullets: [
      "Courses: Information Security, Mobile Development, Software Engineering for AI Systems, Bioinformatics."
    ],
    techs: ['Security', 'Mobile Dev', 'AI Systems', 'Bioinformatics'],
    bulletColor: 'text-[#FFD866]',
    techColor: 'text-[#FFD866]',
    techBorder: 'border-[#FFD866]/20 hover:border-[#FFD866]/40',
    techHover: 'hover:bg-[#FFD866]/5'
  },
  {
    institution: 'University of Macedonia',
    degree: 'BSc in Computer Science - Applied Informatics',
    period: '2018 - 2023',
    location: 'GREECE',
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
    techHover: 'hover:bg-[#78DCE8]/5'
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
      <div id="education" className="py-24 px-12 md:px-16">
        <div className="space-y-0">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="group mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className={`relative bg-gradient-to-br ${edu.gradient} backdrop-blur-3xl p-8 rounded-[2rem] border ${edu.borderColor} transition-all duration-500 overflow-hidden ${edu.shadowHover} group-hover:scale-[1.01]`}>
                {/* Decorative background */}
                <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${edu.decorGradient1} rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700`}></div>
                <div className={`absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br ${edu.decorGradient2} rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700`}></div>

                <div className="relative z-10">
                  <motion.div
                    className="flex items-start gap-6"
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
                      <div className={`w-24 h-24 bg-gradient-to-br ${edu.logoGradient} backdrop-blur-xl rounded-2xl border ${edu.borderColor.split(' ')[0]} flex items-center justify-center shadow-lg ${edu.shadowColor}`}>
                        <span className="text-4xl">{edu.emoji}</span>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex-1"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1, duration: 0.5 }}
                    >
                      <motion.h3
                        className={`text-[#FCFCFA] font-bold text-2xl mb-2 ${edu.hoverColor} transition-colors duration-300`}
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15, duration: 0.5 }}
                      >
                        {edu.degree}
                      </motion.h3>
                      <motion.p
                        className={`${edu.textColor} font-mono text-sm mb-3`}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                      >
                        {edu.institution} • {edu.period}
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
                            <span className={`${edu.bulletColor} -mt-0.5 flex-shrink-0`}>→</span>
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
