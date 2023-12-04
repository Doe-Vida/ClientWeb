import { Injectable, Injector } from '@angular/core';
import { BaseService } from 'src/app/common/services/Base.service';
import { XP } from '../models/xp';

@Injectable({
  providedIn: 'root'
})
export class XpService extends BaseService<XP>{

  constructor(private injector: Injector) {
    super("posts", injector)
  }
}
