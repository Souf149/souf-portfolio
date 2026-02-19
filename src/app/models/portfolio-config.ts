import {Project} from './project';
import {WorkExperience} from './work-experience';

export interface PortfolioConfig {
  site: {
    brand: string;
    navigation: {
      experience: string;
      projects: string;
      skills: string;
      contact: string;
    };
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCtaText: string;
    secondaryCtaText: string;
  };
  about: {
    title: string;
    description: string;
  };
  experience: {
    title: string;
    description: string;
    items: WorkExperience[];
  };
  projects: {
    title: string;
    description: string;
    items: Project[];
  };
  skills: {
    title: string;
    items: string[];
  };
  contact: {
    title: string;
    description: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
  };
}
