'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const skills = [
  { name: 'Python', icon: 'python', color: '#3776AB' },
  { name: 'Java', icon: 'oracle', color: '#f89820' },
  { name: 'JavaScript', icon: 'javascript', color: '#F7DF1E' },
  { name: 'FastAPI', icon: 'fastapi', color: '#009688' },
  { name: 'Django', icon: 'django', color: '#0C4B33' },
  { name: 'Spring Boot', icon: 'spring', color: '#6DB33F' },
  { name: 'Postman', icon: 'postman', color: '#FF6C37' },
  { name: 'PostgreSQL', icon: 'postgresql', color: '#4169E1' },
  { name: 'Git', icon: 'git', color: '#F05032' },
  { name: 'GitHub', icon: 'github', color: '#FFFFFF' },
  { name: 'Docker', icon: 'docker', color: '#2496ED' },
  { name: 'PyTorch', icon: 'pytorch', color: '#EE4C2C' },
];

export default function Skills() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [currentColor, setCurrentColor] = useState<string>('#FC9867'); // Default orange color
  const [randomOffset, setRandomOffset] = useState({ x: 0, y: 0 });

  // Add random ebb and flow movement
  useEffect(() => {
    const interval = setInterval(() => {
      setRandomOffset({
        x: (Math.random() - 0.5) * 30,
        y: (Math.random() - 0.5) * 30,
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    // Don't reset color - keep the last hovered color
  };

  // Get orb background based on hovered tech color
  const getOrbBackground = () => {
    const hexToRgb = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : { r: 252, g: 152, b: 103 };
    };
    const rgb = hexToRgb(currentColor);
    return `radial-gradient(circle, rgba(${rgb.r},${rgb.g},${rgb.b},0.6) 0%, rgba(${rgb.r},${rgb.g},${rgb.b},0.3) 50%, transparent 70%)`;
  };

  return (
    <>
      {/* Divider */}
      <div className="relative -my-[18px] z-20">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-[#5C6370]/30"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-[#2D2A2E] px-6 py-2 text-[#FC9867] font-mono text-sm border border-[#FC9867]/30 rounded-full">
            Tech Stack
          </span>
        </div>
      </div>

      {/* Tech Stack Section - Extended to About Me */}
      <div
        id="skills"
        className="relative py-12 overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Animated background - same as Hero */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2D2A2E] via-[#221F22] to-[#2D2A2E] -z-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-[#AB9DF2]/20 to-[#FC9867]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-[#78DCE8]/20 to-[#A9DC76]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#FFD866]/10 to-[#FF6188]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Cursor-following glowing orb */}
        <motion.div
          className="absolute pointer-events-none w-96 h-96 rounded-full blur-3xl"
          style={{
            zIndex: 5,
            left: 0,
            top: 0,
          }}
          animate={{
            x: mousePosition.x - 192 + randomOffset.x,
            y: mousePosition.y - 192 + randomOffset.y,
            opacity: isHovering ? 0.5 : 0,
            background: getOrbBackground(),
          }}
          transition={{
            x: { type: "spring", damping: 25, stiffness: 150, mass: 0.3 },
            y: { type: "spring", damping: 25, stiffness: 150, mass: 0.3 },
            opacity: { duration: 0.4 },
            background: { duration: 0.6, ease: "easeInOut" },
          }}
        />

        {/* All Skills in One Centered Grid */}
        <motion.div
          className="flex justify-center relative w-full mx-auto px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 md:gap-10 lg:gap-12">
            {skills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                className="group relative flex flex-col items-center justify-center p-8 bg-[#2D2A2E]/40 backdrop-blur-md rounded-xl border border-[#5C6370]/20 hover:border-[#AB9DF2]/40 transition-all duration-300 hover:scale-105 cursor-pointer hover:bg-[#2D2A2E]/60"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onMouseEnter={() => setCurrentColor(skill.color)}
              >
                {/* Tooltip */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#2D2A2E] text-[#FCFCFA] px-3 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none border border-[#AB9DF2]/40 z-10">
                  {skill.name}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#2D2A2E] border-r border-b border-[#AB9DF2]/40 transform rotate-45"></div>
                </div>

                {/* Icon - Colored */}
                <div className="w-16 h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <div className="relative">
                    <img
                      src={`https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${skill.icon}.svg`}
                      alt={skill.name}
                      className="w-14 h-14 transition-all duration-300"
                      style={{
                        filter: `drop-shadow(0 0 12px ${skill.color})`,
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
}
