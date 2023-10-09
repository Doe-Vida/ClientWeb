import { Component } from '@angular/core';
import { LoginService } from './pages/account/pages/shared/services/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Doe vida';

  constructor(private _baseService: LoginService){}

  isAuthenticated(): boolean {
    return this._baseService.getTokenAuthenticated();
  }
}
