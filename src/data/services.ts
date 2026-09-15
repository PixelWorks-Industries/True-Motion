export interface Service {
  number: string;
  name: string;
  description: string;
  items: string[];
}

export const services: Service[] = [
  {
    number: '01',
    name: 'Digital',
    description:
      'Websites, storefronts, and landing pages designed as brand objects — not templates with a logo dropped in.',
    items: ['Web design', 'Website redesign', 'Landing pages', 'E-commerce', 'Web development'],
  },
  {
    number: '02',
    name: 'Identity',
    description:
      'Logos, systems, and visual language that give a business a consistent face across every surface.',
    items: ['Branding', 'Logo design', 'Visual identity', 'Digital design'],
  },
  {
    number: '03',
    name: 'Motion',
    description:
      'Type, image, and sequence in time. Film, animation, and motion systems that extend the brand beyond the still frame.',
    items: ['Motion design', 'Video', 'Animation'],
  },
  {
    number: '04',
    name: 'Direction',
    description:
      'Creative leadership across the work — from first reference to finished piece. Including projects that do not fit a category.',
    items: ['Creative direction', 'Custom digital work'],
  },
];
