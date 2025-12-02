'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';

interface Project {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  technologies: string[];
  github: string;
  badge: string;
  badgeColor: string;
  gradient: string;
  icon: string;
}

interface ProjectCarouselEmblaProps {
  projects: Project[];
}

export default function ProjectCarouselEmbla({ projects }: ProjectCarouselEmblaProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div id="projects" className="py-12 relative">
      <div className="embla overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
        <div className="embla__container flex">
          {projects.map((project, idx) => {
            // Merge description with features
            const fullDescription = `${project.description} ${project.features.join(' ')}`;

            return (
              <div key={idx} className="embla__slide flex-[0_0_100%] min-w-0 px-4">
                <div className="flex justify-center py-8">
                  <div className="w-full max-w-2xl bg-[#2D2A2E]/60 backdrop-blur-md rounded-[2rem] border border-[#5C6370]/20 hover:border-[#AB9DF2]/40 transition-all duration-500 shadow-xl hover:shadow-2xl overflow-hidden">
                    {/* Banner Image Placeholder */}
                    <div className="w-full h-64 bg-[#19181A]/50 flex items-center justify-center border-b border-[#5C6370]/20">
                      <span className="text-8xl">{project.icon}</span>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      {/* Title */}
                      <h4 className="text-3xl font-bold text-[#FCFCFA] text-center mb-2 font-mono">
                        {project.title}
                      </h4>

                      {/* Subtitle */}
                      <p className="text-center font-mono text-sm mb-6 text-[#AB9DF2]">
                        {project.subtitle}
                      </p>

                      {/* Badges */}
                      <div className="flex justify-center gap-3 mb-6">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-[#19181A]/50 text-[#78DCE8] text-sm font-mono rounded-full border border-[#78DCE8]/30 hover:border-[#78DCE8]/60 transition-all duration-300 hover:scale-105"
                        >
                          🔗 GitHub
                        </a>
                        <span className={`px-4 py-2 bg-gradient-to-r ${project.badgeColor} text-sm font-mono rounded-full border`}>
                          {project.badge}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-[#FCFCFA]/70 text-base text-center leading-relaxed mb-6">
                        {fullDescription}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 justify-center">
                        {project.technologies.map((tech, techIdx) => (
                          <span
                            key={techIdx}
                            className="px-3 py-1.5 bg-[#19181A]/50 text-[#FCFCFA]/80 text-xs font-mono rounded-lg border border-[#5C6370]/30 hover:border-[#AB9DF2]/40 hover:text-[#FCFCFA] transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation and Indicators */}
      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          onClick={scrollPrev}
          className="p-3 bg-[#2D2A2E]/60 backdrop-blur-md text-[#FCFCFA] rounded-lg border border-[#5C6370]/30 hover:border-[#AB9DF2]/40 transition-all duration-300 hover:scale-105"
        >
          ←
        </button>

        <div className="flex gap-2">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollTo(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === selectedIndex
                  ? 'w-8 bg-[#AB9DF2] shadow-[0_0_8px_rgba(171,157,242,0.4)]'
                  : 'w-2 bg-[#5C6370]/50 hover:bg-[#5C6370]'
              }`}
            />
          ))}
        </div>

        <button
          onClick={scrollNext}
          className="p-3 bg-[#2D2A2E]/60 backdrop-blur-md text-[#FCFCFA] rounded-lg border border-[#5C6370]/30 hover:border-[#AB9DF2]/40 transition-all duration-300 hover:scale-105"
        >
          →
        </button>
      </div>
    </div>
  );
}
