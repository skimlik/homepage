import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'kn-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ToolbarComponent implements OnInit {
  @Input() title = "Welcome";

  constructor() { }

  ngOnInit() { }
}
