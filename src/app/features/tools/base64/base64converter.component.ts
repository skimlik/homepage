import { Component } from '@angular/core';

@Component({
  selector: 'app-base-64-converter-component',
  templateUrl: 'base64converter.component.html',
  styleUrls: ['base64converter.component.scss'],
})
export class Base64converterComponent {
  convertFrom: string = '';
  convertTo: string = '';

  onConvertFrom64() {
    this.convertTo = btoa(this.convertFrom);
  }

  onConvertTo64() {
    this.convertFrom = atob(this.convertTo);
  }
}
