import { Component, HostBinding, Input } from '@angular/core';
import { MainMenuItem } from './models';

@Component({
  selector: 'kn-main-menu',
  templateUrl: 'main-menu.component.html',
  styleUrls: ['main-menu.component.scss'],
})
export class MainMenuComponent {
  active = false;

  @Input()
  menuItems: MainMenuItem[] = [];

  @HostBinding('class.active') get isActive() {
    return this.active;
  }

  menuToggleClick(): void {
    this.active = !this.active;
  }
}
