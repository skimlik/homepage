import { ChangeDetectionStrategy, Input } from '@angular/core';
import { Component } from '@angular/core';
import { MainMenuItem } from './models';
import { Router } from '@angular/router';

@Component({
  selector: 'kn-sub-menu-item',
  templateUrl: 'main-menu-sub-item.component.html',
  styleUrls: ['main-menu-sub-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainMenuSubItemComponent {
  @Input()
  item?: MainMenuItem;

  constructor(private _router: Router) {
  }

  onClick() {
    if (this.item?.url) {
      this._router.navigate([this.item.url]);
    }

    if (this.item?.callback) {
      this.item.callback({ target: this.item });
    }
  }
}
