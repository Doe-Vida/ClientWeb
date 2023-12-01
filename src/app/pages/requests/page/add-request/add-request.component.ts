import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'src/app/common/models/User/User';
import { UserService } from 'src/app/pages/home/pages/shared/user.service';

@Component({
  selector: 'app-add-request',
  templateUrl: './add-request.component.html',
  styleUrls: ['./add-request.component.scss']
})
export class AddRequestComponent implements OnInit{
  tipos: string[] = ['A+','A-','B+','B-','AB+','AB-','O+','O-'];
  form!: FormGroup;
  user?: User

  constructor(
    private _userService: UserService,
    private _fb: FormBuilder
  ){}

  ngOnInit(): void {
    this.user = this._userService.getUserLoged();
    this.buidResourceForm();
  }

  buidResourceForm() {
    this.form = this._fb.group({
    })
  }
}
