import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { User } from 'src/app/common/models/User/User';
import { UserService } from 'src/app/pages/home/pages/shared/user.service';
import { XPost } from '../../shared/models/post-xp';
import { CookieService } from 'ngx-cookie-service';
import { BaseResult } from 'src/app/common/models/BaseResult';
import { PostXpService } from '../../shared/service/post-xp.service';

@Component({
  selector: 'app-add-xperience',
  templateUrl: './add-xperience.component.html',
  styleUrls: ['./add-xperience.component.scss']
})
export class AddXperienceComponent implements OnInit, OnDestroy{

  private unsubscribe = new Array<Subscription>();
  form!: FormGroup;
  user?: User
  loading:Boolean = false;

  post?:XPost

  constructor(
    private _userService: UserService,
    private _cookieService: CookieService,
    private messageService: MessageService,
    private _xpPost: PostXpService,
    private _router: Router,
    private _fb: FormBuilder
  ) {
    this.buidResourceForm();
  }

  ngOnInit(): void {
    this.getUser();
  }

  buidResourceForm() {
    this.form = this._fb.group({
      title: ['', [Validators.required]],
      content: ['', [Validators.required]],
    })
  }

  publishXperience(): void{
    this.loading = true;
    this.post = Object.assign({}, new XPost(), this.form.value)
    if (this.post && this.user) {
      this.post.user_id = Number(this.user?.id);
    }
    //console.log(this.request)
    const sub = this._xpPost.post(this.post).subscribe((result: BaseResult) => {
      if(result.success){
        this.loading = false;
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Experiência compartilhada com sucesso' });
        setTimeout(() => {
          this._router.navigate(['/xp']);
        },2000);
      }
    }, ((error: Error) =>{
      this.loading = false;
      this.messageService.add({ severity: 'error', summary: 'Erro', detail: `${error.stack}` });
    }));
    this.unsubscribe.push(sub);
  }

  getUser(): void{
    const email = this._cookieService.get("login")
    const sub = this._userService.getByName(email).subscribe((response:BaseResult) => {
      this.user = response.data
    });
    this.unsubscribe.push(sub);
  }

  ngOnDestroy(): void {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
