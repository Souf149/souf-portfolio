import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.css',
})
export class ContactSectionComponent {
  @Input({required: true}) title = '';
  @Input({required: true}) description = '';
  @Input({required: true}) email = '';
  @Input({required: true}) phone = '';
  @Input({required: true}) linkedin = '';
  @Input({required: true}) github = '';
  @Input({required: true}) website = '';
}
