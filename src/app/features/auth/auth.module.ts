import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserProfileComponent } from './user-profile.component';
import { AuthenticationGuard } from 'src/core/auth/auth.guard';

const toExport = [AuthComponent, UserProfileComponent];

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
  },
  {
    path: 'login',
    component: AuthComponent,
  },
  {
    path: 'user-profile',
    component: UserProfileComponent,
    canActivate: [AuthenticationGuard],
  },
];

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
  declarations: [toExport],
  exports: toExport,
})
export class AuthModule {}
