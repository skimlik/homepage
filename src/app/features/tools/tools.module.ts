import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GuidGeneratorComponent } from './guid-generator/guid-generator.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Base64converterComponent } from './base64/base64converter.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { IsAuthenticatedGuard } from '../../../core/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: GuidGeneratorComponent,
  },
  {
    path: 'guid-generator',
    component: GuidGeneratorComponent,
  },
  {
    path: 'base64-converter',
    component: Base64converterComponent,
  },
  {
    path: 'data-protection',
    component: DataProtectionComponent,
    canActivate: [IsAuthenticatedGuard],
  },
];

const toExport = [
  GuidGeneratorComponent,
  Base64converterComponent,
  DataProtectionComponent,
];

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
  declarations: [toExport],
  exports: toExport,
})
export class ToolsModule {}
