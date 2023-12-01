import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ToastModule } from "primeng/toast";
import { BackToolbarComponent } from "./back-toolbar.component";
import { MessageService } from "primeng/api";

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
  ],
  providers:[
    MessageService
  ]
})
export class BackToolbarModule { }
