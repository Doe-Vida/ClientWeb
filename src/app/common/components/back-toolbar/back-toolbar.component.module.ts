import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ToastModule } from "primeng/toast";
import { BackToolbarComponent } from "./back-toolbar.component";

@NgModule({
  declarations: [
    BackToolbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ToastModule,
  ],
  exports: [
    BackToolbarComponent,
  ]
})
export class BackToolbarModule { }
