import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Interceptor } from './common/interceptor/app.interceptor.module';
import { LoginService } from './pages/account/pages/shared/services/login/login.service';
import { FooterToolbarComponent } from './common/components/footer-toolbar/footer-toolbar.component';
import { RouterModule } from '@angular/router';
import { BackToolbarComponent } from './common/components/back-toolbar/back-toolbar.component';
import { ToastModule } from 'primeng/toast';
import { BackToolbarModule } from './common/components/back-toolbar/back-toolbar.component.module';
@NgModule({
  declarations: [
    AppComponent,
    FooterToolbarComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    Interceptor,
    ToastModule,
    BackToolbarModule,
  ],
  providers: [
    LoginService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
