import { BaseService } from "src/app/common/services/Base.service";
import { RequestDonation } from "../models/Donation_request/donation_request";
import { Injectable, Injector } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class DonationRequestService extends BaseService<RequestDonation>{
  constructor(injector:Injector){
    super("donations_orders",injector);
  }
}
