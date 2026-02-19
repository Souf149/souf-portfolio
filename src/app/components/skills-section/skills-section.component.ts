import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrl: './skills-section.component.css',
})
export class SkillsSectionComponent {
  @Input({required: true}) title = '';
  @Input({required: true}) skills: string[] = [];
  readonly loopRepeatCount = 8;

  get useTwoLines(): boolean {
    return this.skills.length > 20;
  }

  get firstLineBaseSkills(): string[] {
    if (!this.useTwoLines) {
      return this.skills;
    }
    return this.skills.filter((_, index) => index % 2 === 0);
  }

  get secondLineBaseSkills(): string[] {
    if (!this.useTwoLines) {
      return [];
    }
    return this.skills.filter((_, index) => index % 2 !== 0);
  }

  get firstLineSkills(): string[] {
    return this.scrollingSkills(this.firstLineBaseSkills);
  }

  get secondLineSkills(): string[] {
    if (!this.useTwoLines) {
      return [];
    }
    return this.scrollingSkills(this.secondLineBaseSkills);
  }

  private scrollingSkills(items: string[]): string[] {
    const looped: string[] = [];
    for (let i = 0; i < this.loopRepeatCount; i += 1) {
      looped.push(...items);
    }
    return looped;
  }
}
