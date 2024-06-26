import { Inject, Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { BACKEND_URL } from '../../app/app.constants';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import {
  AuthorizationHeaderName,
  AuthorizationScheme,
} from '../auth/auth.constants';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    @Inject(BACKEND_URL) private backendUrl: string,
    private authService: AuthService,
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    if (!req.url.toLowerCase().startsWith(this.backendUrl.toLowerCase())) {
      return next.handle(req);
    }

    let headers = req.headers.set('Content-Type', 'application/json');
    if (this.authService.isAuthenticated) {
      const token = this.authService.getToken();
      headers = headers.append(
        AuthorizationHeaderName,
        `${AuthorizationScheme} ${token?.token}`,
      );
    }
    const updated = req.clone({ headers });
    return next.handle(updated);
  }
}
