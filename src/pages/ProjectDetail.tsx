import { useParams, Link, Navigate } from 'react-router-dom';
import { projects } from '@/data/projects';
import { Reveal } from '@/components/motion/Reveal';
import { ImageFrame } from '@/components/ui/ImageFrame';
import { ProjectTile } from '@/components/ui/ProjectTile';
import { SectionMeta } from '@/components/ui/SectionMeta';
import { CTA } from '@/components/sections/CTA';

export function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <Navigate to="/work" replace />;

  const otherProjects = projects.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <section className="pt-[calc(var(--nav-height)+4.5rem)] md:pt-[calc(var(--nav-height)+6rem)] pb-10 md:pb-12">
        <div className="container-grid">
          <Reveal>
            <Link to="/work" className="link-line text-sm text-muted hover:text-foreground">
              Index
            </Link>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8">
              <Reveal delay={80}>
                <span className="text-label text-muted">{project.category}</span>
              </Reveal>
              <Reveal delay={120}>
                <h1 className="text-display text-foreground mt-4">{project.name}</h1>
              </Reveal>
            </div>
            <div className="md:col-span-3 md:col-start-10 flex md:flex-col gap-6 md:gap-5 md:items-end md:text-right md:justify-end">
              <Reveal delay={160}>
                <div>
                  <p className="text-label text-muted mb-1.5">Scope</p>
                  <p className="text-sm">{project.scope}</p>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div>
                  <p className="text-label text-muted mb-1.5">Year</p>
                  <p className="text-sm">{project.year}</p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="container-grid">
          <ImageFrame ratio="16 / 9">
            <img src={project.image} alt={project.alt} loading="lazy" />
          </ImageFrame>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-grid">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-3">
              <SectionMeta label="Brief" />
            </div>
            <div className="md:col-span-7 md:col-start-5">
              <Reveal delay={80}>
                <p className="text-lede text-foreground">{project.description}</p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-t border-border-custom">
        <div className="container-grid">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-3">
              <SectionMeta label="Approach" />
            </div>
            <div className="md:col-span-7 md:col-start-5">
              <Reveal delay={80}>
                <p className="text-muted leading-relaxed">
                  The work spanned {project.scope.toLowerCase()}. Direction and production stayed together, so the result reads as one piece rather than a sequence of handoffs.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 border-t border-border-custom">
        <div className="container-grid">
          <SectionMeta label="More work" className="mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {otherProjects.map((p, i) => (
              <ProjectTile key={p.slug} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
