import { createAction, props } from '@ngrx/store';
import { NbuCurrencyRate } from '../../nbu/nbu-currency-rate.model';

export const NbuRatesActionTypes = {
  GetCurrentRates: '[NBU Rates] Get current rates',
  CurrentRatesReceived: '[NBU Rates] Current rates received',
  SetCurrentDate: '[NBU Rates] Set current date',
};

export const getCurrentRatesAction = createAction(
  NbuRatesActionTypes.GetCurrentRates
);
export const currentRatesReceivedActions = createAction(
  NbuRatesActionTypes.CurrentRatesReceived,
  props<{ data: NbuCurrencyRate[] }>()
);
export const setCurrentDate = createAction(
  NbuRatesActionTypes.SetCurrentDate,
  props<{ date: Date }>()
);
