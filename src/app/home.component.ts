import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { EMPTY, Observable, catchError } from 'rxjs';
import { BACKEND_URL } from './app.constants';

@Component({
  selector: 'kn-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent implements OnInit {
  guid: Observable<string> = EMPTY;

  constructor(
    private httpClient: HttpClient,
    @Inject(BACKEND_URL) private backendUrl: string
  ) {}

  ngOnInit() {}

  generateGuid(): void {
    this.guid = this.httpClient
      .get<string>(`${this.backendUrl}/api/guid`)
      .pipe(catchError(() => 'Error'));
  }
}
