import { Link } from 'react-router-dom';
import type { Project } from '@/data/projects';
import { ImageFrame } from './ImageFrame';

interface ProjectTileProps {
  project: Project;
  index?: number;
  ratio?: string;
  inverted?: boolean;
}

export function ProjectTile({
  project,
  index = 0,
  ratio = '4 / 3',
  inverted = false,
}: ProjectTileProps) {
  const title = inverted ? 'text-background' : 'text-foreground';

  return (
    <Link to={`/work/${project.slug}`} className="group block">
      <ImageFrame ratio={ratio} delay={index * 80}>
        <img src={project.image} alt={project.alt} loading="lazy" />
      </ImageFrame>
      <div
        className={`mt-4 pt-4 border-t flex items-start justify-between gap-4 ${
          inverted ? 'border-background/15' : 'border-border-custom'
        }`}
      >
        <div>
          <h3 className={`text-[1.15rem] font-medium tracking-[-0.03em] ${title}`}>{project.name}</h3>
          <p className="text-meta mt-1.5">{project.category}</p>
        </div>
        <div className="text-right shrink-0">
          <span className="text-meta block">{project.scope}</span>
          <span className="text-meta block mt-1">{project.year}</span>
        </div>
      </div>
    </Link>
  );
}
