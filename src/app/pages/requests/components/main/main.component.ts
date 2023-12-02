import { Component, OnDestroy, OnInit } from '@angular/core';
import { RequestDonation } from '../../shared/models/Donation_request/donation_request';
import { DonationRequestService } from '../../shared/service/donation-request.service';
import { Subscription } from 'rxjs';
import { BaseResult } from 'src/app/common/models/BaseResult';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy{

  loading:Boolean = false;
  private unsubscribe = new Array<Subscription>();
  requests = new Array<RequestDonation>();

  constructor(
    private readonly _donationService: DonationRequestService,
    private messageService: MessageService,
  ){}

  ngOnInit(): void {
    this.loadRequests();
  }

  loadRequests():void{
    this.loading = true;
    const sub = this._donationService.getAll().subscribe((result: BaseResult)=>{
      result.success ? this.requests = result.data : this.requests = [];
      this.loading = false;
    },(error: any) => {
      this.loading = false;
      this.messageService.add({ severity: 'error', summary: 'Erro', detail: `${error.stack}` });});
    this.unsubscribe.push(sub)
  }

  ngOnDestroy(): void {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
