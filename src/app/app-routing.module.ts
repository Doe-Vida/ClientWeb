import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './common/auth/auth.guard';

const routes: Routes = [
  {
    path: "",
    redirectTo: "account/principal",
    pathMatch: 'full',
  },
  {
    path:'account', loadChildren: () => import('./pages/account/account.module').then((m) => m.AccountModule)
  },{
    path: 'home',  canActivate: [AuthGuard], loadChildren: ()=> import('./pages/home/home.module').then((m) => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
