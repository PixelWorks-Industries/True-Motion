import { Link } from 'react-router-dom';
import { type ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'on-dark' | 'ghost-dark';

interface ButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  type?: 'button' | 'submit';
  variant?: Variant;
  className?: string;
  onClick?: () => void;
}

const variantClass: Record<Variant, string> = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  'on-dark': 'btn-on-dark',
  'ghost-dark': 'btn-ghost-dark',
};

export function Button({
  children,
  to,
  href,
  type = 'button',
  variant = 'primary',
  className = '',
  onClick,
}: ButtonProps) {
  const cls = `btn ${variantClass[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={cls} onClick={onClick}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={cls} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={cls} onClick={onClick}>
      {children}
    </button>
  );
}
