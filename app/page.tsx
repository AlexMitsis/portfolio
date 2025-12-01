'use client';

import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { debounce } from '@/lib/performance';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WorkExperience from '@/components/WorkExperience';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import About from '@/components/About';
import Footer from '@/components/Footer';

// Lazy load below-the-fold sections for better initial page load
const Projects = dynamic(() => import('@/components/Projects'), {
  loading: () => <div className="min-h-screen" />,
});

const Contact = dynamic(() => import('@/components/Contact'), {
  loading: () => <div className="min-h-screen" />,
});

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollY, setScrollY] = useState(0);
  const [showNav, setShowNav] = useState(true);
  const [mounted, setMounted] = useState(false);
  const prevScrollY = useRef(0);
  const showNavRef = useRef(true);

  useEffect(() => {
    setMounted(true);

    // Track scroll position for active section and navbar visibility
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const sections = ['hero', 'about', 'work-experience', 'education', 'skills', 'projects', 'contact'];
      const scrollPosition = currentScrollY + 100;

      // Update active section
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }

      // Show navbar when scrolling up, hide when scrolling down
      if (currentScrollY < 50) {
        // Always show at top
        if (!showNavRef.current) {
          setShowNav(true);
          showNavRef.current = true;
        }
      } else if (currentScrollY < prevScrollY.current) {
        // Scrolling up - show navbar immediately (no threshold)
        if (!showNavRef.current) {
          setShowNav(true);
          showNavRef.current = true;
        }
      } else if (currentScrollY > prevScrollY.current + 10) {
        // Scrolling down - hide navbar (small threshold to avoid jitter on micro-scrolls)
        if (showNavRef.current) {
          setShowNav(false);
          showNavRef.current = false;
        }
      }

      prevScrollY.current = currentScrollY;
      setScrollY(currentScrollY);
    };

    // Debounce scroll handler for better performance (16ms = ~60fps)
    const debouncedHandleScroll = debounce(handleScroll, 16);

    window.addEventListener('scroll', debouncedHandleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
    };
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-[#2D2A2E] flex items-center justify-center">
        <div className="text-[#78DCE8] font-mono">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#2D2A2E] relative">
      <Navbar activeSection={activeSection} scrollY={scrollY} showNav={showNav} />

      <div className="relative z-20">
        <div className="bg-[#2D2A2E]">
          <div className="space-y-0">
            <Hero />
            <About />
            <WorkExperience />
            <Education />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
