import { ActionReducerMap } from '@ngrx/store';
import { NbuCurrencyRate } from '../nbu/nbu-currency-rate.model';
import { nbuRatesReducer } from './nbu-rates/nbu-rates.reducer';

export interface NbuCurrencies {
  interestList: string[];
  selectedDate: Date;
  currentRates: NbuCurrencyRate[];
  needRefresh: boolean;
}

export interface CurrenciesState {
  nbuRates: NbuCurrencies;
}

export const reducers: ActionReducerMap<CurrenciesState> = {
  nbuRates: nbuRatesReducer,
};
