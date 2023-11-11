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
  routesCantUseFooterToolbar: string[] = [
    '/home/editar',
    '/home/aptitudeTest',
    '/home/firstAptitudeTest',
    '/account/login',
    '/account/create',
    '/account/principal',
    '/account/forgot-password',
  ]
  constructor(
    private _cookieService: CookieService,
    private router: Router
  ){}

  RoutesCantUseFooterToolbar(): boolean {
    const currentUrl = this.router.url;
    for (const route of this.routesCantUseFooterToolbar) {
      if (currentUrl.includes(route)) {
        return true;
      }
    }
    return false;
  }

  isAuthenticated(): boolean {
    let token = this._cookieService.get('access_token');
    return token?.length > 0 ? true : false;
  }
}
