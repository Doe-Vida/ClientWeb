import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit{

  apt: boolean = false;

  constructor(
    private readonly _cookieService: CookieService,
  ){}

  ngOnInit(): void {
    this.apt = this.verifyIfAptToDonate();
  }

  verifyIfAptToDonate(): boolean{
    return this._cookieService.get('aptitudeToDonate') === 'true' ? true : false;
  }
}
