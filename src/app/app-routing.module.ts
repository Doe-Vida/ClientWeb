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
  },{
    path: 'requests', canActivate: [AuthGuard], loadChildren: () => import('./pages/requests/requests.module').then((m) => m.RequestsModule)
  },{
    path: 'map', canActivate: [AuthGuard], loadChildren: () => import('./pages/map/map.module').then((m) => m.MapModule)
  },{
    path: 'xp', canActivate: [AuthGuard], loadChildren: () => import('./pages/xperience/xperience.module').then((m) => m.XperienceModule)
  },{
    path: 'laws', canActivate: [AuthGuard], loadChildren: () => import('./pages/laws/laws.module').then((m) => m.LawsModule)
  },{
    path: 'aptitude-test', canActivate: [AuthGuard], loadChildren: () => import('./common/pages/aptitude-test/aptitude-test.module').then((m) => m.AptitudeTestModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
