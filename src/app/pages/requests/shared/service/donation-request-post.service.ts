import { Injectable, Injector } from '@angular/core';
import { BaseService } from 'src/app/common/services/Base.service';
import { RequestDonationPost } from '../models/Donation_request/donation-request-post';

@Injectable({
  providedIn: 'root'
})
export class DonationRequestPostService extends BaseService<RequestDonationPost>{
  constructor(injector:Injector){
    super("donations_orders",injector);
  }
}
