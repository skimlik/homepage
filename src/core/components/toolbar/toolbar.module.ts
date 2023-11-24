import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ToolbarComponent } from './toolbar.component';
import { LogoComponent } from './logo.component';
import { RouterModule } from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MainMenuRootItemComponent, MainMenuItemComponent } from './main-menu';
import { MainMenuSubItemComponent } from './main-menu/main-menu-sub-item.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [ToolbarComponent],
  declarations: [
    ToolbarComponent,
    LogoComponent,
    MainMenuComponent,
    MainMenuRootItemComponent,
    MainMenuItemComponent,
    MainMenuSubItemComponent,
  ],
  providers: [],
})
export class ToolbarModule {}
