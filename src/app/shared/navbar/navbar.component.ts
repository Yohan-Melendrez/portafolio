import { Component, inject, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="navbar" [class.scrolled]="isScrolled()">
      <div class="container navbar-container">
        <!-- Logo -->
        <a href="#" class="logo mono">
          Y<span class="accent">M</span>
        </a>

        <!-- Desktop Nav -->
        <nav class="nav-links desktop-only">
          <ol>
            <li><a href="#about">{{ lang.t().nav.about }}</a></li>
            <li><a href="#experience">{{ lang.t().nav.experience }}</a></li>
            <li><a href="#projects">{{ lang.t().nav.projects }}</a></li>
            <li><a href="#contact">{{ lang.t().nav.contact }}</a></li>
          </ol>
          <a [href]="lang.t().hero.cvLink" target="_blank" download class="btn btn-ghost btn-sm">{{ lang.t().hero.btnCV }}</a>
          <button class="lang-btn" (click)="lang.toggleLanguage()">
            {{ lang.currentLang() === 'es' ? 'EN' : 'ES' }}
          </button>
        </nav>

      <!-- Mobile Menu Button -->
        <div class="mobile-actions mobile-only">
          <button class="lang-btn" (click)="lang.toggleLanguage()">
            {{ lang.currentLang() === 'es' ? 'EN' : 'ES' }}
          </button>
          <button 
            class="menu-btn" 
            [class.active]="isMenuOpen()"
            (click)="toggleMenu()"
            aria-label="Menu"
          >
            <div class="hamburger">
              <span></span><span></span><span></span>
            </div>
          </button>
        </div>
      </div>

      <!-- Mobile Sidebar (using nav-links for css) -->
      <nav class="nav-links mobile-only" [class.open]="isMenuOpen()">
        <ol>
          <li><a href="#about" (click)="closeMenu()">{{ lang.t().nav.about }}</a></li>
          <li><a href="#experience" (click)="closeMenu()">{{ lang.t().nav.experience }}</a></li>
          <li><a href="#projects" (click)="closeMenu()">{{ lang.t().nav.projects }}</a></li>
          <li><a href="#contact" (click)="closeMenu()">{{ lang.t().nav.contact }}</a></li>
        </ol>
        <a [href]="lang.t().hero.cvLink" target="_blank" download class="btn btn-primary" (click)="closeMenu()">
          {{ lang.t().hero.btnCV }}
        </a>
      </nav>
      
      <!-- Backdrop -->
      <div 
        class="backdrop" 
        [class.visible]="isMenuOpen()" 
        (click)="closeMenu()"
      ></div>
    </header>
  `,
  styles: [`
    .navbar {
      position: fixed;
      top: 0;
      width: 100%;
      height: var(--nav-height);
      z-index: 50;
      transition: var(--transition);
      display: flex;
      align-items: center;
      background: transparent;

      &.scrolled {
        background: rgba(10, 10, 10, 0.85);
        backdrop-filter: blur(10px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        height: var(--nav-scroll-height);
      }
    }

    .navbar-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }

    .logo {
      font-size: 20px;
      font-weight: 700;
      color: var(--color-text);
      text-decoration: none;
      letter-spacing: 1px;
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 20px;

      ol {
        display: flex;
        gap: 32px;
        list-style: none;
        margin: 0;
        padding: 0;
      }

      li {
        counter-increment: nav-item;
      }

      a {
        color: var(--color-muted);
        text-decoration: none;
        font-size: 14px;
        font-weight: 500;
        font-family: var(--font-mono);
        transition: var(--transition);
        display: flex;
        align-items: center;
        gap: 8px;

        &::before {
          content: '0' counter(nav-item) '.';
          color: var(--color-accent);
          font-size: 12px;
        }

        &:hover {
          color: var(--color-accent) !important;
          background: rgba(255, 255, 255, 0.05);
        }
      }
    }

    .btn-sm {
      padding: 8px 16px;
      font-size: 13px;
    }

    .lang-btn {
      background: transparent;
      border: 1px solid var(--color-border);
      color: var(--color-text);
      padding: 6px 12px;
      border-radius: var(--radius);
      cursor: pointer;
      font-family: var(--font-mono);
      font-size: 12px;
      transition: var(--transition);
      
      &:hover {
        background: var(--color-surface-hover);
        border-color: var(--color-text);
      }
    }

    .mobile-actions {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .desktop-only {
      display: flex;
    }

    .mobile-only {
      display: none;
    }

    .menu-btn {
      background: none;
      border: none;
      cursor: pointer;
      padding: 8px;
      z-index: 1001;

      span {
        display: block;
        width: 24px;
        height: 2px;
        background: var(--color-accent);
        border-radius: 2px;
        transition: all 0.3s ease;
        transform-origin: center;
      }

      &.active {
        span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
      }
    }

    .backdrop {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.7);
      z-index: 999;
      backdrop-filter: blur(4px);
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
      
      &.visible {
        opacity: 1;
        visibility: visible;
      }
    }

    @media (max-width: 768px) {
      .hamburger { display: flex; }

      .nav-links {
        position: fixed;
        top: 0;
        right: -100%;
        width: min(75vw, 320px);
        height: 100vh;
        background: var(--color-surface);
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 24px;
        padding: 48px 24px;
        border-left: 1px solid var(--color-border);
        transition: right 0.3s ease;
        z-index: 1000;
        box-shadow: -10px 0 30px rgba(0, 0, 0, 0.4);

        &.open { right: 0; }

        li { width: 100%; text-align: center; }
      }

      .nav-link {
        flex-direction: column;
        gap: 2px;
        padding: 12px;
        font-size: 15px;
        justify-content: center;
      }

      .nav-cv { margin-left: 0; }
    }
  `]
})
export class NavbarComponent {
  readonly lang = inject(LanguageService);
  
  isScrolled = signal(false);
  isMenuOpen = signal(false);

  navItems = [
    { id: 'about',      label: 'Sobre mí' },
    { id: 'skills',     label: 'Habilidades' },
    { id: 'experience', label: 'Experiencia' },
    { id: 'projects',   label: 'Proyectos' },
    { id: 'contact',    label: 'Contacto' },
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
    if (this.isMenuOpen()) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  closeMenu() {
    this.isMenuOpen.set(false);
    document.body.style.overflow = '';
  }
}
