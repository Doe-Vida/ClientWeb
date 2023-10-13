import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  constructor(private _router: Router, private cookieService: CookieService){}

  canActivate() : boolean{
    const isAutenticated = this.cookieService.get('access_token');

    if(isAutenticated){
      return true;
    }else{
      this._router.navigate(['account/login']);
      return false;
    }
  }
}
