'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

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
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again later.');
    }
  };

  return (
    <>
      {/* Divider */}
      <div className="relative -my-[18px] z-20">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-[#5C6370]/30"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-[#2D2A2E] px-6 py-2 text-[#A9DC76] font-mono text-sm border border-[#A9DC76]/30 rounded-full">
            Get In Touch
          </span>
        </div>
      </div>

      {/* Contact & Footer Section */}
      <div
        id="contact"
        className="relative py-20 overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Cursor-following glowing orb */}
        <motion.div
          className="absolute pointer-events-none w-96 h-96 rounded-full blur-3xl z-0"
          style={{
            background: 'radial-gradient(circle, rgba(171,157,242,0.4) 0%, rgba(120,220,232,0.2) 50%, transparent 70%)',
            left: 0,
            top: 0,
          }}
          animate={{
            x: mousePosition.x - 192,
            y: mousePosition.y - 192,
            opacity: isHovering ? 0.3 : 0,
          }}
          transition={{
            x: { type: "spring", damping: 25, stiffness: 150, mass: 0.3 },
            y: { type: "spring", damping: 25, stiffness: 150, mass: 0.3 },
            opacity: { duration: 0.4 },
          }}
        />

        <motion.div
          className="max-w-6xl mx-auto px-8 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Email Form - Left Side */}
            <motion.div
              className="md:col-span-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-[#2D2A2E]/60 backdrop-blur-md p-8 rounded-2xl border border-[#5C6370]/20 hover:border-[#A9DC76]/30 transition-all duration-500 h-full">
                <h3 className="text-2xl font-bold text-[#FCFCFA] mb-2 font-mono">Send me an email</h3>
                <p className="text-[#727072] font-mono text-sm mb-6">I&apos;ll get back to you within 24 hours</p>

                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-[#FCFCFA]/60 font-mono text-xs mb-2 uppercase tracking-wider">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full px-4 py-3 bg-[#19181A]/50 text-[#FCFCFA] font-mono text-sm rounded-xl border border-[#5C6370]/30 focus:border-[#A9DC76]/50 focus:outline-none transition-all duration-300 placeholder:text-[#727072]"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-[#FCFCFA]/60 font-mono text-xs mb-2 uppercase tracking-wider">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="w-full px-4 py-3 bg-[#19181A]/50 text-[#FCFCFA] font-mono text-sm rounded-xl border border-[#5C6370]/30 focus:border-[#A9DC76]/50 focus:outline-none transition-all duration-300 placeholder:text-[#727072]"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[#FCFCFA]/60 font-mono text-xs mb-2 uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      required
                      className="w-full px-4 py-3 bg-[#19181A]/50 text-[#FCFCFA] font-mono text-sm rounded-xl border border-[#5C6370]/30 focus:border-[#A9DC76]/50 focus:outline-none transition-all duration-300 resize-none placeholder:text-[#727072]"
                    ></textarea>
                  </div>

                  {status === 'success' && (
                    <div className="p-4 bg-[#A9DC76]/10 border border-[#A9DC76]/30 rounded-xl">
                      <p className="text-[#A9DC76] font-mono text-sm">Message sent successfully! I&apos;ll get back to you soon.</p>
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="p-4 bg-[#FF6188]/10 border border-[#FF6188]/30 rounded-xl">
                      <p className="text-[#FF6188] font-mono text-sm">{errorMessage}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full px-6 py-4 bg-gradient-to-r from-[#A9DC76]/10 to-[#78DCE8]/10 text-[#FCFCFA] font-mono font-medium rounded-xl border border-[#A9DC76]/30 hover:border-[#A9DC76]/60 hover:from-[#A9DC76]/20 hover:to-[#78DCE8]/20 transition-all duration-300 hover:scale-[1.02] cursor-pointer group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    <span className="flex items-center justify-center gap-2">
                      {status === 'loading' ? 'Sending...' : 'Send Message'}
                      {status !== 'loading' && <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>}
                    </span>
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Social Connect - Right Side */}
            <motion.div
              className="md:col-span-1"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="bg-[#2D2A2E]/60 backdrop-blur-md p-8 rounded-2xl border border-[#5C6370]/20 hover:border-[#78DCE8]/30 transition-all duration-500 h-full flex flex-col justify-center">
                <h3 className="text-3xl md:text-4xl font-bold text-[#FCFCFA] mb-3 font-mono">Let&apos;s Connect</h3>
                <p className="text-[#727072] font-mono text-sm md:text-base mb-8">
                  Feel free to reach out for collaborations, opportunities, or just to say hi!
                </p>

                <div className="space-y-4">
                  <a
                    href="https://linkedin.com/in/your-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 px-6 py-4 bg-[#19181A]/50 hover:bg-[#0A66C2]/10 text-[#FCFCFA] font-mono rounded-xl border border-[#5C6370]/30 hover:border-[#0A66C2]/50 transition-all duration-300 hover:scale-[1.03] cursor-pointer"
                  >
                    <div className="w-12 h-12 flex items-center justify-center bg-[#0A66C2]/20 rounded-lg group-hover:bg-[#0A66C2]/30 transition-colors duration-300">
                      <svg className="w-7 h-7 fill-current text-[#0A66C2]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-[#FCFCFA] font-semibold text-base group-hover:text-[#0A66C2] transition-colors duration-300">LinkedIn</div>
                      <div className="text-[#727072] text-xs">Connect professionally</div>
                    </div>
                    <svg className="w-5 h-5 text-[#727072] group-hover:text-[#0A66C2] group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>

                  <a
                    href="https://github.com/AlexMitsis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 px-6 py-4 bg-[#19181A]/50 hover:bg-[#FCFCFA]/10 text-[#FCFCFA] font-mono rounded-xl border border-[#5C6370]/30 hover:border-[#FCFCFA]/50 transition-all duration-300 hover:scale-[1.03] cursor-pointer"
                  >
                    <div className="w-12 h-12 flex items-center justify-center bg-[#FCFCFA]/10 rounded-lg group-hover:bg-[#FCFCFA]/20 transition-colors duration-300">
                      <svg className="w-7 h-7 fill-current text-[#FCFCFA]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-[#FCFCFA] font-semibold text-base">GitHub</div>
                      <div className="text-[#727072] text-xs">Check out my work</div>
                    </div>
                    <svg className="w-5 h-5 text-[#727072] group-hover:text-[#FCFCFA] group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Copyright - Outside the box */}
          <div className="text-center">
            <p className="text-[#727072] font-mono text-xs">
              Made by <span className="text-[#AB9DF2]">Alex Mitsis</span> © {new Date().getFullYear()} • All rights reserved
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
}
