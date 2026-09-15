import { Reveal } from '@/components/motion/Reveal';
import { MaskedLines } from '@/components/motion/MaskedText';
import { PageIntro } from '@/components/ui/PageIntro';
import { SectionMeta } from '@/components/ui/SectionMeta';
import { CTA } from '@/components/sections/CTA';

const notes = [
  {
    title: 'Direct communication',
    body: 'You talk to the people doing the work. No account layer, no relay chain.',
  },
  {
    title: 'Flexible scope',
    body: 'Projects change. Scope follows the problem, not a package that forces the work into a shape it does not need.',
  },
  {
    title: 'Careful work',
    body: 'Fewer projects, more attention. The goal is work we would stand behind.',
  },
];

export function About() {
  return (
    <>
      <PageIntro number="04" label="Studio" title="Small on purpose" />

      <section className="py-12 md:py-20 border-t border-border-custom">
        <div className="container-grid">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
            <div className="md:col-span-8">
              <p className="text-lede text-foreground text-balance">
                <MaskedLines
                  lines={[
                    'True Motion is a focused creative',
                    'studio — not an agency machine.',
                    'Fewer layers mean direct conversation',
                    'and work that stays coherent from',
                    'first call to launch.',
                  ]}
                />
              </p>
            </div>
            <div className="md:col-span-4 md:flex md:items-end">
              <Reveal delay={200}>
                <p className="text-muted leading-relaxed">
                  Design and development sit under the same roof. The person shaping the work is the person building it. Fewer handoffs. Fewer surprises.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y border-t border-border-custom">
        <div className="container-grid">
          <SectionMeta label="In practice" className="mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {notes.map((note, i) => (
              <Reveal key={note.title} delay={i * 80}>
                <div className="md:px-8 first:md:pl-0 last:md:pr-0 py-8 md:py-0 border-t md:border-t-0 md:border-l border-border-custom first:border-t-0 first:md:border-l-0">
                  <h3 className="font-medium tracking-[-0.02em] text-lg mb-3">{note.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{note.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
