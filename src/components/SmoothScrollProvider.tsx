import React, { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

const SmoothScrollProvider: React.FC<SmoothScrollProviderProps> = ({ children }) => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis with the same configuration as the reference site
    const lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 0.9,
      infinite: false,
      gestureOrientation: 'vertical',
    });

    lenisRef.current = lenis;

    // Animation frame function
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    // Start the animation loop
    requestAnimationFrame(raf);

    // Cleanup function
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScrollProvider;
