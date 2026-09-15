import { type ReactNode } from 'react';
import { useInView } from '@/hooks/useInView';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface MaskedTextProps {
  children: string;
  className?: string;
  delay?: number;
  lines?: boolean;
}

export function MaskedText({
  children,
  className = '',
  delay = 0,
}: MaskedTextProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const reduced = useReducedMotion();

  const words = children.split(' ');

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-bottom"
          style={{ paddingBottom: reduced ? 0 : '0.12em' }}
        >
          <span
            className="inline-block"
            style={
              reduced
                ? undefined
                : {
                    transform: inView ? 'translateY(0)' : 'translateY(110%)',
                    transition: `transform 0.8s var(--ease-out) ${delay + i * 60}ms`,
                  }
            }
          >
            {word}
            {i < words.length - 1 ? '\u00A0' : ''}
          </span>
        </span>
      ))}
    </span>
  );
}

interface MaskedLinesProps {
  lines: string[];
  className?: string;
  delay?: number;
}

export function MaskedLines({ lines, className = '', delay = 0 }: MaskedLinesProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const reduced = useReducedMotion();

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {lines.map((line, i) => (
        <span
          key={i}
          className="block overflow-hidden"
          style={{ paddingBottom: reduced ? 0 : '0.1em' }}
        >
          <span
            className="inline-block"
            style={
              reduced
                ? undefined
                : {
                    transform: inView ? 'translateY(0)' : 'translateY(110%)',
                    transition: `transform 0.9s var(--ease-out) ${delay + i * 120}ms`,
                  }
            }
          >
            {line}
          </span>
        </span>
      ))}
    </span>
  );
}

export function RevealText({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const reduced = useReducedMotion();

  return (
    <span
      ref={ref}
      className={className}
      style={
        reduced
          ? undefined
          : {
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(16px)',
              transition: `opacity 0.6s var(--ease-out) ${delay}ms, transform 0.6s var(--ease-out) ${delay}ms`,
              display: 'inline-block',
            }
      }
    >
      {children}
    </span>
  );
}
