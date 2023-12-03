import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { BaseResult } from 'src/app/common/models/BaseResult';
import { Hospital } from 'src/app/common/models/Hospital/hospital';
import { User } from 'src/app/common/models/User/User';
import { HospitalService } from 'src/app/common/services/hospital/hospital.service';
import { UserService } from 'src/app/pages/home/pages/shared/user.service';
import { DonationRequestPostService } from '../../shared/service/donation-request-post.service';
import { RequestDonationPost } from '../../shared/models/Donation_request/donation-request-post';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-request',
  templateUrl: './add-request.component.html',
  styleUrls: ['./add-request.component.scss']
})
export class AddRequestComponent implements OnInit, OnDestroy{
  private unsubscribe = new Array<Subscription>();
  tipos: string[] = ['A+','A-','B+','B-','AB+','AB-','O+','O-'];
  hospitals = new Array<Hospital>();
  form!: FormGroup;
  user?: User
  loading:Boolean = false;

  request?: RequestDonationPost

  constructor(
    private _userService: UserService,
    private _hospitalService: HospitalService,
    private _postRequest: DonationRequestPostService,
    private messageService: MessageService,
    private _router: Router,
    private _fb: FormBuilder
  ){
  }

  ngOnInit(): void {
    this.user = this._userService.getUserLoged();
    this.buidResourceForm();
    this.loadHospitalList();
  }

  buidResourceForm() {
    this.form = this._fb.group({
      patient_name: ['', [Validators.required]],
      blood_type: ['', [Validators.required]],
      description: ['', [Validators.required]],
      qty_bags: ['', [Validators.required]],
      hospital: ['', [Validators.required]],
      requester: [this.user?.id] // id do usuário logado
    })
  }

  loadHospitalList(): void{
    const sub = this._hospitalService.getAll().subscribe((result: BaseResult) => {
      result.success ? this.hospitals = result.data : this.hospitals = [];
    });
    this.unsubscribe.push(sub)
  }

  sendRequest(): void{
    this.loading = true;
    this.request = Object.assign({}, new RequestDonationPost(), this.form.value);
    const sub = this._postRequest.post(this.request).subscribe((result: BaseResult) => {
      if(result.success){
        this.loading = false;
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Solicitação enviada com sucesso' });
        setTimeout(() => {
          this._router.navigate(['/requests']);
        },2000);
      }
    }, ((error: Error) =>{
      this.loading = false;
      this.messageService.add({ severity: 'error', summary: 'Erro', detail: `${error.stack}` });
    }));
    this.unsubscribe.push(sub);
  }

  ngOnDestroy(): void {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
