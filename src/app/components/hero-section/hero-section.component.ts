import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css',
})
export class HeroSectionComponent {
  @Input({required: true}) eyebrow = '';
  @Input({required: true}) title = '';
  @Input({required: true}) description = '';
  @Input({required: true}) primaryCtaText = '';
  @Input({required: true}) secondaryCtaText = '';
}
