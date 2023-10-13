import { Component, Input } from '@angular/core';
import { User } from 'src/app/common/models/User/User';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
  @Input() entity!: User;
}
