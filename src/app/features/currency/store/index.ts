import { createFeatureSelector } from "@ngrx/store";
import { CurrenciesState } from "./currency-state";

export const featureName = 'Currencies';

export const currenciesFeatureSelector = createFeatureSelector<CurrenciesState>(featureName);
