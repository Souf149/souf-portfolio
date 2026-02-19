import {Component, Input} from '@angular/core';
import {Project} from '../../models/project';

@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.css',
})
export class ProjectsSectionComponent {
  @Input() sectionId = 'projects';
  @Input({required: true}) title = '';
  @Input({required: true}) description = '';
  @Input({required: true}) projects: Project[] = [];
  @Input() enableCollapse = false;

  isExpanded = false;

  toggleExpanded(): void {
    this.isExpanded = !this.isExpanded;
  }
}
