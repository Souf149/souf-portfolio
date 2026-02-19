import {PortfolioConfig} from '../models/portfolio-config';

export const PORTFOLIO_CONFIG: PortfolioConfig = {
  site: {
    brand: 'Souf',
    navigation: {
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
    },
  },
  hero: {
    eyebrow: 'Software Engineer',
    title: 'Building thoughtful products that solve real problems.',
    description:
      'I design and ship full-stack web apps with a focus on performance, clarity, and user experience.',
    primaryCtaText: 'See My Work',
    secondaryCtaText: "Let's Talk",
  },
  about: {
    title: 'About',
    description:
      'I am a developer who enjoys turning ideas into reliable, polished products. I like clean architecture, collaborative workflows, and building tools that users genuinely enjoy.',
  },
  experience: {
    title: 'Work Experience',
    description: 'Roles where I delivered measurable product impact.',
    items: [
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
    ],
  },
  projects: {
    title: 'Featured Projects',
    description: "A few projects I'm proud of.",
    items: [
      {
        title: 'Project One',
        description: 'A dashboard for tracking goals and habits with clear analytics and reminders.',
        image_url: 'https://picsum.photos/seed/project-one/900/560',
        github_link: 'https://github.com/your-username/project-one',
        live_link: 'https://your-project-one-url.com',
        tags: ['Angular', 'TypeScript', 'Firebase'],
      },
      {
        title: 'Project Two',
        description:
          'An e-commerce experience focused on speed, conversion, and simple inventory management.',
        image_url: 'https://picsum.photos/seed/project-two/900/560',
        github_link: 'https://github.com/your-username/project-two',
        live_link: 'https://your-project-two-url.com',
        tags: ['Angular', 'Node.js', 'PostgreSQL'],
      },
      {
        title: 'Project Three',
        description:
          'A collaboration app that helps teams organize tasks and communicate progress in real time.',
        image_url: 'https://picsum.photos/seed/project-three/900/560',
        github_link: 'https://github.com/your-username/project-three',
        live_link: 'https://your-project-three-url.com',
        tags: ['Angular', 'NestJS', 'WebSockets'],
      },
    ],
  },
  skills: {
    title: 'Skills',
    items: ['TypeScript', 'Angular', 'Node.js', 'REST APIs', 'SQL', 'Git', 'Testing', 'UI/UX Collaboration'],
  },
  contact: {
    title: 'Contact',
    description: 'If you are hiring or want to collaborate, reach out.',
    email: 'hello@souf.dev',
    phone: '+1-555-123-4567',
    linkedin: 'https://www.linkedin.com/in/your-linkedin/',
    github: 'https://github.com/your-github-username',
  },
};
