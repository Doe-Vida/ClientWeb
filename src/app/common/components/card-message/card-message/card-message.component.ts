import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-message',
  templateUrl: './card-message.component.html',
  styleUrls: ['./card-message.component.scss']
})
export class CardMessageComponent {
  @Input() message?: string;
}
