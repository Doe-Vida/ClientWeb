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
    });
    this._unsubscribe.push(request);
  }

  ngOnDestroy(): void {
    this._unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
