import { Component } from '@angular/core';
import { LoginService } from './pages/account/pages/shared/services/login/login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Doe vida';

  constructor(
    private _baseService: LoginService,
    private router: Router
  ){}

  isEditarRoute(): boolean {
    return this.router.url === '/home/editar';
  }

  isAuthenticated(): boolean {
    return this._baseService.getTokenAuthenticated();
  }
}
