import { createSelector } from '@ngrx/store';
import { currenciesFeatureSelector } from '..';

export const nbuRatesSelector = createSelector(
  currenciesFeatureSelector,
  (state) => state.nbuRates
);

export const interestListSelector = createSelector(
  nbuRatesSelector,
  (state) => state.interestList
);

export const currentNbuRatesSelector = createSelector(
  nbuRatesSelector,
  (state) => state.currentRates
);

export const currentInterestListRatesSelector = createSelector(
  currentNbuRatesSelector,
  interestListSelector,
  (all, list) => all.filter((c) => list.some((i) => i === c.cc))
);

export const otherListRatesSelector = createSelector(
  currentNbuRatesSelector,
  interestListSelector,
  (all, list) => all.filter((c) => !list.some((i) => i === c.cc))
);

export const needRefreshSelector = createSelector(
  nbuRatesSelector,
  (state) =>
    (state.needRefresh && dateEqual(state.selectedDate, new Date())) ||
    state.currentRates.length === 0
);

function dateEqual(d1: Date, d2: Date): boolean {
  return (
    !!d1 &&
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
}
