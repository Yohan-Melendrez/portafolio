import { Component, AfterViewInit, ElementRef, ViewChild, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROJECTS } from '../../core/data/portfolio.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="projects">
      <div class="container">
        <h2 class="section-title" data-num="04.">Proyectos</h2>

        <!-- Filters -->
        <div class="project-filters animate-in" #animEl>
          @for (filter of filters; track filter.id) {
            <button
              class="filter-btn"
              [class.active]="activeFilter() === filter.id"
              (click)="setFilter(filter.id)">
              {{ filter.label }}
            </button>
          }
        </div>

        <!-- Grid -->
        <div class="projects-grid animate-in" #animEl2>
          @for (project of filteredProjects(); track project.id) {
            <article class="project-card card">
              <!-- Top bar with links -->
              <div class="project-top">
                <div class="project-folder" aria-hidden="true">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                  </svg>
                </div>
                <div class="project-links">
                  @if (project.githubUrl) {
                    <a [href]="project.githubUrl" target="_blank" rel="noopener"
                       aria-label="Ver código en GitHub" class="project-link" title="GitHub">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  }
                  @if (project.demoUrl) {
                    <a [href]="project.demoUrl" target="_blank" rel="noopener"
                       aria-label="Ver demo en vivo" class="project-link" title="Demo">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                    </a>
                  }
                </div>
              </div>

              <!-- Content -->
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-desc">{{ project.description }}</p>

              <!-- Tech badges -->
              <div class="project-tech">
                @for (tech of project.tech; track tech) {
                  <span class="tech-badge">{{ tech }}</span>
                }
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .project-filters {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-bottom: 40px;
    }

    .filter-btn {
      padding: 8px 20px;
      border-radius: 20px;
      font-family: var(--font-mono);
      font-size: 13px;
      cursor: pointer;
      transition: all 0.25s ease;
      background: transparent;
      color: var(--color-muted);
      border: 1px solid var(--color-border);

      &:hover, &.active {
        color: var(--color-accent);
        border-color: var(--color-accent);
        background: var(--color-accent-dim);
      }
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
      gap: 24px;
    }

    .project-card {
      display: flex;
      flex-direction: column;
      gap: 16px;
      min-height: 280px;

      &:hover .project-folder {
        color: var(--color-accent);
        transform: translateY(-4px);
      }
    }

    .project-top {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }

    .project-folder {
      color: var(--color-muted);
      transition: all 0.25s ease;
    }

    .project-links {
      display: flex;
      gap: 12px;
      align-items: center;
    }

    .project-link {
      color: var(--color-muted) !important;
      display: flex;
      align-items: center;
      transition: all 0.2s ease;

      &:hover {
        color: var(--color-accent) !important;
        transform: translateY(-2px);
      }
    }

    .project-title {
      font-size: 20px;
      font-weight: 600;
      color: var(--color-text);
      transition: color 0.2s ease;

      .project-card:hover & { color: var(--color-accent); }
    }

    .project-desc {
      font-size: 14px;
      line-height: 1.7;
      flex: 1;
      white-space: pre-wrap;
    }

    .project-tech {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: auto;
    }

    @media (max-width: 720px) {
      .projects-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ProjectsComponent implements AfterViewInit {
  @ViewChild('animEl')  animEl!:  ElementRef;
  @ViewChild('animEl2') animEl2!: ElementRef;

  allProjects = PROJECTS;
  activeFilter = signal('all');

  filters = [
    { id: 'all',     label: 'Todos' },
    { id: 'angular', label: 'Angular' },
    { id: 'java',    label: 'Java / Spring' },
    { id: 'nodejs',  label: 'Node.js' },
    { id: 'dotnet',  label: '.NET' },
  ];

  filteredProjects = computed(() => {
    const f = this.activeFilter();
    if (f === 'all') return this.allProjects;
    return this.allProjects.filter(p => p.category.includes(f));
  });

  setFilter(id: string) { this.activeFilter.set(id); }

  ngAfterViewInit() {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    obs.observe(this.animEl.nativeElement);
    obs.observe(this.animEl2.nativeElement);
  }
}
