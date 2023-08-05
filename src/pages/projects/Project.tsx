export default class Project {
  name: string;
  description: string;
  previewImageUrl?: string;

  constructor(name: string, description: string, previewImageUrl?: string) {
    this.name = name;
    this.description = description;
    this.previewImageUrl = previewImageUrl;
  }
}
