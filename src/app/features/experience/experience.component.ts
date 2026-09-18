import { Component, ElementRef, ViewChild, ViewChildren, QueryList, AfterViewInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="experience" class="experience">
      <div class="container">
        <h2 class="section-title" data-num="02.">{{ lang.t().experience.title }}</h2>

        <div class="timeline-container animate-in" #animEl>
          <div class="timeline-line"></div>
          
          @for (exp of lang.t().data.experiences; track $index) {
            <div class="timeline-item">
              <div class="timeline-dot">
                <ng-container [ngSwitch]="exp.type">
                  <svg *ngSwitchCase="'education'" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
                  <svg *ngSwitchCase="'certification'" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
                  <svg *ngSwitchDefault width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                </ng-container>
              </div>
              
              <div class="card timeline-card">
                <div class="exp-header">
                  <div>
                    <h3 class="exp-role">{{ exp.role }}</h3>
                    <div class="exp-company accent">{{ exp.company }}</div>
                  </div>
                  <div class="exp-period mono">{{ exp.period }}</div>
                </div>
                
                <ul class="exp-desc">
                  @for (desc of exp.description; track $index) {
                    <li>{{ desc }}</li>
                  }
                </ul>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .timeline {
      position: relative;
      padding-left: 40px;

      &::before {
        content: '';
        position: absolute;
        left: 14px;
        top: 10px;
        bottom: 10px;
        width: 2px;
        background: linear-gradient(
          to bottom,
          var(--color-accent) 0%,
          rgba(255, 255, 255, 0.2) 100%
        );
        border-radius: 2px;
      }
    }

    .timeline-item {
      position: relative;
      margin-bottom: 32px;

      &:last-child { margin-bottom: 0; }
    }

    .timeline-dot {
      position: absolute;
      left: -40px;
      top: 24px;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      background: var(--color-surface);
      border: 2px solid var(--color-accent);
      z-index: 1;
    }

    .timeline-card {
      transition: all 0.3s ease;

      &:hover {
        transform: translateX(6px);
        border-color: var(--color-accent);
      }
    }

    .exp-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 16px;
      margin-bottom: 16px;
      flex-wrap: wrap;
    }

    .exp-role {
      font-size: 18px;
      font-weight: 600;
      color: var(--color-text);
      margin-bottom: 4px;
    }

    .exp-company {
      font-size: 15px;
      font-weight: 500;
    }

    .exp-period {
      font-size: 13px;
      color: var(--color-muted);
      white-space: nowrap;
      background: var(--color-accent-dim);
      padding: 4px 10px;
      border-radius: 4px;
      border: 1px solid var(--color-border);
    }

    .exp-desc {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding: 0;

      li {
        position: relative;
        padding-left: 18px;
        font-size: 15px;
        color: var(--color-muted);
        line-height: 1.6;

        &::before {
          content: '▹';
          position: absolute;
          left: 0;
          color: var(--color-accent);
          font-size: 12px;
          top: 2px;
        }
      }
    }

    @media (max-width: 600px) {
      .exp-header { flex-direction: column; }
      .exp-period { align-self: flex-start; }
    }
  `]
})
export class ExperienceComponent implements AfterViewInit {
  readonly lang = inject(LanguageService);
  
  @ViewChild('animEl') animEl!: ElementRef;

  ngAfterViewInit() {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (this.animEl) {
      obs.observe(this.animEl.nativeElement);
    }
  }
}
