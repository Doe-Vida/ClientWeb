import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  constructor(private _router: Router){}

  canActivate() : boolean{
    const isAutenticated = localStorage.getItem('access_token');

    if(isAutenticated){
      return true;
    }else{
      this._router.navigate(['account/login']);
      return false;
    }
  }
}
