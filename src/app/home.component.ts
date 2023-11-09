import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kn-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit {
  guid = '';

  constructor() { }

  ngOnInit() { }

  generateGuid(): void {
    this.guid = crypto?.randomUUID() ?? 'Error';
  }
}
