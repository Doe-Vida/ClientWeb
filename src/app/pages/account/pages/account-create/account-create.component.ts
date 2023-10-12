import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { BaseResult } from 'src/app/common/models/BaseResult';
import { Login } from '../shared/models/login/login.model';
import { CreateAccountService } from '../shared/services/create-account/create-account.service';

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.scss']
})
export class AccountCreateComponent{
  public errorMessage?:string;
  public createAccount?: Login;
  public form!: FormGroup;
  private unsubscribe = new Array<Subscription>();
  loading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private _createAccountService: CreateAccountService,
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
        this._router.navigate(['/account/login']);
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
