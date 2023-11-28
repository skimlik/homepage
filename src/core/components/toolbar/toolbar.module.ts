import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ToolbarComponent } from './toolbar.component';
import { LogoComponent } from './logo.component';
import { RouterModule } from '@angular/router';
import { MainMenuModule } from './main-menu';

@NgModule({
  imports: [CommonModule, RouterModule, MainMenuModule],
  exports: [ToolbarComponent],
  declarations: [
    ToolbarComponent,
    LogoComponent
  ],
  providers: [],
})
export class ToolbarModule {}
