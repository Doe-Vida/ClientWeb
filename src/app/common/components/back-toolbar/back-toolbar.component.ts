import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-back-toolbar',
  templateUrl: './back-toolbar.component.html',
  styleUrls: ['./back-toolbar.component.scss']
})
export class BackToolbarComponent {
  @Input() routerLink!: string;
  @Input() Title!: string;
}
