import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Estado } from 'src/app/common/models/Estado/Estado';
import { Municipio } from 'src/app/common/models/Municipio/Municipio';
import { User } from 'src/app/common/models/User/User';
import { IbgeService } from 'src/app/common/services/ibge.service';
import { UserService } from '../shared/user.service';
import { BaseResult } from 'src/app/common/models/BaseResult';
import { CookieService } from 'ngx-cookie-service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { ImageService } from 'src/app/common/services/image/image.service';

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

  tipos: string[] = ['A+','A-','B+','B-','AB+','AB-','O+','O-'];
  sexos: Sexo[] = [{type: false, name: "M"},{type: true, name: "F"}];
  states = new Array<Estado>();
  citys = new Array<Municipio>();
  form!: FormGroup;
  entity!: User
  fotoUrl?: string;
  private _unsubscribe = new Array<Subscription>();

  loading: boolean = false;

  @ViewChild('fileInput') fileInput!: ElementRef;

  constructor(
    private readonly _ibgeService: IbgeService,
    private _userService: UserService,
    private imageService: ImageService,
    private _cookieService: CookieService,
    private _router: Router,
    private messageService: MessageService,
    private formBuilder: FormBuilder,
  ){
  }

  buildResourceForm(): void {
    this.form = this.formBuilder.group({
      first_name: [this.entity.first_name, [Validators.required]],
      last_name: [this.entity.last_name, [Validators.required]],
      blood_type: [this.entity.blood_type, [Validators.required]],
      sex: [this.entity.sex, [Validators.required]],
      state: [this.entity.state, [Validators.required]],
      city: [this.entity.city, [Validators.required]],
      phone: [this.entity.phone, [Validators.required]],
      birthdate: [this.entity.birthdate, [Validators.required]],
      date_last_donation: [this.entity.date_last_donation],
      id: [this.entity.id],
      username: [this.entity.username],
    })
  }

  ngOnInit(): void {
    const email = this._cookieService.get('login');
    const request = this._userService.getByName(email).subscribe((response: BaseResult) => {
      this.entity = response.data;
      if(this.entity.photo){
        let image = `data:image/jpeg;base64,${this.entity.photo}`
        this.fotoUrl = image;
      }
      this.buildResourceForm();
    });
    this._unsubscribe.push(request);
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

  save(): void {
    this.loading = true;
    const update = Object.assign({}, new User(), this.form.value);
    const request = this._userService.update(update, this.entity.username).subscribe((response: BaseResult)=>{
      if(response.success){
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Conta atualizada' });
        setTimeout(() => {
          this._router.navigate(['/home']);
        }, 3000);
      }
    }, (error: Error) => {
      this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Erro ao atualizar a conta...' });
    });
    this._unsubscribe.push(request);
  }

  openFileInput() {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const file = inputElement.files?.[0];

    if (file) {
      const sub = this.imageService.enviarImagem(file, this.entity.username).subscribe((result: BaseResult) => {
        if(result.message == 'Arquivo recebido com sucesso'){
          let image = `data:image/jpeg;base64,${this.entity.photo}`
          this.fotoUrl = image;
          this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Imagem atualizada' });
          setTimeout(() => {
            this._router.navigate(['/home']);
          }, 3000);
        }
      });
      this._unsubscribe.push(sub);
    }
  }

  ngOnDestroy(): void {
    this._unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
