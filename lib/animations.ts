/**
 * Animation utilities for performance optimization
 * Respects user's prefers-reduced-motion preference
 */

export const shouldReduceMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

export const slideUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export const getAnimationConfig = (reducedMotion: boolean = false) => {
  if (reducedMotion) {
    return {
      initial: "visible",
      animate: "visible",
      transition: { duration: 0 }
    };
  }

  return {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, margin: "-100px" }
  };
};
