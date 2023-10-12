import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-donation-step',
  templateUrl: './card-donation-step.component.html',
  styleUrls: ['./card-donation-step.component.scss']
})
export class CardDonationStepComponent {
  @Input() icone!: string;
  @Input() texto!: string;
}
