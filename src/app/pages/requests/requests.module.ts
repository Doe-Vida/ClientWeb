import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestsComponent } from './page/requests/requests.component';
import { RouterModule, Routes } from '@angular/router';
import { ButtonCommonModule } from 'src/app/common/components/button-common/button-common.module';
import { MainComponent } from './components/main/main.component';
import { CardModule } from './components/card/card.module';
import { BackToolbarModule } from 'src/app/common/components/back-toolbar/back-toolbar.component.module';
import { MessageService } from 'primeng/api';


const routes: Routes = [
  {
    path: '', component: RequestsComponent, pathMatch: 'full',
  }
]

@NgModule({
  declarations: [
    RequestsComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    ButtonCommonModule,
    CardModule,
    BackToolbarModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    MessageService
  ]
})
export class RequestsModule { }
