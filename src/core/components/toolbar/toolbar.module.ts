import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ToolbarComponent } from './toolbar.component';
import { LogoComponent } from './logo.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [ToolbarComponent],
  declarations: [ToolbarComponent, LogoComponent],
  providers: [],
})
export class ToolbarModule {
}
