import { type ReactNode } from 'react';
import { Reveal } from '@/components/motion/Reveal';
import { SectionMeta } from './SectionMeta';

interface PageIntroProps {
  number?: string;
  label: string;
  title: ReactNode;
  description?: ReactNode;
}

export function PageIntro({ number, label, title, description }: PageIntroProps) {
  return (
    <section className="pt-[calc(var(--nav-height)+4.5rem)] md:pt-[calc(var(--nav-height)+6rem)] pb-12 md:pb-16">
      <div className="container-grid">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          <div className="md:col-span-8">
            <SectionMeta number={number} label={label} className="mb-7" />
            <Reveal delay={80}>
              <h1 className="text-display text-foreground">{title}</h1>
            </Reveal>
          </div>
          {description && (
            <div className="md:col-span-4 md:flex md:items-end">
              <Reveal delay={160}>
                <p className="text-muted leading-relaxed md:max-w-sm md:ml-auto md:text-right">
                  {description}
                </p>
              </Reveal>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
