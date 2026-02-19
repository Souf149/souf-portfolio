export interface Project {
  title: string;
  description: string;
  image_url: string;
  github_link: string;
  live_link?: string;
  tags?: string[];
  featured?: boolean;
}
