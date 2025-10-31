import { HttpClient } from '@angular/common/http';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { BACKEND_URL } from 'src/app/app.constants';

@Component({
  selector: 'kn-data-protection',
  templateUrl: 'data-protection.component.html',
  styleUrls: ['data-protection.component.scss'],
})
export class DataProtectionComponent implements OnInit {
  private _disposed$ = new Subject<void>();

  constructor(
    @Inject(BACKEND_URL) private backendUrl: string,
    private http: HttpClient
  ) {}

  @Input() value: string = '';
  converted: string = '';

  ngOnInit(): void {}

  onEncode() {
    this.http
      .post<{ value: string }>(`${this.backendUrl}/api/dataprotection/encode`, {
        value: this.value,
      })
      .pipe(takeUntil(this._disposed$))
      .subscribe((converted) => (this.converted = converted.value));
  }

  onDecode() {
    this.http
      .post<{ value: string }>(`${this.backendUrl}/api/dataprotection/decode`, {
        value: this.value,
      })
      .pipe(takeUntil(this._disposed$))
      .subscribe((converted) => (this.converted = converted.value));
  }
}
