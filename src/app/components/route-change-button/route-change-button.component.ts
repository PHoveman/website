import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

type RouteType = '/home' | '/about' | '/contact'

@Component({
  selector: 'app-route-change-button',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './route-change-button.component.html',
  styleUrl: './route-change-button.component.scss'
})
export class RouteChangeButtonComponent {
  buttonText = input.required<string>()
  routeTo = input.required<RouteType>()
}
