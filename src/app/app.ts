import {Component} from '@angular/core';
import {AboutSectionComponent} from './components/about-section/about-section.component';
import {ContactSectionComponent} from './components/contact-section/contact-section.component';
import {HeroSectionComponent} from './components/hero-section/hero-section.component';
import {ProjectsSectionComponent} from './components/projects-section/projects-section.component';
import {SiteHeaderComponent} from './components/site-header/site-header.component';
import {SkillsSectionComponent} from './components/skills-section/skills-section.component';
import {PROJECTS} from './data/projects';

@Component({
  selector: 'app-root',
  imports: [
    SiteHeaderComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    ProjectsSectionComponent,
    SkillsSectionComponent,
    ContactSectionComponent,
  ],
  template: `
    <main class="site">
      <app-site-header />
      <app-hero-section />
      <app-about-section />
      <app-projects-section [projects]="projects" />
      <app-skills-section [skills]="skills" />
      <app-contact-section [email]="email" />
    </main>
  `,
  styleUrl: './app.css',
})
export class App {
  readonly projects = PROJECTS;

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
}
