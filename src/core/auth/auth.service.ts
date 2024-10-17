import { Injectable } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.servicce';
import { AuthToken } from './auth-token';
import { AuthTokenStorageKey, UserInfoStorageKey } from './auth.constants';
import { BehaviorSubject } from 'rxjs';
import { UserInfoService } from './user-info.service';

@Injectable()
export class AuthService {
  private _authenticated$ = new BehaviorSubject<boolean>(this.isAuthenticated);

  authenticated$ = this._authenticated$.asObservable();

  constructor(
    private localStorage: LocalStorageService,
    private userInfoService: UserInfoService,
  ) {}

  getToken(): AuthToken | null {
    const json = this.localStorage.getJson<AuthToken>(AuthTokenStorageKey);
    if (!json) {
      return null;
    }
    return json;
  }

  setToken(token: AuthToken): void {
    this.localStorage.setJson(AuthTokenStorageKey, token);
    this._authenticated$.next(this.isAuthenticated);
  }
  get isAuthenticated(): boolean {
    const token = this.getToken();
    return (
      !!token && Date.parse(token.expiration).valueOf() > new Date().valueOf()
    );
  }

  logoff(): void {
    this.localStorage.remove(AuthTokenStorageKey);
    this._authenticated$.next(this.isAuthenticated);
    this.userInfoService.reset();
  }
}
