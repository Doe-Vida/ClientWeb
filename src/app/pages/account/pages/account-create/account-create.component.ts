import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { BaseResult } from 'src/app/common/models/BaseResult';
import { Login } from '../shared/models/login/login.model';
import { CreateAccountService } from '../shared/services/create-account/create-account.service';
import { LoginService } from '../shared/services/login/login.service';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from 'src/app/pages/home/pages/shared/user.service';

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.scss']
})
export class AccountCreateComponent{
  public errorMessage?:string;
  public createAccount!: Login;
  public form!: FormGroup;
  private unsubscribe = new Array<Subscription>();
  loading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private _createAccountService: CreateAccountService,
    private _loginService: LoginService,
    private _userService: UserService,
    private _cookieService: CookieService,
    private _router: Router,
    private messageService: MessageService,
  ){
    this.buildResourceForm();
  }

  buildResourceForm(): void{
    this.form = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
    })
  }

  salvar():void{
    this.loading = true;
    this.createAccount = Object.assign({}, new Login(), this.form.value);
    const request = this._createAccountService.post(this.createAccount);
    const resultado = request.subscribe((response: BaseResult) => {
      if(response.success){
      this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Conta criada' });
      setTimeout(() => {
        const login = this._loginService.login(this.createAccount).subscribe((response: BaseResult) => {
          if(response.success){
            this._cookieService.set('login', this.createAccount.username, 1/24);
            this._cookieService.set('access_token', response.data.access_token, 1/24);
            this._userService.setUserLoged(this.createAccount.username)
            this._router.navigate(['/home/editar']);
          }
        });
        this.unsubscribe.push(login);
      }, 3000);
      }
    }, (error: Error) => {
      this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Erro ao criar a conta...' });
    });
    this.unsubscribe.push(resultado);
  }

  ngOnDestroy(): void {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
