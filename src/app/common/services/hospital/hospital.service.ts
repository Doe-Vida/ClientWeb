import { Injectable, Injector } from '@angular/core';
import { BaseService } from '../Base.service';
import { Hospital } from '../../models/Hospital/hospital';

@Injectable({
  providedIn: 'root'
})
export class HospitalService extends BaseService<Hospital>{

  constructor(private injector: Injector) {
    super("hospitals", injector)
  }
}
