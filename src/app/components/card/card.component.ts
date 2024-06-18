import { NgClass } from '@angular/common';
import { Component, InputSignal, input } from '@angular/core';
import { HeaderCardComponent } from '../header-card/header-card.component';

type CardClassTypes = 'list' | 'text' | ''

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgClass, HeaderCardComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  headerText: InputSignal<string> = input.required<string>()
  class: InputSignal<CardClassTypes> = input<CardClassTypes>('')
}
