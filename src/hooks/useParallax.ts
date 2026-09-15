import { useEffect, useRef } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function useParallax<T extends HTMLElement = HTMLDivElement>(strength = 0.15) {
  const ref = useRef<T>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const element = ref.current;
    if (!element) return;

    let raf = 0;

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = element.getBoundingClientRect();
        const viewportH = window.innerHeight;
        const center = rect.top + rect.height / 2;
        const distance = center - viewportH / 2;
        element.style.transform = `translateY(${distance * strength}px)`;
      });
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
    };
  }, [strength, reduced]);

  return ref;
}
