import { Reveal } from '@/components/motion/Reveal';
import { Button } from '@/components/ui/Button';

export function NotFound() {
  return (
    <section className="pt-[calc(var(--nav-height)+5rem)] pb-20 md:pb-32 min-h-[70vh] flex items-center">
      <div className="container-grid">
        <Reveal>
          <span className="text-label text-muted mb-6 block">404</span>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="text-display text-foreground max-w-[10ch]">This page does not exist.</h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-6 text-muted max-w-md leading-relaxed">
            The link may be broken, or the page may have moved.
          </p>
        </Reveal>
        <Reveal delay={220}>
          <Button to="/" variant="secondary" className="mt-10">
            Back home
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
