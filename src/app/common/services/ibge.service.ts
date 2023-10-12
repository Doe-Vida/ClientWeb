import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estado } from '../models/Estado/Estado';
import { Municipio } from '../models/Municipio/Municipio';

@Injectable({
  providedIn: 'root'
})
export class IbgeService {

  private _apiBrasilIBGE: string = 'https://brasilapi.com.br/api/ibge'

  constructor(private _http: HttpClient) { }

  getAll(UF?: string): Observable<Estado | Municipio | any>{
    if(!UF){
      return this._http.get(`${this._apiBrasilIBGE}/uf/v1`).pipe();
    }else{
      return this._http.get(`${this._apiBrasilIBGE}/municipios/v1/${UF}?providers=dados-abertos-br,gov,wikipedia`).pipe();
    }
  }
}
