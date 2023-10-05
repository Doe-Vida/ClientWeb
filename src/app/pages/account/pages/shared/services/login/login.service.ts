import { Injectable, Injector } from "@angular/core";
import { BaseService } from "src/app/common/services/Base.service";
import { Login } from "../../models/login/login.model";

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService<Login>{
  constructor(injector: Injector) {
    super('login', injector);
  }
}
