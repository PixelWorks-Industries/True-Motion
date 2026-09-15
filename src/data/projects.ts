export interface Project {
  slug: string;
  name: string;
  category: string;
  description: string;
  scope: string;
  year: string;
  image: string;
  alt: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'maris',
    name: 'Maris',
    category: 'Hospitality',
    description:
      'A coastal restaurant that needed a website as considered as the room. Identity, menu system, and a site that loads before the phone hits the table.',
    scope: 'Website, Identity',
    year: '2025',
    image:
      'https://images.pexels.com/photos/3848879/pexels-photo-3848879.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Contemporary dining area with green chairs and wooden tables',
    featured: true,
  },
  {
    slug: 'verra',
    name: 'Verra',
    category: 'E-commerce',
    description:
      'A fashion label moving from marketplace to own storefront. Product photography, checkout flow, and a brand that holds up off-platform.',
    scope: 'E-commerce, Identity',
    year: '2025',
    image:
      'https://images.pexels.com/photos/5717978/pexels-photo-5717978.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Product photography for online fashion retail',
  },
  {
    slug: 'northwind',
    name: 'Northwind',
    category: 'SaaS',
    description:
      'A logistics platform whose product was stronger than its presentation. Interface design, marketing site, and a visual system the product team could extend.',
    scope: 'Web, Development',
    year: '2024',
    image:
      'https://images.pexels.com/photos/8408536/pexels-photo-8408536.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Modern smartphone displaying content on a sleek white surface',
  },
  {
    slug: 'groundwork',
    name: 'Groundwork',
    category: 'Branding',
    description:
      'A specialty coffee roaster with good beans and a label that did not match. Identity, packaging system, and a look that works on a shelf.',
    scope: 'Identity, Packaging',
    year: '2024',
    image:
      'https://images.pexels.com/photos/4829083/pexels-photo-4829083.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Branded coffee packages with black and white leaf pattern',
  },
  {
    slug: 'atrium',
    name: 'Atrium',
    category: 'Hospitality',
    description:
      'A boutique hotel with a strong building and a weak website. Booking flow, visual direction, and photography that matches the architecture.',
    scope: 'Website, Creative',
    year: '2025',
    image:
      'https://images.pexels.com/photos/7942132/pexels-photo-7942132.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Spacious modern hotel atrium with sophisticated design',
  },
  {
    slug: 'studio-notes',
    name: 'Studio Notes',
    category: 'Creative',
    description:
      'A motion series exploring type, rhythm, and restraint. Not a client project — a reminder that the tools should stretch.',
    scope: 'Motion, Video',
    year: '2024',
    image:
      'https://images.pexels.com/photos/5833490/pexels-photo-5833490.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Abstract black and white architectural concrete structure',
  },
];
