import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ToolbarComponent } from './toolbar.component';
import { LogoComponent } from './logo.component';

@NgModule({
  imports: [CommonModule],
  exports: [ToolbarComponent],
  declarations: [ToolbarComponent, LogoComponent],
  providers: [],
})
export class ToolbarModule {
}
