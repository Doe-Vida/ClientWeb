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
import { AptitudeTestComponent } from './pages/aptitude-test/aptitude-test.component';
import { BackToolbarModule } from 'src/app/common/components/back-toolbar/back-toolbar.component.module';
import { ButtonCommonModule } from 'src/app/common/components/button-common/button-common.module';
import { FirstAptituteTestComponent } from './pages/first-aptitute-test/first-aptitute-test.component';
import { FirstAptitudeTestService } from './pages/shared/first-aptitute/first-aptitude-test.service';
import { CardMessageModule } from 'src/app/common/components/card-message/card-message.module';
import { SecondAptitudeTestComponent } from './pages/second-aptitude-test/second-aptitude-test.component';
import { ImageService } from 'src/app/common/services/image/image.service';

const routes: Routes = [
  {
    path: '', component: HomePageComponent, pathMatch: 'full'
  },
  {
    path: 'editar', component: EditarComponent
  },
  {
    path: 'aptitudeTest', component: AptitudeTestComponent
  },
  {
    path: 'firstAptitudeTest', component: FirstAptituteTestComponent
  },{
    path: 'secondAptitudeTest', component: SecondAptitudeTestComponent
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
    CarrouselGetInpiredComponent,
    AptitudeTestComponent,
    FirstAptituteTestComponent,
    SecondAptitudeTestComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ToastModule,
    LoadingModule,
    ReactiveFormsModule,
    CarouselModule,
    RouterModule.forChild(routes),
    BackToolbarModule,
    ButtonCommonModule,
    CardMessageModule,
  ],
  providers: [
    IbgeService,
    MessageService,
    FirstAptitudeTestService,
    ImageService
  ]
})
export class HomeModule { }
