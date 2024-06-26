import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../../../core/auth/user-info';
import { UserInfoService } from '../../../core/auth/user-info.service';

@Component({
  selector: 'kn-user-profile',
  templateUrl: 'user-profile.component.html',
  styleUrls: ['user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  userInfo: UserInfo | null = null;

  constructor(private userProfile: UserInfoService) {}

  ngOnInit() {
    this.userInfo = this.userProfile.getCachedUserInfo();
  }
}
