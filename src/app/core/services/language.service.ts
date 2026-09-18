import { Injectable, signal, computed } from '@angular/core';
import { TRANSLATIONS } from '../data/translations';

export type Language = 'es' | 'en';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly langSignal = signal<Language>('es');

  readonly currentLang = this.langSignal.asReadonly();
  
  readonly t = computed(() => TRANSLATIONS[this.langSignal()]);

  toggleLanguage() {
    this.langSignal.update(l => l === 'es' ? 'en' : 'es');
  }
}
