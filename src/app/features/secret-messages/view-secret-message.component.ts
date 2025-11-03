import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meta } from '@angular/platform-browser';
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
    private route: ActivatedRoute,
    private meta: Meta
  ) {
    // Prevent messengers and crawlers from generating previews
    this.meta.addTags([
      // Prevent all social media previews
      { name: 'robots', content: 'noindex, nofollow, noarchive, nosnippet' },
      { name: 'googlebot', content: 'noindex, nofollow, noarchive, nosnippet' },

      // Prevent Twitter/X previews
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: 'Secret Message' },
      {
        name: 'twitter:description',
        content: 'This message can only be viewed once',
      },

      // Prevent Facebook/WhatsApp/Telegram previews
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Secret Message' },
      {
        property: 'og:description',
        content: 'This message can only be viewed once',
      },
      { property: 'og:image', content: '' }, // Empty image to discourage preview

      // Prevent caching
      {
        'http-equiv': 'Cache-Control',
        content: 'no-cache, no-store, must-revalidate',
      },
      { 'http-equiv': 'Pragma', content: 'no-cache' },
      { 'http-equiv': 'Expires', content: '0' },
    ]); 
  }

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
