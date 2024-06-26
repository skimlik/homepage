import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserProfileComponent } from './user-profile.component';

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
  },
];

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
  declarations: [toExport],
  exports: toExport,
})
export class AuthModule {}
