import {Project} from '../models/project';

export const PROJECTS: Project[] = [
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
    description: 'An e-commerce experience focused on speed, conversion, and simple inventory management.',
    image_url: 'https://picsum.photos/seed/project-two/900/560',
    github_link: 'https://github.com/your-username/project-two',
    live_link: 'https://your-project-two-url.com',
    tags: ['Angular', 'Node.js', 'PostgreSQL'],
  },
  {
    title: 'Project Three',
    description: 'A collaboration app that helps teams organize tasks and communicate progress in real time.',
    image_url: 'https://picsum.photos/seed/project-three/900/560',
    github_link: 'https://github.com/your-username/project-three',
    live_link: 'https://your-project-three-url.com',
    tags: ['Angular', 'NestJS', 'WebSockets'],
  },
];
