import {Component} from '@angular/core';
import {AboutSectionComponent} from './components/about-section/about-section.component';
import {ContactSectionComponent} from './components/contact-section/contact-section.component';
import {ExperienceSectionComponent} from './components/experience-section/experience-section.component';
import {HeroSectionComponent} from './components/hero-section/hero-section.component';
import {ProjectsSectionComponent} from './components/projects-section/projects-section.component';
import {SiteHeaderComponent} from './components/site-header/site-header.component';
import {SkillsSectionComponent} from './components/skills-section/skills-section.component';
import {PORTFOLIO_CONFIG} from './config/portfolio.config';

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
    <app-site-header
      [brand]="config.site.brand"
      [experienceLabel]="config.site.navigation.experience"
      [projectsLabel]="config.site.navigation.projects"
      [skillsLabel]="config.site.navigation.skills"
      [contactLabel]="config.site.navigation.contact"
    />
    <main class="site">
      <app-hero-section
        [eyebrow]="config.hero.eyebrow"
        [title]="config.hero.title"
        [description]="config.hero.description"
        [primaryCtaText]="config.hero.primaryCtaText"
        [secondaryCtaText]="config.hero.secondaryCtaText"
      />
      <app-about-section [title]="config.about.title" [description]="config.about.description" />
      <app-experience-section
        [title]="config.experience.title"
        [description]="config.experience.description"
        [items]="config.experience.items"
      />
      <app-projects-section
        [sectionId]="'projects'"
        [title]="config.projects.title"
        [description]="config.projects.description"
        [projects]="featuredProjects"
      />
      <app-projects-section
        [sectionId]="'other-projects'"
        [title]="'Other Projects'"
        [description]="'Additional projects that showcase my range and experimentation.'"
        [projects]="otherProjects"
        [enableCollapse]="true"
      />
      <app-skills-section [title]="config.skills.title" [skills]="mergedSkills" />
      <app-contact-section
        [title]="config.contact.title"
        [description]="config.contact.description"
        [email]="config.contact.email"
        [phone]="config.contact.phone"
        [linkedin]="config.contact.linkedin"
        [github]="config.contact.github"
        [website]="config.contact.website"
      />
    </main>
  `,
  styleUrl: './app.css',
})
export class App {
  readonly config = PORTFOLIO_CONFIG;
  private readonly hasExplicitFeatured = this.config.projects.items.some((project) => project.featured);
  readonly featuredProjects = this.hasExplicitFeatured
    ? this.config.projects.items.filter((project) => project.featured)
    : this.config.projects.items.slice(0, 4);
  readonly otherProjects = this.hasExplicitFeatured
    ? this.config.projects.items.filter((project) => !project.featured)
    : this.config.projects.items.slice(4);

  readonly mergedSkills = [
    ...new Set([
      ...this.config.skills.items,
      ...this.config.projects.items.flatMap((project) => project.tags ?? []),
    ]),
  ];
}
