import { ChangeDetectionStrategy, Input } from '@angular/core';
import { Component } from '@angular/core';
import { MainMenuItem } from './models';
import { Router } from '@angular/router';

@Component({
  selector: 'kn-root-menu-item',
  templateUrl: 'main-menu-root-item.component.html',
  styleUrls: ['main-menu-root-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class MainMenuRootItemComponent {
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
