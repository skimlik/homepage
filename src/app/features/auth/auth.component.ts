import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BACKEND_URL } from '../../app.constants';
import { AuthToken } from '../../../core/auth/auth-token';
import { AuthService } from '../../../core/auth/auth.service';
import { catchError, mergeMap, take, tap } from 'rxjs';
import { Location } from '@angular/common';
import { UserInfoService } from '../../../core/auth/user-info.service';

@Component({
  selector: 'kn-auth',
  templateUrl: 'auth.component.html',
  styleUrls: ['auth.component.scss'],
})
export class AuthComponent {
  email: string = '';
  password: string = '';
  error: string = '';

  constructor(
    @Inject(BACKEND_URL) private backendUrl: string,
    private httpClient: HttpClient,
    private authService: AuthService,
    private userInfoService: UserInfoService,
    private location: Location,
  ) {}

  signin(): void {
    this.httpClient
      .post<AuthToken>(`${this.backendUrl}/api/auth/token`, {
        userEmail: this.email,
        password: this.password,
        clientId: 'https://kimlyknet.dev.local',
      })
      .pipe(
        tap((token) => this.authService.setToken(token)),
        mergeMap(() => this.userInfoService.getUserInfo()),
        catchError((err) => {
          this.error = 'Server error, please try again later';
          if (err && err.status === 401) {
            this.error = 'Unauthorized';
          }
          return err;
        }),
        take(1),
      )
      .subscribe(() => this.location.back());
  }
}
