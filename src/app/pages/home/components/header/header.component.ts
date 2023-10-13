import { Component, Input } from '@angular/core';
import { User } from 'src/app/common/models/User/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{
  @Input() entity!: User;
}
