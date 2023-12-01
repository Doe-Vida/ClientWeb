import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-request',
  templateUrl: './add-request.component.html',
  styleUrls: ['./add-request.component.scss']
})
export class AddRequestComponent {
  public tipos: string[] = ['A+','A-','B+','B-','AB+','AB-','O+','O-'];
  public form!: FormGroup;
}
