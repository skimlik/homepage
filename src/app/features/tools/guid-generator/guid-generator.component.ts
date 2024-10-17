import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import {
  catchError,
} from 'rxjs';
import { BACKEND_URL } from 'src/app/app.constants';

@Component({
  selector: 'kn-guid-generator-page',
  templateUrl: 'guid-generator.component.html',
  styleUrls: ['guid-generator.component.scss'],
})
export class GuidGeneratorComponent {
  guids: string[] = [];

  constructor(
    @Inject(BACKEND_URL) private backendUrl: string,
    private httpClient: HttpClient,
  ) {}

  append(): void {
    const guid$ = this.httpClient
      .get<string>(`${this.backendUrl}/api/guid`)
      .pipe(catchError(() => 'Error'))
      .subscribe((data) => {
        this.guids.push(data);
      });
  }

  reset(): void {
    this.guids = [];
  }
}
