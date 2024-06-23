import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NbuRatesComponent } from './nbu/nbu-rates.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { featureName } from './store';
import { reducers } from './store/currency-state';
import { EffectsModule } from '@ngrx/effects';
import { NbuRatesEffects } from './store/nbu-rates/nbu-rates.effects';

const routes: Routes = [
  {
    path: '',
    component: NbuRatesComponent,
  },
  {
    path: 'nbu',
    component: NbuRatesComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([NbuRatesEffects]),
    StoreModule.forFeature(featureName, reducers)
  ],
  exports: [],
  declarations: [NbuRatesComponent],
  providers: [],
})
export class CurrencyRatesModule {}
