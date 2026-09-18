import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="navbar" [class.scrolled]="isScrolled()">
      <div class="navbar-container">
        <!-- Logo -->
        <a href="#hero" class="logo" aria-label="Ir al inicio">
          <span class="logo-brackets">&lt;</span>
          <span class="logo-text">YM</span>
          <span class="logo-brackets">/&gt;</span>
        </a>

        <!-- Desktop Nav -->
        <ul class="nav-links" [class.open]="menuOpen()">
          @for (item of navItems; track item.id) {
            <li>
              <a [href]="'#' + item.id" (click)="closeMenu()" class="nav-link">
                <span class="nav-num mono accent">0{{ $index + 1 }}.</span>
                {{ item.label }}
              </a>
            </li>
          }
          <li>
            <a href="assets/cv.pdf" download class="btn btn-primary nav-cv">
              Descargar CV
            </a>
          </li>
        </ul>

        <!-- Mobile hamburger -->
        <button
          class="hamburger"
          [class.active]="menuOpen()"
          (click)="toggleMenu()"
          aria-label="Toggle navigation menu"
          [attr.aria-expanded]="menuOpen()">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <!-- Mobile backdrop -->
      @if (menuOpen()) {
        <div class="backdrop" (click)="closeMenu()"></div>
      }
    </nav>
  `,
  styles: [`
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      padding: 20px 0;
      transition: all 0.3s ease;

      &.scrolled {
        background: rgba(5, 5, 5, 0.7);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        padding: 12px 0;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
      }
    }

    .navbar-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 0 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .logo {
      font-family: var(--font-mono);
      font-size: 22px;
      font-weight: 700;
      color: var(--color-accent) !important;
      text-decoration: none;
      letter-spacing: -0.5px;

      .logo-brackets { opacity: 0.6; }
      .logo-text { margin: 0 2px; }

      &:hover { opacity: 0.8; }
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 8px;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .nav-link {
      display: flex;
      align-items: center;
      gap: 5px;
      padding: 8px 12px;
      color: var(--color-text) !important;
      font-size: 13px;
      font-weight: 500;
      border-radius: 4px;
      transition: all 0.2s ease;

      .nav-num {
        font-size: 12px;
      }

      &:hover {
        color: var(--color-accent) !important;
        background: rgba(255, 255, 255, 0.05);
      }
    }

    .nav-cv {
      margin-left: 8px;
      font-size: 13px;
      padding: 10px 20px;
    }

    .hamburger {
      display: none;
      flex-direction: column;
      gap: 5px;
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
      background: rgba(10, 25, 47, 0.7);
      z-index: 999;
      backdrop-filter: blur(4px);
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
  isScrolled = signal(false);
  menuOpen = signal(false);

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

  toggleMenu() { this.menuOpen.update(v => !v); }
  closeMenu()  { this.menuOpen.set(false); }
}
