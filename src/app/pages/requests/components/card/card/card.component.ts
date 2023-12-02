import { Component, Input } from '@angular/core';
import { RequestDonation } from '../../../shared/models/Donation_request/donation_request';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() request?: RequestDonation;
  tipos: string[] = ['A+','A-','B+','B-','AB+','AB-','O+','O-'];
}
