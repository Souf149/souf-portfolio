import {WorkExperience} from '../models/work-experience';

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    role: 'Frontend Developer',
    company: 'Your Company',
    period: '2024 - Present',
    location: 'Remote',
    summary: 'Built and maintained customer-facing web apps with Angular and TypeScript.',
    highlights: [
      'Shipped reusable UI components used across multiple products.',
      'Improved page performance and reduced bundle size through optimization.',
      'Collaborated closely with design and backend teams to deliver features end to end.',
    ],
  },
  {
    role: 'Software Engineering Intern',
    company: 'Another Company',
    period: '2023 - 2024',
    location: 'City, Country',
    summary: 'Contributed to internal tools and product features in an agile environment.',
    highlights: [
      'Implemented REST API integrations and user-facing dashboards.',
      'Wrote tests and fixed bugs across frontend and backend codebases.',
      'Documented onboarding and development workflows for the team.',
    ],
  },
];
