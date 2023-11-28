import { NgModule } from '@angular/core';

import { MainMenuComponent } from './main-menu.component';
import { CommonModule } from '@angular/common';
import { MainMenuItemComponent } from './main-menu-item.component';
import { MainMenuRootItemComponent } from './main-menu-root-item.component';
import { MainMenuSubItemComponent } from './main-menu-sub-item.component';
import { RouterModule } from '@angular/router';

const toExport = [
  MainMenuComponent,
  MainMenuItemComponent,
  MainMenuRootItemComponent,
  MainMenuSubItemComponent,
];
@NgModule({
  imports: [CommonModule, RouterModule],
  exports: toExport,
  declarations: [toExport],
  providers: [],
})
export class MainMenuModule {}
