import { Component } from '@angular/core';
import { NavbarComponent }    from './shared/navbar/navbar.component';
import { HeroComponent }      from './features/hero/hero.component';
import { AboutComponent }     from './features/about/about.component';
import { SkillsComponent }    from './features/skills/skills.component';
import { ExperienceComponent} from './features/experience/experience.component';
import { ProjectsComponent }  from './features/projects/projects.component';
import { ContactComponent }   from './features/contact/contact.component';
import { FooterComponent }    from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
  ],
  template: `
    <app-navbar />
    <main id="start-of-content">
      <app-hero />
      <app-about />
      <app-skills />
      <app-experience />
      <app-projects />
      <app-contact />
    </main>
    <app-footer />
  `,
  styles: [`
    main { display: block; }
  `]
})
export class App {}
