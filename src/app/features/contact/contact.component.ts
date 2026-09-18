import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <section id="contact" class="contact-section">
      <div class="container">
        <div class="contact-content reveal" #animEl>
          <div class="contact-text text-center">
            <h2 class="section-title">
              Trabajemos <span class="text-gradient">Juntos</span>
            </h2>
            <p class="section-subtitle mx-auto">
              Actualmente estoy abierto a nuevas oportunidades. Si tienes una
              pregunta, una propuesta, o simplemente quieres saludar, mi bandeja
              de entrada siempre está abierta.
            </p>

            <div class="social-links-lg">
              <a href="mailto:yohan.melendrez24@gmail.com" class="social-btn">
                <span class="btn-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </span>
                <span>yohan.melendrez24@gmail.com</span>
              </a>
              <a href="https://github.com/Yohan-Melendrez" target="_blank" class="social-btn outline">
                <span class="btn-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </span>
                <span>GitHub</span>
              </a>
              <a href="https://linkedin.com/in/yohanmelendrez" target="_blank" class="social-btn outline">
                <span class="btn-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </span>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-section {
      padding: 100px 0;
      position: relative;
    }

    .contact-content {
      max-width: 600px;
      margin: 0 auto;
      padding: 60px 40px;
      background: rgba(255, 255, 255, 0.02);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-lg);
      backdrop-filter: blur(10px);
    }

    .mx-auto {
      margin-left: auto;
      margin-right: auto;
    }

    .social-links-lg {
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin-top: 40px;
    }

    .social-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      padding: 16px;
      border-radius: var(--radius-md);
      background: var(--color-accent);
      color: var(--color-bg);
      font-weight: 600;
      text-decoration: none;
      transition: all 0.3s ease;
      font-size: 16px;

      &.outline {
        background: transparent;
        color: var(--color-text);
        border: 1px solid var(--color-border);

        &:hover {
          border-color: var(--color-text);
          background: rgba(255, 255, 255, 0.05);
        }
      }

      &:hover:not(.outline) {
        transform: translateY(-2px);
        background: var(--color-surface-hover);
        color: var(--color-text);
        border: 1px solid var(--color-border);
      }
    }
  `]
})
export class ContactComponent implements AfterViewInit {
  @ViewChild('animEl') animEl!: ElementRef;

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    if (this.animEl) observer.observe(this.animEl.nativeElement);
  }
}
