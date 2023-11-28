import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { MainMenuItem } from './main-menu/models';

@Component({
  selector: 'kn-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent implements OnInit {
  @Input() title = 'Welcome';

  constructor() {}

  ngOnInit() {}

  get menuItems(): MainMenuItem[] {
    return [
      {
        title: 'External resources',
        subitems: [
          {
            title: 'Currency rates',
            subitems: [
              {
                title: 'NBU',
                subtitle: 'National bank of Ukraine',
                url: '/currency/nbu',
              },
            ],
          },
        ],
      },
    ];
  }
}
