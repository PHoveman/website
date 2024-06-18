import { Component, input } from '@angular/core';

@Component({
  selector: 'app-header-card',
  standalone: true,
  imports: [],
  templateUrl: './header-card.component.html',
  styleUrl: './header-card.component.scss'
})
export class HeaderCardComponent {
  text = input.required<string>()
}
