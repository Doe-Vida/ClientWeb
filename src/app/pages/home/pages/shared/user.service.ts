import { Injectable, Injector } from '@angular/core';
import { User } from 'src/app/common/models/User/User';
import { BaseService } from 'src/app/common/services/Base.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService<User>{

  constructor(injector: Injector) {
    super('users',injector);
  }
}
