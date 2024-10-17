import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from '../services/local-storage.servicce';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { UserInfo } from './user-info';
import { BACKEND_URL } from '../../app/app.constants';
import { UserInfoStorageKey } from './auth.constants';

@Injectable()
export class UserInfoService {
  constructor(
    @Inject(BACKEND_URL) private backendUrl: string,
    private httpClient: HttpClient,
    private localStorage: LocalStorageService,
  ) {}

  private _userInfo$ = new BehaviorSubject<UserInfo | null>(null);

  userInfo$ = this._userInfo$.asObservable();

  getUserInfo(): Observable<UserInfo> {
    return this.httpClient
      .get<UserInfo>(`${this.backendUrl}/api/auth/userInfo`)
      .pipe(
        tap((userInfo) => {
          this.localStorage.setJson(UserInfoStorageKey, userInfo);
          this._userInfo$.next(userInfo);
        }),
      );
  }

  getCachedUserInfo(): UserInfo | null {
    return this.localStorage.getJson<UserInfo>(UserInfoStorageKey);
  }

  toFriendlyName(userInfo: UserInfo | null): string {
    if (!userInfo) {
      return 'unknown';
    }

    return userInfo.lastName || userInfo.firstName
      ? `${userInfo.firstName} ${userInfo.lastName}`
      : userInfo.email;
  }

  reset(): void {
    this.localStorage.remove(UserInfoStorageKey);
    this._userInfo$.next(null);
  }
}
