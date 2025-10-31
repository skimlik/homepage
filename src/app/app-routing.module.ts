import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'currency',
    loadChildren: () =>
      import('./features/currency/currency-rates.module').then(
        (m) => m.CurrencyRatesModule,
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'tools',
    loadChildren: () =>
      import('./features/tools/tools.module').then((m) => m.ToolsModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
