import { type ReactNode } from 'react';
import { Reveal } from '@/components/motion/Reveal';
import { SectionMeta } from '@/components/ui/SectionMeta';

interface SectionHeaderProps {
  number?: string;
  label: string;
  title?: ReactNode;
  description?: string;
  dark?: boolean;
}

export function SectionHeader({ number, label, title, description, dark = false }: SectionHeaderProps) {
  const titleClass = dark ? 'text-background' : 'text-foreground';

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12 md:mb-16">
      <div className="md:col-span-7">
        <SectionMeta number={number} label={label} dark={dark} className="mb-6" />
        {title && (
          <Reveal delay={80}>
            <h2 className={`text-heading ${titleClass}`}>{title}</h2>
          </Reveal>
        )}
      </div>
      {description && (
        <div className="md:col-span-4 md:col-start-9 md:flex md:items-end">
          <Reveal delay={140}>
            <p className="text-muted leading-relaxed">{description}</p>
          </Reveal>
        </div>
      )}
    </div>
  );
}
