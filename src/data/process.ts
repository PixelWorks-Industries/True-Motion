export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Brief',
    description:
      'The business, the constraint, and what the finished piece has to do. We start with the problem, not a mood board.',
  },
  {
    number: '02',
    title: 'Direction',
    description:
      'Structure, visual language, and scope. Decisions on paper before anything is built.',
  },
  {
    number: '03',
    title: 'Make',
    description:
      'Design and development together, so the result feels authored rather than assembled.',
  },
  {
    number: '04',
    title: 'Refine',
    description:
      'Edit, test, and remove anything that is not earning its place.',
  },
  {
    number: '05',
    title: 'Release',
    description:
      'Launch, delivery, and whatever the next chapter needs.',
  },
];
