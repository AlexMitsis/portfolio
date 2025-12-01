'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface NavbarProps {
  activeSection: string;
  scrollY: number;
  showNav: boolean;
}

const navItems = [
  { href: '#about', label: 'About', color: '#78DCE8' },
  { href: '#work-experience', label: 'Work', color: '#AB9DF2' },
  { href: '#education', label: 'Education', color: '#FFD866' },
  { href: '#skills', label: 'Skills', color: '#FC9867' },
  { href: '#projects', label: 'Projects', color: '#FF6188' },
  { href: '#contact', label: 'Contact', color: '#A9DC76' }
];

export default function Navbar({ activeSection, scrollY, showNav }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50
          ? 'bg-[#2D2A2E]/95 backdrop-blur-xl py-3'
          : 'bg-[#2D2A2E]/80 backdrop-blur-md py-4'
      }`}
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: showNav ? 0 : -100, opacity: showNav ? 1 : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between md:justify-center">
          {/* Logo/Name - Mobile Only */}
          <div className="md:hidden">
            <a href="#hero" className="flex items-center">
              <img src="/alexmitsis.ico" alt="AM Logo" className="w-8 h-8" />
            </a>
          </div>

          {/* Desktop Navigation Links - Centered */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
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

          {/* Hamburger Menu Button - Mobile Only */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#FCFCFA] hover:text-[#AB9DF2] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#AB9DF2]/50 rounded-lg"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-4 pb-2 space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={handleLinkClick}
                    className={`block px-4 py-3 font-mono text-sm rounded-lg transition-all duration-300 ${
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
