import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnDestroy,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, takeUntil } from 'rxjs';
import { BACKEND_URL } from '../../../app.constants';

@Component({
  selector: 'kn-base-64-converter-component',
  templateUrl: 'base64converter.component.html',
  styleUrls: ['base64converter.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class Base64converterComponent implements OnDestroy {
  private _disposed$ = new Subject<void>();
  convertFrom: string = '';
  convertTo: string = '';

  constructor(
    @Inject(BACKEND_URL) private backendUrl: string,
    private httpClient: HttpClient,
  ) {}

  ngOnDestroy() {
    this._disposed$.next();
    this._disposed$.complete();
  }

  onConvertFrom64() {
    this.httpClient
      .post<{ converted: string }>(`${this.backendUrl}/api/base64/from`, {
        inputText: this.convertTo,
      })
      .pipe(takeUntil(this._disposed$))
      .subscribe(({ converted }) => (this.convertFrom = converted));
  }

  onConvertTo64() {
    this.httpClient
      .post<{ converted: string }>(`${this.backendUrl}/api/base64/to`, {
        inputText: this.convertFrom,
      })
      .pipe(takeUntil(this._disposed$))
      .subscribe(({ converted }) => (this.convertTo = converted));
  }
}
