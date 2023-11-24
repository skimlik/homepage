import { ChangeDetectionStrategy, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kn-menu-item',
  templateUrl: 'main-menu-item.component.html',
  styleUrls: ['main-menu-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class MainMenuItemComponent implements OnInit {
  @Input()
  text = 'Menu Item';

  @Input()
  hasSubitems = false;

  constructor() { }

  ngOnInit(): void { }
}
