import {Component} from '@angular/core';
import {AboutSectionComponent} from './components/about-section/about-section.component';
import {ContactSectionComponent} from './components/contact-section/contact-section.component';
import {ExperienceSectionComponent} from './components/experience-section/experience-section.component';
import {HeroSectionComponent} from './components/hero-section/hero-section.component';
import {ProjectsSectionComponent} from './components/projects-section/projects-section.component';
import {SiteHeaderComponent} from './components/site-header/site-header.component';
import {SkillsSectionComponent} from './components/skills-section/skills-section.component';
import {PROJECTS} from './data/projects';
import {WORK_EXPERIENCE} from './data/work-experience';

@Component({
  selector: 'app-root',
  imports: [
    SiteHeaderComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    ExperienceSectionComponent,
    ProjectsSectionComponent,
    SkillsSectionComponent,
    ContactSectionComponent,
  ],
  template: `
    <main class="site">
      <app-site-header />
      <app-hero-section />
      <app-about-section />
      <app-experience-section [items]="workExperience" />
      <app-projects-section [projects]="projects" />
      <app-skills-section [skills]="skills" />
      <app-contact-section
        [email]="email"
        [phone]="phone"
        [linkedin]="linkedin"
        [github]="github"
      />
    </main>
  `,
  styleUrl: './app.css',
})
export class App {
  readonly projects = PROJECTS;
  readonly workExperience = WORK_EXPERIENCE;

  readonly skills: string[] = [
    'TypeScript',
    'Angular',
    'Node.js',
    'REST APIs',
    'SQL',
    'Git',
    'Testing',
    'UI/UX Collaboration',
  ];

  readonly email = 'hello@souf.dev';
  readonly phone = '+1-555-123-4567';
  readonly linkedin = 'https://www.linkedin.com/in/your-linkedin/';
  readonly github = 'https://github.com/your-github-username';
}
