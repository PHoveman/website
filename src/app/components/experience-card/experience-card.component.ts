import { Component, InputSignal, input } from '@angular/core';

@Component({
  selector: 'app-experience-card',
  standalone: true,
  imports: [],
  templateUrl: './experience-card.component.html',
  styleUrl: './experience-card.component.scss'
})
export class ExperienceCardComponent {
  title: InputSignal<string> = input.required<string>()
  date: InputSignal<string> = input.required<string>()
  description: InputSignal<string> = input.required<string>()
  text: InputSignal<string> = input.required<string>()
}
