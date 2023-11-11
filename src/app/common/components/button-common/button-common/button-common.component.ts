import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  @Output() onClick = new EventEmitter();

  click(): void {
    this.onClick.emit();
  }
}
