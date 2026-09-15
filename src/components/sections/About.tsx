import { Link } from 'react-router-dom';
import { Reveal } from '@/components/motion/Reveal';
import { MaskedLines } from '@/components/motion/MaskedText';
import { SectionMeta } from '@/components/ui/SectionMeta';

export function About() {
  return (
    <section data-nav-theme="light" className="section-y border-t border-border-custom">
      <div className="container-grid">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
          <div className="md:col-span-4">
            <SectionMeta number="04" label="Studio" className="mb-6" />
            <Reveal delay={80}>
              <h2 className="text-heading text-foreground">Small on purpose</h2>
            </Reveal>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <p className="text-lede text-foreground text-balance">
              <MaskedLines
                lines={[
                  'A focused studio, not an agency',
                  'machine. Fewer layers. Direct talk.',
                  'Work that stays coherent from the',
                  'first conversation to launch.',
                ]}
              />
            </p>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-border-custom pt-8">
              <Reveal delay={80}>
                <p className="text-label text-muted mb-3">Structure</p>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  One team, start to finish. The people making the work are in the room when decisions are made.
                </p>
              </Reveal>
              <Reveal delay={140}>
                <p className="text-label text-muted mb-3">Approach</p>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  Design and development under the same roof, so nothing is lost between the mockup and the build.
                </p>
              </Reveal>
            </div>

            <Reveal delay={180}>
              <Link to="/about" className="mt-10 inline-flex link-line text-sm text-foreground">
                About the studio
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
