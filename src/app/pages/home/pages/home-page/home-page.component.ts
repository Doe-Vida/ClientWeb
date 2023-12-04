import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Subscription } from 'rxjs';
import { BaseResult } from 'src/app/common/models/BaseResult';
import { User } from 'src/app/common/models/User/User';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit, OnDestroy {
  public _unsubscribe = new Array<Subscription>();
  @Output() entity!: User;
  @Output() fotoUrl?: string;

  constructor(
    private _userService: UserService,
    private _cookieService: CookieService,
  ) {}

  ngOnInit(): void {
    this.loadProfile();
  }

  loadProfile(): void {
    const email = this._cookieService.get('login');
    const request = this._userService.getByName(email).subscribe((response: BaseResult) => {
      this.entity = response.data;
      if(this.entity.photo){
        let image = `data:image/jpeg;base64,${this.entity.photo}`
        this.fotoUrl = image;
      }
      this._userService.setUserLoged(email);
    });
    this._unsubscribe.push(request);
  }

  ngOnDestroy(): void {
    this._unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
