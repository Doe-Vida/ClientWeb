import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { ToastModule } from "primeng/toast";
import { AppRoutingModule } from "src/app/app-routing.module";
import { BackToolbarComponent } from "./back-toolbar.component";

@NgModule({
  declarations: [
    BackToolbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastModule,
  ],
  exports: [
    BackToolbarComponent,
  ]
})
export class BackToolbarModule { }
