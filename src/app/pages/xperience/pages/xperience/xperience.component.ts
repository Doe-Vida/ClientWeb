import { Component, OnDestroy, OnInit } from '@angular/core';
import { XP } from '../../shared/models/xp';
import { XpService } from '../../shared/service/xp.service';
import { Subscription } from 'rxjs';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-xperience',
  templateUrl: './xperience.component.html',
  styleUrls: ['./xperience.component.scss']
})
export class XperienceComponent implements OnInit, OnDestroy{

  private unsubscribe = new Array<Subscription>();
  posts = new Array<XP>();
  loading:Boolean = false;

  constructor(
    private _xpService: XpService,
    private messageService: MessageService,
  ){}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void{
    const sub = this._xpService.getAll().subscribe((result) => {
      result.success ? this.posts = result.data : this.posts = [];
      this.loading = false;
    },(error: any) => {
      this.loading = false;
      this.messageService.add({ severity: 'error', summary: 'Erro', detail: `${error.stack}` });
    });
    this.unsubscribe.push(sub)
  }

  ngOnDestroy(): void {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
