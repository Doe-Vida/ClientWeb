import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from '../shared/models/login/login.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { BaseResult } from 'src/app/common/models/BaseResult';
import { LoginService } from '../shared/services/login/login.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy{

  loading:Boolean = false;
  public errorMessage?:string;
  public validate?: boolean = false;
  public login!: Login;
  public form!: FormGroup;
  private unsubscribe = new Array<Subscription>();

  constructor(
    private formBuilder: FormBuilder,
    private _loginService: LoginService,
    private _cookieService: CookieService,
    private _router: Router,
  ){
    this.buildResourceForm();
  }

  buildResourceForm(): void{
    this.form = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(8)]],
    })
  }

  salvar():void{
    this.loading = true;
    this.login = Object.assign({}, new Login(), this.form.value);
    const request = this._loginService.login(this.login);
    const resultado = request.subscribe((response: BaseResult) => {
      if(response.success){
        this._cookieService.set('login', this.login.username, 1/24);
        this._cookieService.set('access_token', response.data.access_token, 1/24);
        this._router.navigate(['/home']);
      }
    });
    this.unsubscribe.push(resultado);
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
