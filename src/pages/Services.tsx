import { services } from '@/data/services';
import { processSteps } from '@/data/process';
import { Reveal } from '@/components/motion/Reveal';
import { PageIntro } from '@/components/ui/PageIntro';
import { SectionMeta } from '@/components/ui/SectionMeta';
import { CTA } from '@/components/sections/CTA';

export function Services() {
  return (
    <>
      <PageIntro
        number="02"
        label="Practice"
        title="Services"
        description="Digital, identity, motion, and direction. They overlap on purpose — most projects use more than one."
      />

      <section className="pb-8 md:pb-12 border-t border-border-custom">
        <div className="container-grid">
          {services.map((service, i) => (
            <Reveal key={service.number} delay={i * 70}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 md:py-12 border-b border-border-custom">
                <div className="md:col-span-1">
                  <span className="text-label text-muted">{service.number}</span>
                </div>
                <div className="md:col-span-4">
                  <h2 className="text-heading" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.25rem)' }}>
                    {service.name}
                  </h2>
                </div>
                <div className="md:col-span-6 md:col-start-7">
                  <p className="text-muted leading-relaxed mb-6">{service.description}</p>
                  <ul>
                    {service.items.map((item) => (
                      <li key={item} className="text-sm py-2 border-b border-border-custom last:border-0">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-y border-t border-border-custom">
        <div className="container-grid">
          <SectionMeta number="03" label="Method" className="mb-6" />
          <Reveal delay={80}>
            <h2 className="text-heading text-foreground mb-12">How the work moves</h2>
          </Reveal>
          <div className="border-t border-border-custom">
            {processSteps.map((step, i) => (
              <Reveal key={step.number} delay={i * 50}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 py-7 md:py-8 border-b border-border-custom">
                  <div className="md:col-span-2">
                    <span className="text-label text-muted">{step.number}</span>
                  </div>
                  <div className="md:col-span-3">
                    <h3 className="font-medium tracking-[-0.03em] text-lg">{step.title}</h3>
                  </div>
                  <div className="md:col-span-6 md:col-start-7">
                    <p className="text-muted leading-relaxed">{step.description}</p>
                  </div>
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
