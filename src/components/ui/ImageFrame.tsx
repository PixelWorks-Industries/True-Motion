import { type CSSProperties, type ReactNode } from 'react';
import { useInView } from '@/hooks/useInView';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface ImageFrameProps {
  children: ReactNode;
  ratio?: string;
  className?: string;
  delay?: number;
  reveal?: boolean;
}

export function ImageFrame({
  children,
  ratio = '16 / 10',
  className = '',
  delay = 0,
  reveal = true,
}: ImageFrameProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.12 });
  const reduced = useReducedMotion();

  const style: CSSProperties = {
    aspectRatio: ratio,
    ...(reveal && !reduced
      ? {
          clipPath: inView ? 'inset(0 0 0 0)' : 'inset(0 0 100% 0)',
          transition: `clip-path 1s var(--ease-out) ${delay}ms`,
        }
      : {}),
  };

  return (
    <div ref={ref} className={`img-frame ${className}`} style={style}>
      {children}
    </div>
  );
}
