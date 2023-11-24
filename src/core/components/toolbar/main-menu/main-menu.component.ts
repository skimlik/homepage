import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'kn-main-menu',
  templateUrl: 'main-menu.component.html',
  styleUrls: ['main-menu.component.scss']
})

export class MainMenuComponent implements OnInit {
  active = false;

  @HostBinding('class.active') get isActive() { return this.active; }

  constructor() { }

  ngOnInit(): void { }

  menuToggleClick(): void {
    this.active = !this.active;
  }
}
