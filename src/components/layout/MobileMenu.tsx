import { Link } from 'react-router-dom';
import { Wordmark } from '@/components/ui/Wordmark';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  links: { label: string; path: string }[];
}

export function MobileMenu({ open, onClose, links }: MobileMenuProps) {
  const reduced = useReducedMotion();
  const items = [...links, { label: 'Contact', path: '/contact' }];

  return (
    <div
      className="fixed inset-0 z-[60] md:hidden"
      style={{
        pointerEvents: open ? 'auto' : 'none',
        visibility: open ? 'visible' : 'hidden',
      }}
      aria-hidden={!open}
    >
      <div
        className="absolute inset-0 bg-dark-bg text-background flex flex-col"
        style={{
          clipPath: open ? 'inset(0 0 0 0)' : 'inset(0 0 100% 0)',
          transition: reduced ? 'none' : 'clip-path 0.55s var(--ease-out)',
        }}
      >
        <div className="container-grid flex items-center justify-between h-[var(--nav-height)] border-b border-background/15">
          <Wordmark inverted />
          <button
            className="text-nav text-background tracking-[0.08em] uppercase"
            onClick={onClose}
            aria-label="Close menu"
          >
            Close
          </button>
        </div>

        <nav className="container-grid flex-1 flex flex-col justify-center py-10">
          {items.map((link, i) => (
            <Link
              key={link.path}
              to={link.path}
              className="flex items-baseline gap-6 py-5 border-b border-background/15"
              style={{
                opacity: open ? 1 : 0,
                transform: open ? 'translateY(0)' : 'translateY(18px)',
                transition: reduced
                  ? 'none'
                  : `opacity 0.45s var(--ease-out) ${0.12 + i * 0.07}s, transform 0.45s var(--ease-out) ${0.12 + i * 0.07}s`,
              }}
            >
              <span className="text-label text-muted w-8">{String(i + 1).padStart(2, '0')}</span>
              <span className="text-[2.35rem] font-medium tracking-[-0.04em] leading-none">
                {link.label}
              </span>
            </Link>
          ))}
        </nav>

        <div
          className="container-grid py-8 border-t border-background/15 flex items-center justify-between"
          style={{
            opacity: open ? 1 : 0,
            transition: reduced ? 'none' : 'opacity 0.4s var(--ease-out) 0.4s',
          }}
        >
          <a href="mailto:hello@truemotion.studio" className="text-sm text-background/70">
            hello@truemotion.studio
          </a>
          <span className="text-label text-muted">Studio</span>
        </div>
      </div>
    </div>
  );
}
