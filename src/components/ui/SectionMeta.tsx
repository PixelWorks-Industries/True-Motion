import { Reveal } from '@/components/motion/Reveal';

interface SectionMetaProps {
  number?: string;
  label: string;
  dark?: boolean;
  className?: string;
}

export function SectionMeta({ number, label, dark = false, className = '' }: SectionMetaProps) {
  const line = dark ? 'bg-background/20' : 'bg-border-custom';

  return (
    <Reveal>
      <div className={`flex items-center gap-3 ${className}`}>
        {number && <span className="text-label text-muted">{number}</span>}
        {number && <span className={`h-px w-8 ${line}`} />}
        <span className="text-label text-muted">{label}</span>
      </div>
    </Reveal>
  );
}
