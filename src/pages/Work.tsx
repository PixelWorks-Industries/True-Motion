import { Link } from 'react-router-dom';
import { projects } from '@/data/projects';
import { Reveal } from '@/components/motion/Reveal';
import { ImageFrame } from '@/components/ui/ImageFrame';
import { PageIntro } from '@/components/ui/PageIntro';
import { ProjectTile } from '@/components/ui/ProjectTile';
import type { Project } from '@/data/projects';

export function Work() {
  const featured = projects.find((p) => p.featured) ?? projects[0];
  const rest = projects.filter((p) => p.slug !== featured.slug);

  return (
    <>
      <PageIntro
        number="01"
        label="Work"
        title="Selected work"
        description="Projects across web, identity, e-commerce, and motion. Each one started with a business and a constraint."
      />

      <section className="pb-20 md:pb-32">
        <div className="container-grid">
          <Link to={`/work/${featured.slug}`} className="group block mb-16 md:mb-24">
            <FeaturedLarge project={featured} />
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
            {rest.map((project, i) => (
              <ProjectTile key={project.slug} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function FeaturedLarge({ project }: { project: Project }) {
  return (
    <div>
      <ImageFrame ratio="16 / 9">
        <img src={project.image} alt={project.alt} loading="lazy" />
      </ImageFrame>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-4 pt-5 border-t border-border-custom">
        <div className="md:col-span-7">
          <Reveal>
            <h2 className="text-heading text-foreground">{project.name}</h2>
          </Reveal>
          <p className="text-muted mt-3 leading-relaxed max-w-md">{project.description}</p>
        </div>
        <div className="md:col-span-4 md:col-start-9 flex md:flex-col md:items-end gap-3 md:gap-2 md:text-right">
          <span className="text-meta">{project.category}</span>
          <span className="text-meta">{project.scope}</span>
          <span className="text-meta">{project.year}</span>
        </div>
      </div>
    </div>
  );
}
