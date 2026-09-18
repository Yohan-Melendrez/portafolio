import { Component, ElementRef, ViewChild, AfterViewInit, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="hero" class="hero">
      <!-- Animated background grid -->
      <div class="hero-bg-grid" aria-hidden="true"></div>

      <div class="hero-content container">
        <p class="hero-greeting mono animate-in visible" style="color: var(--color-muted);">{{ lang.t().hero.greeting }}</p>

        <h1 class="hero-name animate-in visible" style="transition-delay: 0.1s; margin-top: 10px;">
          {{ lang.t().hero.role }}
        </h1>

        <h2 class="hero-subtitle animate-in visible" style="transition-delay: 0.2s; color: var(--color-muted); font-weight: 400; max-width: 600px; margin-top: 20px;">
          {{ lang.t().hero.subtitle }}
        </h2>

        <div class="hero-ctas animate-in visible" style="transition-delay: 0.4s; margin-top: 40px;">
          <a href="#projects" class="btn btn-primary">
            {{ lang.t().hero.btnProjects }}
          </a>
          <a [href]="lang.t().hero.cvLink" target="_blank" download class="btn btn-ghost">
            {{ lang.t().hero.btnCV }}
          </a>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="scroll-indicator animate-in visible" style="transition-delay: 0.8s" aria-hidden="true">
        <div class="scroll-line"></div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      position: relative;
      overflow: hidden;
    }

    .hero-bg-grid {
      position: absolute;
      inset: 0;
      background-image:
        linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
      background-size: 50px 50px;
      pointer-events: none;
    }

    .hero-content {
      position: relative;
      z-index: 1;
      padding-top: 80px;
      max-width: 900px;
    }

    .hero-greeting {
      font-size: 16px;
      letter-spacing: 2px;
      margin-bottom: 16px;
      display: block;
    }

    .hero-name {
      font-size: clamp(48px, 8vw, 80px);
      font-weight: 700;
      color: var(--color-text);
      margin-bottom: 16px;
      letter-spacing: -1px;
      line-height: 1.05;
    }

    .hero-subtitle {
      font-size: clamp(28px, 5vw, 52px);
      font-weight: 700;
      color: var(--color-muted);
      margin-bottom: 28px;
      min-height: 64px;
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .cursor {
      color: var(--color-accent);
      font-weight: 300;
      animation: blink 1s step-end infinite;

      &.blink {
        animation: blink 1s step-end infinite;
      }
    }

    @keyframes blink {
      0%, 100% { opacity: 1; }
      50%       { opacity: 0; }
    }

    .hero-desc {
      max-width: 580px;
      font-size: 18px;
      line-height: 1.7;
      margin-bottom: 40px;
      color: var(--color-muted);

      strong { color: var(--color-text); }
    }

    .hero-ctas {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
      margin-bottom: 48px;
    }

    .hero-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

    .scroll-indicator {
      position: absolute;
      bottom: 32px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
    }

    .scroll-line {
      width: 1px;
      height: 80px;
      background: linear-gradient(to bottom, var(--color-accent), transparent);
      animation: scrollPulse 2s ease-in-out infinite;
    }

    @keyframes scrollPulse {
      0%, 100% { opacity: 0.3; transform: scaleY(1); }
      50%       { opacity: 1;   transform: scaleY(1.1); }
    }

    @media (max-width: 600px) {
      .hero-ctas { flex-direction: column; }
      .scroll-indicator { display: none; }
    }
  `]
})
export class HeroComponent implements OnInit, OnDestroy {
  readonly lang = inject(LanguageService);

  displayText = '';
  isTyping = true;

  techStack = ['Angular', '.NET / C#', 'Spring Boot', 'Node.js', 'PostgreSQL', 'Docker'];

  private readonly phrases = [
    'Full Stack Developer.',
    'Angular Enthusiast.',
    'Backend Engineer.',
    'Problem Solver.',
  ];

  private phraseIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private timer: ReturnType<typeof setTimeout> | null = null;

  ngOnInit() { this.type(); }
  ngOnDestroy() { if (this.timer) clearTimeout(this.timer); }

  private type() {
    const current = this.phrases[this.phraseIndex];

    if (!this.isDeleting) {
      this.isTyping = true;
      this.displayText = current.substring(0, ++this.charIndex);
      if (this.charIndex === current.length) {
        this.isTyping = false;
        this.timer = setTimeout(() => { this.isDeleting = true; this.type(); }, 2200);
        return;
      }
    } else {
      this.displayText = current.substring(0, --this.charIndex);
      if (this.charIndex === 0) {
        this.isDeleting = false;
        this.phraseIndex = (this.phraseIndex + 1) % this.phrases.length;
      }
    }

    this.timer = setTimeout(() => this.type(), this.isDeleting ? 60 : 100);
  }
}
