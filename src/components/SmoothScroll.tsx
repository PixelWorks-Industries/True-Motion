import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      anchors: true,
      smoothWheel: true,
      lerp: 0.09,
      duration: 1.1,
      wheelMultiplier: 0.9,
      touchMultiplier: 1,
      respectReducedMotion: true,
      stopInertiaOnNavigate: true,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}