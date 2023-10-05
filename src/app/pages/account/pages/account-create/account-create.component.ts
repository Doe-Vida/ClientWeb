import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { BaseResult } from 'src/app/common/models/BaseResult';
import { Login } from '../shared/models/login/login.model';
import { LoginService } from '../shared/services/login/login.service';
import { CreateAccountService } from '../shared/services/create-account/create-account.service';

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.scss']
})
export class AccountCreateComponent{
  public errorMessage?:string;
  public validate?: boolean = false;
  public createAccount?: Login;
  public form!: FormGroup;
  private unsubscribe = new Array<Subscription>();

  constructor(
    private formBuilder: FormBuilder,
    private _createAccountService: CreateAccountService,
    private messageService: MessageService,
    private _router: Router,
  ){
    this.buildResourceForm();
  }

  buildResourceForm(): void{
    this.form = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }

  salvar():void{
    this.validate = true;
    this.createAccount = Object.assign({}, new Login(), this.form.value);
    const request = this._createAccountService.post(this.createAccount);
    const resultado = request.subscribe((response: BaseResult) => {
      if(response.success){
        localStorage.setItem('access_token', response.data.access_token);
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
