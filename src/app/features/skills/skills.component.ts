import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SKILLS } from '../../core/data/portfolio.data';
import { Skill } from '../../core/models/portfolio.models';

type Category = 'all' | 'frontend' | 'backend' | 'database' | 'devops';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="skills">
      <div class="container">
        <h2 class="section-title" data-num="02.">Habilidades</h2>

        <div class="skills-categories animate-in" #animEl>
          @for (cat of categories; track cat.id) {
            <button
              class="cat-btn"
              [class.active]="activeCategory === cat.id"
              (click)="setCategory(cat.id)">
              {{ cat.label }}
            </button>
          }
        </div>

        <div class="skills-grid animate-in" #animEl2>
          @for (skill of filteredSkills; track skill.name) {
            <div class="skill-card" [title]="skill.name">
              <img [src]="skill.icon" [alt]="skill.name + ' logo'" loading="lazy" class="skill-icon" />
              <span class="skill-name">{{ skill.name }}</span>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .skills-categories {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-bottom: 40px;
    }

    .cat-btn {
      padding: 8px 20px;
      border-radius: 20px;
      font-family: var(--font-mono);
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.25s ease;
      background: transparent;
      color: var(--color-muted);
      border: 1px solid var(--color-border);

      &:hover {
        color: var(--color-accent);
        border-color: var(--color-accent);
        background: var(--color-accent-dim);
      }

      &.active {
        background: var(--color-accent-dim);
        color: var(--color-accent);
        border-color: var(--color-accent);
      }
    }

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
      gap: 20px;
    }

    .skill-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      padding: 24px 16px;
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: 12px;
      cursor: default;
      transition: all 0.25s ease;

      &:hover {
        border-color: var(--color-text);
        background: var(--color-surface-hover);
        transform: translateY(-4px);

        .skill-name { color: var(--color-accent); }
      }
    }

    .skill-icon {
      width: 44px;
      height: 44px;
      object-fit: contain;
      filter: brightness(0.9);
      transition: filter 0.25s ease;

      .skill-card:hover & { filter: brightness(1.1); }
    }

    .skill-name {
      font-size: 12px;
      font-weight: 500;
      color: var(--color-muted);
      text-align: center;
      transition: color 0.25s ease;
    }

    @media (max-width: 600px) {
      .skills-grid {
        grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
        gap: 14px;
      }
    }
  `]
})
export class SkillsComponent implements AfterViewInit {
  @ViewChild('animEl')  animEl!:  ElementRef;
  @ViewChild('animEl2') animEl2!: ElementRef;

  allSkills = SKILLS;
  activeCategory: Category = 'all';

  categories = [
    { id: 'all' as Category,      label: 'Todos' },
    { id: 'frontend' as Category, label: 'Frontend' },
    { id: 'backend' as Category,  label: 'Backend' },
    { id: 'database' as Category, label: 'Bases de datos' },
    { id: 'devops' as Category,   label: 'DevOps / Tools' },
  ];

  get filteredSkills(): Skill[] {
    if (this.activeCategory === 'all') return this.allSkills;
    return this.allSkills.filter(s => s.category === this.activeCategory);
  }

  setCategory(cat: Category) { this.activeCategory = cat; }

  ngAfterViewInit() {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    obs.observe(this.animEl.nativeElement);
    obs.observe(this.animEl2.nativeElement);
  }
}
