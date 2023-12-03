import { Component, OnDestroy, OnInit } from '@angular/core';
import { RequestDonation } from '../../shared/models/Donation_request/donation_request';
import { DonationRequestService } from '../../shared/service/donation-request.service';
import { Subscription } from 'rxjs';
import { BaseResult } from 'src/app/common/models/BaseResult';
import { MessageService } from 'primeng/api';
import { UserService } from 'src/app/pages/home/pages/shared/user.service';
import { User } from 'src/app/common/models/User/User';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy{

  loading:Boolean = false;
  private unsubscribe = new Array<Subscription>();
  requests = new Array<RequestDonation>();
  requestsCopy = new Array<RequestDonation>();

  user?: User

  constructor(
    private readonly _donationService: DonationRequestService,
    private _userService: UserService,
    private messageService: MessageService,
  ){}

  ngOnInit(): void {
    this.loadRequests();
    this.user = this._userService.getUserLoged();
  }

  loadRequests():void{
    this.loading = true;
    const sub = this._donationService.getAll().subscribe((result: BaseResult)=>{
      result.success ? this.requests = result.data : this.requests = [];
      this.requestsCopy = this.requests;
      this.loading = false;
    },(error: any) => {
      this.loading = false;
      this.messageService.add({ severity: 'error', summary: 'Erro', detail: `${error.stack}` });});
    this.unsubscribe.push(sub)
  }

  handleCheckboxChange(event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    let copy = this.requests;
    if (isChecked) {
      this.requestsCopy = copy.filter((request) => request.requester?.id === this.user?.id);
    } else {
      this.requestsCopy = this.requests;
    }
  }

  handleSearch(event: Event) {
    const searchTerm = (event.target as HTMLInputElement).value;
    let copy = this.requests;
    if(searchTerm){
      this.requestsCopy = copy.filter(request =>
        request.patient_name?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    }else{
      this.requestsCopy = this.requests;
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
