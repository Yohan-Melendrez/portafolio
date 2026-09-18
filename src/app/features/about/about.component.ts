import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="about">
      <div class="container">
        <h2 class="section-title" data-num="01.">{{ lang.t().about.title }}</h2>

        <div class="about-grid animate-in" #animEl>
          <!-- Text -->
          <div class="about-text">
            <p [innerHTML]="lang.t().about.p1"></p>
            <p [innerHTML]="lang.t().about.p2"></p>
            <p [innerHTML]="lang.t().about.p3"></p>

            <div class="about-highlights">
              <!-- Item 1 -->
              <div class="highlight-item">
                <span class="highlight-icon accent">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                </span>
                <div>
                  <strong>2+</strong>
                  <span class="muted">{{ lang.t().about.exp }}</span>
                </div>
              </div>
              <!-- Item 2 -->
              <div class="highlight-item">
                <span class="highlight-icon accent">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                </span>
                <div>
                  <strong>4</strong>
                  <span class="muted">{{ lang.t().about.proj }}</span>
                </div>
              </div>
              <!-- Item 3 -->
              <div class="highlight-item">
                <span class="highlight-icon accent">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
                </span>
                <div>
                  <strong>10+</strong>
                  <span class="muted">{{ lang.t().about.tech }}</span>
                </div>
              </div>
              <!-- Item 4 -->
              <div class="highlight-item">
                <span class="highlight-icon accent">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
                </span>
                <div>
                  <strong>EGEL</strong>
                  <span class="muted">{{ lang.t().about.egel }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Avatar -->
          <div class="about-avatar">
            <div class="avatar-wrapper">
              <img
                src="profile.jpeg"
                alt="Foto de perfil de Yohan Meléndrez"
                class="avatar-img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
      align-items: center;
    }

    .about-text {
      p {
        font-size: 16.5px;
        line-height: 1.7;
        margin-bottom: 20px;
        color: var(--color-muted);
      }

      strong {
        color: var(--color-text);
        font-weight: 500;
      }
    }

    .about-highlights {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 24px;
      margin-top: 40px;
    }

    .highlight-item {
      display: flex;
      align-items: center;
      gap: 16px;

      strong {
        display: block;
        font-size: 24px;
        font-family: var(--font-mono);
        color: var(--color-text);
        line-height: 1;
        margin-bottom: 4px;
      }

      .muted {
        font-size: 13px;
        opacity: 0.8;
      }
    }

    .highlight-icon {
      font-size: 28px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .avatar-wrapper {
      position: relative;
      width: 100%;
      max-width: 320px;
      aspect-ratio: 1 / 1;
      border-radius: var(--radius-lg);
      overflow: hidden;
      border: 1px solid var(--color-border);
      transition: var(--transition);

      &:hover {
        transform: translateY(-8px) scale(1.02);
        border-color: #555555;
        
        .avatar-img {
          transform: scale(1.05);
        }
      }
    }

    .avatar-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      transition: var(--transition);
      background-color: var(--color-surface);
    }

    @media (max-width: 768px) {
      .about-grid {
        grid-template-columns: 1fr;
        gap: 40px;
      }

      .about-highlights {
        grid-template-columns: 1fr;
        gap: 16px;
      }

      .about-avatar {
        order: -1;
      }

      .avatar-wrapper {
        max-width: 250px;
      }
    }

    @media (max-width: 480px) {
      .about-highlights {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class AboutComponent implements AfterViewInit {
  readonly lang = inject(LanguageService);

  @ViewChild('animEl') animEl!: ElementRef;

  ngAfterViewInit() {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    if (this.animEl) {
      obs.observe(this.animEl.nativeElement);
    }
  }
}
