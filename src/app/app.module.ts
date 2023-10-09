import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Interceptor } from './common/interceptor/app.interceptor.module';
import { LoginService } from './pages/account/pages/shared/services/login/login.service';
import { FooterToolbarComponent } from './common/footer-toolbar/footer-toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    Interceptor,
  ],
  providers: [
    LoginService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
