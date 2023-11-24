import {
  Component,
  DEFAULT_CURRENCY_CODE,
  Inject,
  OnInit,
} from '@angular/core';
import { CurrenciesState } from '../store/currency-state';
import { Store, select } from '@ngrx/store';
import {
  currentInterestListRatesSelector,
  otherListRatesSelector,
} from '../store/nbu-rates';
import { getCurrentRatesAction } from '../store/nbu-rates/nbu-rates.actions';
import { map } from 'rxjs/operators';
import { NbuCurrencyRate } from './nbu-currency-rate.model';

@Component({
  selector: 'kn-nbu-rates',
  templateUrl: 'nbu-rates.component.html',
  styleUrls: ['nbu-rates.component.scss'],
})
export class NbuRatesComponent implements OnInit {
  baseCurrency = '';
  mainRates = this._store.pipe(
    select(currentInterestListRatesSelector),
    map((d) => d.sort(this.sortByRateDescending))
  );
  otherRates = this._store.pipe(
    select(otherListRatesSelector),
    map((d) => d.sort(this.sortByRateDescending))
  );

  constructor(
    @Inject(DEFAULT_CURRENCY_CODE) baseCurrency: string,
    private _store: Store<CurrenciesState>
  ) {
    this.baseCurrency = baseCurrency;
  }

  ngOnInit(): void {
    this._store.dispatch(getCurrentRatesAction());
  }

  private sortByRateDescending(
    s1: NbuCurrencyRate,
    s2: NbuCurrencyRate,
    desc: boolean = true
  ): number {
    const order = desc ? -1 : 1;
    if (s1.rate === s2.rate) return 0;
    return s1.rate > s2.rate ? 1 * order : -1 * order; // desc
  }
}
