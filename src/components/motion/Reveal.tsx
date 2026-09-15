import { type ReactNode } from 'react';
import { useInView } from '@/hooks/useInView';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'li' | 'span';
}

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className = '',
  as: Tag = 'div',
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const reduced = useReducedMotion();

  const style = reduced
    ? undefined
    : {
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : `translateY(${y}px)`,
        transition: `opacity 0.7s var(--ease-out) ${delay}ms, transform 0.7s var(--ease-out) ${delay}ms`,
      };

  return (
    <Tag ref={ref as never} className={className} style={style}>
      {children}
    </Tag>
  );
}
