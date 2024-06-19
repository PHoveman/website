import { Component } from '@angular/core';
import { HeaderCardComponent } from '../../components/header-card/header-card.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CardComponent } from '../../components/card/card.component';
import { RouteChangeButtonComponent } from '../../components/route-change-button/route-change-button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderCardComponent, FooterComponent, CardComponent, RouteChangeButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
