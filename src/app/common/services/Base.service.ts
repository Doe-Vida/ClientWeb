import { Injector } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, map } from "rxjs";
import { BaseModel } from "../models/BaseModel";
import {HttpClient} from '@angular/common/http'
import { BaseResult } from "../models/BaseResult";
import { environment } from "src/app/environment/environment";
import { CookieService } from "ngx-cookie-service";

export abstract class BaseService<T>{
  protected _http: HttpClient;
  protected _apiPath: string;
  protected _router: Router;

  constructor(
    protected _pathResource: string,
    protected _injector: Injector
  ) {
    this._apiPath = `${environment.apiUrl}${_pathResource}`;
    this._http = _injector.get(HttpClient);
    this._router = _injector.get(Router);
  }

  login(resource: any): Observable<BaseResult|any>{
    return this._http.post(this._apiPath, resource).pipe();
  }

  getAll(): Observable<BaseResult | any>{
    return this._http.get(this._apiPath).pipe();
  }

  getByName(resource: any): Observable<BaseResult | any>{
    return this._http.get(`${this._apiPath}/${resource}`).pipe();
  }

  post(resource: any): Observable<BaseResult | any>{
    return this._http.post(this._apiPath, resource).pipe();
  }
  update(resource: any, username: string): Observable<BaseResult|any>{
    return this._http.put(`${this._apiPath}/${username}`,resource).pipe();
  }
  delete(resource: any): Observable<BaseResult|any>{
    return this._http.delete(`${this._apiPath}/${resource}`).pipe();
  }
}
