import { type ReactNode, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function Layout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const reduced = useReducedMotion();
  const [enterKey, setEnterKey] = useState(pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
    setEnterKey(pathname);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main key={enterKey} className={`flex-1 ${reduced ? '' : 'page-enter'}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
