import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrl: './site-header.component.css',
})
export class SiteHeaderComponent {
  @Input({required: true}) brand = '';
  @Input({required: true}) experienceLabel = '';
  @Input({required: true}) projectsLabel = '';
  @Input({required: true}) skillsLabel = '';
  @Input({required: true}) contactLabel = '';
}
