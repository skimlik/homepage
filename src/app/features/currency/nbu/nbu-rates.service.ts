import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NbuCurrencyRate } from './nbu-currency-rate.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NbuRatesService {
  constructor(private httpClient: HttpClient) {}

  get(): Observable<NbuCurrencyRate[]> {
    return this.httpClient.get<NbuCurrencyRate[]>(
      'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'
    );
  }
}
