import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-button-common',
  templateUrl: './button-common.component.html',
  styleUrls: ['./button-common.component.scss']
})
export class ButtonCommonComponent {
  @Input() buttonTitle!: string;
  @Input() redirectTo!: string;
  @Input() resourceForm?: FormGroup;
}
