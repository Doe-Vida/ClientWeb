import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-common',
  templateUrl: './button-common.component.html',
  styleUrls: ['./button-common.component.scss']
})
export class ButtonCommonComponent {
  @Input() buttonTitle!: string;
}
