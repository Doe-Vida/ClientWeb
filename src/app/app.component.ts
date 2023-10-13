import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Doe vida';

  constructor(
    private _cookieService: CookieService,
    private router: Router
  ){}

  isEditarRoute(): boolean {
    return this.router.url === '/home/editar';
  }

  isAuthenticated(): boolean {
    let token = this._cookieService.get('access_token');
    return token?.length > 0 ? true : false;
  }
}
