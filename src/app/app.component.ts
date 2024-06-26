import { Component } from '@angular/core';
import { AuthService } from '../core/auth/auth.service';
import { LocalStorageService } from '../core/services/local-storage.servicce';
import { UserInfo } from '../core/auth/user-info';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UserInfoService } from '../core/auth/user-info.service';

@Component({
  selector: 'kn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'homepage';
  authenticated$ = this.authService.authenticated$;
  userInfo$ = this.authenticated$.pipe(
    map((isAuth) => (isAuth ? this.userInfoService.getCachedUserInfo() : null)),
  );
  userName$ = this.userInfo$.pipe(
    map((user) => this.userInfoService.toFriendlyName(user)),
  );

  constructor(
    private authService: AuthService,
    private userInfoService: UserInfoService,
    private router: Router,
  ) {}

  signout(): void {
    this.authService.logoff();
    this.router.navigate(['/']);
  }

  showProfile(): void {}
}
