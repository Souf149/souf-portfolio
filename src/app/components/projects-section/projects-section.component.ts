import {Component, Input} from '@angular/core';
import {Project} from '../../models/project';

@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.css',
})
export class ProjectsSectionComponent {
  @Input({required: true}) projects: Project[] = [];
}
