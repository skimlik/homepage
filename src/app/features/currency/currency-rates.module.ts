import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NbuRatesComponent } from './nbu/nbu-rates.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: NbuRatesComponent
  },
  {
    path: 'nbu',
    component: NbuRatesComponent
  }
]

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), HttpClientModule],
  exports: [],
  declarations: [NbuRatesComponent],
  providers: [],
})
export class CurrencyRatesModule { }
