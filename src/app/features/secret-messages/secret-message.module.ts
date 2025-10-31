import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SecretMessageComponent } from './secret-message.component';
import { ViewSecretMessageComponent } from './view-secret-message.component';

const routes: Routes = [
  {
    path: '',
    component: SecretMessageComponent,
  },
  {
    path: ':messageId',
    component: ViewSecretMessageComponent,
  },
];

@NgModule({
  declarations: [SecretMessageComponent, ViewSecretMessageComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routes),
  ],
  exports: [],
})
export class SecretMessageModule {}
