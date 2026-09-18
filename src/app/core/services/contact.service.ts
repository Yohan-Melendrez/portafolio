import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactForm } from '../models/portfolio.models';

@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:5000/api/contact';

  send(form: ContactForm): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(this.apiUrl, form);
  }
}
