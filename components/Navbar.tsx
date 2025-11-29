'use client';

import { motion } from 'framer-motion';

interface NavbarProps {
  activeSection: string;
  scrollY: number;
  showNav: boolean;
}

export default function Navbar({ activeSection, scrollY, showNav }: NavbarProps) {
  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50
          ? 'bg-[#2D2A2E]/80 backdrop-blur-xl py-3'
          : 'bg-transparent py-6'
      }`}
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: showNav ? 0 : -100, opacity: showNav ? 1 : 0 }}
      transition={{ duration: 0.05, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-center">
          {/* Navigation Links - Centered */}
          <div className="flex items-center gap-2">
            {[
              { href: '#about', label: 'About', color: '#78DCE8' },
              { href: '#work-experience', label: 'Work', color: '#AB9DF2' },
              { href: '#education', label: 'Education', color: '#FFD866' },
              { href: '#skills', label: 'Skills', color: '#FC9867' },
              { href: '#projects', label: 'Projects', color: '#FF6188' },
              { href: '#contact', label: 'Contact', color: '#A9DC76' }
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`px-4 py-2 font-mono text-sm rounded-lg transition-all duration-300 ${
                  activeSection === item.href.substring(1)
                    ? 'bg-[#403E41] text-[#FCFCFA] border border-[#5C6370]'
                    : 'text-[#727072] hover:text-[#FCFCFA] hover:bg-[#403E41]/50'
                }`}
                style={{
                  borderColor: activeSection === item.href.substring(1) ? item.color + '40' : 'transparent'
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
