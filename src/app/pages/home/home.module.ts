import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { BottonEditComponent } from './components/botton-edit/botton-edit.component';
import { EditarComponent } from './pages/editar/editar.component';
import { IbgeService } from 'src/app/common/services/ibge.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardDonationStepComponent } from './components/card-donation-step/card-donation-step.component';
import { CarrouselGetInpiredComponent } from './components/carrousel-get-inpired/carrousel-get-inpired.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CarouselModule } from 'primeng/carousel';
import { LoadingModule } from 'src/app/common/components/loading/loading/loading.module';

const routes: Routes = [
  {
    path: '', component: HomePageComponent, pathMatch: 'full'
  },
  {
    path: 'editar', component: EditarComponent
  }
]

@NgModule({
  declarations: [
    HomePageComponent,
    HeaderComponent,
    BodyComponent,
    BottonEditComponent,
    EditarComponent,
    CardDonationStepComponent,
    CarrouselGetInpiredComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ToastModule,
    LoadingModule,
    ReactiveFormsModule,
    CarouselModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    IbgeService,
    MessageService,
  ]
})
export class HomeModule { }
