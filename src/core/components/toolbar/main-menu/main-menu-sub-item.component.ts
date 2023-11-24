import { ChangeDetectionStrategy, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kn-sub-menu-item',
  templateUrl: 'main-menu-sub-item.component.html',
  styleUrls: ['main-menu-sub-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class MainMenuSubItemComponent implements OnInit {
  @Input()
  text = 'Menu Item';

  constructor() { }

  ngOnInit(): void { }
}
