import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountCreateComponent } from './pages/account-create/account-create.component';
import { RouterModule, Routes } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { FormsModule } from '@angular/forms';
import { PrincipalComponent } from './pages/principal/principal.component';
import { LoginComponent } from './pages/login/login.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';

const routes: Routes = [
  {
    path: 'create', component: AccountCreateComponent
  },{
    path: 'principal', component: PrincipalComponent
  },{
    path: 'login', component: LoginComponent
  },{
    path: 'forgot-password', component: ForgotPasswordComponent
  }
]

@NgModule({
  declarations: [
    AccountCreateComponent,
    PrincipalComponent,
    LoginComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    DividerModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AccountModule { }
