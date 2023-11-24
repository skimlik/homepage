import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { NbuRatesService } from '../../nbu/nbu-rates.service';
import * as fromActions from './nbu-rates.actions';
import { filter, map, mergeMap, switchMap, withLatestFrom } from 'rxjs';
import { CurrenciesState } from '../currency-state';
import { Store, select } from '@ngrx/store';
import { needRefreshSelector } from '.';

@Injectable()
export class NbuRatesEffects {
  loadCurrentRates$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromActions.getCurrentRatesAction),
        withLatestFrom(this.store.pipe(select(needRefreshSelector))),
        filter(([_, needRefresh]) => needRefresh),
        switchMap(() => this.dataService.get()),
        map((data) => fromActions.currentRatesReceivedActions({ data }))
      ),
    { dispatch: true }
  );

  constructor(
    private actions$: Actions,
    private dataService: NbuRatesService,
    private store: Store<CurrenciesState>
  ) {}
}
