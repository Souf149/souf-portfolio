import {Component, Input} from '@angular/core';
import {WorkExperience} from '../../models/work-experience';

@Component({
  selector: 'app-experience-section',
  templateUrl: './experience-section.component.html',
  styleUrl: './experience-section.component.css',
})
export class ExperienceSectionComponent {
  @Input({required: true}) title = '';
  @Input({required: true}) description = '';
  @Input({required: true}) items: WorkExperience[] = [];
}
