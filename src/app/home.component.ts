import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { EMPTY, Observable, catchError } from 'rxjs';
import { BACKEND_URL } from './app.constants';
import { AuthService } from '../core/auth/auth.service';

@Component({
  selector: 'kn-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent {
  guid: Observable<string> = EMPTY;

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService,
    @Inject(BACKEND_URL) private backendUrl: string,
  ) {}

  generateGuid(): void {
    this.guid = this.httpClient
      .get<string>(`${this.backendUrl}/api/guid`)
      .pipe(catchError(() => 'Error'));
  }

  get isAuthenticated(): boolean {
    return this.authService.isAuthenticated;
  }
}
