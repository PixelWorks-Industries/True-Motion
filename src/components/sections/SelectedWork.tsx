import { Link } from 'react-router-dom';
import { projects } from '@/data/projects';
import { Reveal } from '@/components/motion/Reveal';
import { ImageFrame } from '@/components/ui/ImageFrame';
import { ProjectTile } from '@/components/ui/ProjectTile';
import { SectionHeader } from './SectionHeader';
import type { Project } from '@/data/projects';

export function SelectedWork() {
  const featured = projects.find((p) => p.featured) ?? projects[0];
  const rest = projects.filter((p) => p.slug !== featured.slug).slice(0, 4);

  return (
    <section className="bg-dark-bg text-background section-y">
      <div className="container-grid">
        <SectionHeader
          number="01"
          label="Work"
          title="Selected work"
          description="A short index of recent projects across web, identity, and motion."
          dark
        />

        <FeaturedProject project={featured} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14 mt-16 md:mt-20">
          {rest.map((project, i) => (
            <ProjectTile key={project.slug} project={project} index={i} inverted />
          ))}
        </div>

        <Reveal delay={80}>
          <div className="mt-14 pt-6 border-t border-background/15">
            <Link to="/work" className="link-line text-sm text-background">
              Full index
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  return (
    <Link to={`/work/${project.slug}`} className="group block">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
        <div className="md:col-span-8">
          <ImageFrame ratio="16 / 10">
            <img src={project.image} alt={project.alt} loading="lazy" />
          </ImageFrame>
        </div>
        <div className="md:col-span-4 flex flex-col justify-end border-t border-background/15 md:border-t-0 pt-6 md:pt-0">
          <Reveal>
            <span className="text-label text-muted">{project.category}</span>
          </Reveal>
          <Reveal delay={80}>
            <h3 className="text-heading text-background mt-4">{project.name}</h3>
          </Reveal>
          <Reveal delay={140}>
            <p className="text-muted mt-5 text-sm leading-relaxed">{project.description}</p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-8 flex items-center gap-4 text-meta">
              <span>{project.scope}</span>
              <span className="h-px w-8 bg-background/20" />
              <span>{project.year}</span>
            </div>
          </Reveal>
        </div>
      </div>
    </Link>
  );
}
