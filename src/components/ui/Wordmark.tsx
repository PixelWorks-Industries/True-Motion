import { Link } from 'react-router-dom';

interface WordmarkProps {
  to?: string;
  inverted?: boolean;
  className?: string;
}

export function Wordmark({ to = '/', inverted = false, className = '' }: WordmarkProps) {
  const color = inverted ? 'text-background' : 'text-foreground';

  const mark = (
    <span className={`inline-flex items-baseline gap-2 ${color} ${className}`}>
      <span
        className={`inline-block w-1.5 h-1.5 mb-0.5 ${inverted ? 'bg-background' : 'bg-foreground'}`}
        aria-hidden="true"
      />
      <span className="font-medium tracking-[-0.04em] text-[1.05rem] leading-none">True Motion</span>
    </span>
  );

  if (to) {
    return (
      <Link to={to} aria-label="True Motion home" className="inline-flex items-center">
        {mark}
      </Link>
    );
  }

  return mark;
}
