import { Component, signal } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { ExperienceCardComponent } from '../../components/experience-card/experience-card.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { RouteChangeButtonComponent } from '../../components/route-change-button/route-change-button.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CardComponent, FooterComponent, ExperienceCardComponent, RouteChangeButtonComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  frontEndSkillsArr = signal<string[]>([
    'HTML5',
    'CSS & SCSS',
    'Typescrpt (v5.1)',
    'Angular (v17)',
    'RxJs',
    'Angular state management (NgXs & NgRx)',
    'Angular libraries',
    'Testing tools (Cypress, Jasmine, Jest)',
    'React',
    'Next.js'
  ])
  backEndSkillsArr = signal<string[]>([
    'Node.js',
    'Nest.js',
    'PostgreSQL',
    'TypeORM',
    'AWS'
  ])
  otherSkillsArr = signal<string[]>([
    'Figma',
    'Adobe illustrator',
    'Versioning (Git, Jira, Bitbucket)'
  ])
}
