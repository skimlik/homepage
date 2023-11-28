import { ChangeDetectionStrategy, Input } from '@angular/core';
import { Component } from '@angular/core';
import { MainMenuItem } from './models';
import { Router } from '@angular/router';

@Component({
  selector: 'kn-menu-item',
  templateUrl: 'main-menu-item.component.html',
  styleUrls: ['main-menu-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainMenuItemComponent {
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

  get hasSubitems(): boolean {
    return !!this.item?.subitems?.length;
  }
}
