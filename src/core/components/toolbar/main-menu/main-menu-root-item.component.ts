import { ChangeDetectionStrategy, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kn-root-menu-item',
  templateUrl: 'main-menu-root-item.component.html',
  styleUrls: ['main-menu-root-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class MainMenuRootItemComponent implements OnInit {
  @Input()
  text = 'Menu Item';

  @Input()
  hasSubMenu = true;

  constructor() { }

  ngOnInit(): void { }
}
