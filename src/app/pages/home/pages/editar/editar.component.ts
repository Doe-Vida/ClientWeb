import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Estado } from 'src/app/common/models/Estado/Estado';
import { Municipio } from 'src/app/common/models/Municipio/Municipio';
import { User } from 'src/app/common/models/User/User';
import { IbgeService } from 'src/app/common/services/ibge.service';

interface Sexo{
  type: boolean;
  name: string;
}

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit, OnDestroy{

  public tipos: string[] = ['A+','A-','B+','B-','AB+','AB-','O+','O-'];
  public sexos: Sexo[] = [{type: false, name: "M"},{type: true, name: "F"}];
  public states = new Array<Estado>();
  public citys = new Array<Municipio>();
  public _unsubscribe = new Array<Subscription>();
  public form!: FormGroup;
  public Usuario?: User

  public stateSelected: string = '';

  @ViewChild('fileInput') fileInput!: ElementRef;

  constructor(
    private readonly _ibgeService: IbgeService,
    private formBuilder: FormBuilder,
  ){
    this.buildResourceForm();
  }

  buildResourceForm(): void {
    this.form = this.formBuilder.group({
      first_name: [this.Usuario?.first_name, [Validators.required]],
      last_name: [this.Usuario?.last_name, [Validators.required]],
      blood_type: [this.Usuario?.blood_type, [Validators.required]],
      sex: [this.Usuario?.sex, [Validators.required]],
      state: [this.Usuario?.state, [Validators.required]],
      city: [this.Usuario?.city, [Validators.required]],
      phone: [this.Usuario?.phone, [Validators.required]],
      birthdate: [this.Usuario?.birthdate, [Validators.required]],
      date_last_donation: [this.Usuario?.date_last_donation],
      id: [this.Usuario?.id],
      username: [this.Usuario?.username],
    })
  }

  ngOnInit(): void {
    this.loadStates();
  }

  loadStates():void{
    this.states = [];
    const sub = this._ibgeService.getAll().subscribe((response: Estado[]) => {
      this.states = response as Estado[];
    });
    this._unsubscribe.push(sub);
  }

  loadCitys(sigla: any): void{
    let UF = (sigla as HTMLInputElement).value;
    this.citys = [];
    const sub = this._ibgeService.getAll(UF).subscribe((response: Municipio[]) => {
      this.citys = response as Municipio[];
    });
    this._unsubscribe.push(sub);
  }

  openFileInput() {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const file = inputElement.files?.[0];

    if (file) {
      console.log('Arquivo selecionado:', file);
    }
  }

  ngOnDestroy(): void {
    this._unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
