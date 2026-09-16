import { Reveal } from '@/components/motion/Reveal';
import { MaskedLines } from '@/components/motion/MaskedText';
import { Button } from '@/components/ui/Button';
import { SectionMeta } from '@/components/ui/SectionMeta';

export function CTA() {
  return (
    <section data-nav-theme="dark" className="bg-dark-bg text-background section-y">
      <div className="container-grid">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-8">
            <SectionMeta number="05" label="Contact" dark className="mb-8" />
            <h2 className="text-display text-background max-w-[14ch]">
              <MaskedLines lines={['If the work', 'needs to hold', 'start here.']} />
            </h2>
          </div>
          <div className="md:col-span-4 md:flex md:flex-col md:justify-end">
            <Reveal delay={200}>
              <p className="text-muted leading-relaxed">
                Send the brief. If it is a fit, we will talk about direction, scope, and how to begin.
              </p>
            </Reveal>
            <Reveal delay={280}>
              <div className="mt-8">
                <Button to="/contact" variant="on-dark">
                  Start a project
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
