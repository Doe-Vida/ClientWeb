import { Injectable, Injector } from '@angular/core';
import { BaseResult } from 'src/app/common/models/BaseResult';
import { User } from 'src/app/common/models/User/User';
import { BaseService } from 'src/app/common/services/Base.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService<User>{

  user?: User

  constructor(injector: Injector) {
    super('users',injector);
  }

  setUserLoged(login: string): void{
    this.getByName(login).subscribe((result: BaseResult) => {
      this.user = result.data;
    });
  }

  getUserLoged(): User | undefined{
    return this.user;
  }
}
