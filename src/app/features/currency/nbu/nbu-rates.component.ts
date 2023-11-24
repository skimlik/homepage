import { Component } from '@angular/core';
import { NbuRatesService } from './nbu-rates.service';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'kn-nbu-rates',
  templateUrl: 'nbu-rates.component.html',
  styleUrls: ['nbu-rates.component.scss'],
})
export class NbuRatesComponent {
  private readonly mainCurrencyCodes = ['EUR', 'USD'];

  rates = this._srv.get().pipe(
    map((r) =>
      r.sort((a, b) => {
        if (a?.txt == b?.txt) return 0;
        return a.txt.localeCompare(b.txt, 'uk-UA');
      })
    ),
    shareReplay()
  );

  mainRates = this.rates.pipe(
    map((r) =>
      r.filter((rate) => this.mainCurrencyCodes.some((c) => c === rate.cc))
    )
  );

  otherRates = this.rates.pipe(
    map((r) =>
      r.filter((rate) => !this.mainCurrencyCodes.some((c) => c === rate.cc))
    )
  );

  constructor(private _srv: NbuRatesService) {}
}
