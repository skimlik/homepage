import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { BACKEND_URL } from 'src/app/app.constants';

@Component({
  selector: 'kn-secret-message-creator',
  templateUrl: 'secret-message.component.html',
  styleUrls: ['secret-message.component.scss'],
})
export class SecretMessageComponent {
  data: string = '';
  createdId: string | null = null;
  location: string | null = null;
  uiLocation: string | null = null;

  constructor(
    @Inject(BACKEND_URL) private backendUrl: string,
    private http: HttpClient
  ) {}

  onCreate(): void {
    console.log('onCreate called');
    console.log('Backend URL:', this.backendUrl);
    console.log('Data:', this.data);

    const observable = this.http.post(
      `${this.backendUrl}/api/secret`,
      {
        value: this.data,
      },
      {
        observe: 'response',
        responseType: 'text', // Expect text response, not JSON
      }
    );

    console.log('Observable created:', observable);

    observable.subscribe({
      next: (response) => {
        console.log('NEXT CALLBACK - Success - Status:', response.status);
        console.log('Response body:', response.body);
        const location = response.headers.get('location');
        this.location = location;
        this.createdId = response.body;
        this.uiLocation = `${window.location}/${this.createdId}`;
        console.log('Location:', location);
      },
      error: (error) => {
        console.error('ERROR CALLBACK - Error:', error);

        if (error.status === 0) {
          alert(
            'Request succeeded but CORS is blocking the response. Check backend CORS configuration.'
          );
        }
      },
      complete: () => {
        console.log('COMPLETE CALLBACK');
      },
    });

    console.log('Subscribe called');
  }

  onCopyLocation() {
    if (this.uiLocation) {
      navigator.clipboard.writeText(this.uiLocation);
    }
  }
}
