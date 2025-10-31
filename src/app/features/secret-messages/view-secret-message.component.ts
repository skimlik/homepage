import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, mergeMap, Subject, takeUntil } from 'rxjs';
import { BACKEND_URL } from 'src/app/app.constants';

@Component({
  selector: 'kn-view-secret-message',
  templateUrl: 'view-secret-message.component.html',
  styleUrls: ['view-secret-message.component.scss'],
})
export class ViewSecretMessageComponent implements OnInit {
  private _destroy$ = new Subject<void>();
  message: string | null = null;

  constructor(
    @Inject(BACKEND_URL) private backendUrl: string,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id$ = this.route.paramMap.pipe(
      takeUntil(this._destroy$),
      map((pm) => {
        var id = pm.get('messageId');
        return id;
      }),
      filter((pmId) => !!pmId)
    );

    id$
      .pipe(
        mergeMap((id) => {
          return this.http.get<{ secret: string }>(
            `${this.backendUrl}/api/secret/${id}`
          );
        })
      )
      .subscribe(
        (data) => {
          this.message = data.secret;
        },
        (error) => {
          if (error.status === 404) {
            this.message = 'This message does not exist anymore';
          }
        }
      );
  }
}
