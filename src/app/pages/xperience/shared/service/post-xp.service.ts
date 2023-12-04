import { Injectable, Injector } from '@angular/core';
import { BaseService } from 'src/app/common/services/Base.service';
import { XPost } from '../models/post-xp';

@Injectable({
  providedIn: 'root'
})
export class PostXpService extends BaseService<XPost>{

  constructor(private injector: Injector) {
    super("posts", injector);
  }
}
