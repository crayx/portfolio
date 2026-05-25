'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Hook to detect when an element enters the viewport
 * Useful for scroll-triggered animations
 */
export function useReveal() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Unobserve after first reveal
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return {
    ref,
    isVisible,
  };
}
