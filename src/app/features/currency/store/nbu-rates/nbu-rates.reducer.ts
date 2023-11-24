import { createReducer, on } from '@ngrx/store';
import { NbuCurrencies } from '../currency-state';
import * as fromActions from './nbu-rates.actions';

const defaultState: NbuCurrencies = {
  interestList: ['EUR', 'USD', 'UAH', 'RUB', 'GBP'],
  selectedDate: new Date(),
  currentRates: [],
  needRefresh: true,
};

export const nbuRatesReducer = createReducer(
  defaultState,
  on(fromActions.currentRatesReceivedActions, (state, { data }) => ({
    ...state,
    currentRates: [...data],
    needRefresh: false,
  })),
  on(fromActions.setCurrentDate, (state, { date }) => ({
    ...state,
    currentRates: [],
    selectedDate: date,
    needRefresh: true,
  }))
);
