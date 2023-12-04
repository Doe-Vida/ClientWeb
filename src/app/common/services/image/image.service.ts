import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  env = `${environment.apiUrl}users/upload_photo/`

  constructor(
    private httpClient: HttpClient
  ) { }

  enviarImagem(photo: File, username: string): Observable<any>{
    const file = new FormData();
    file.append('file', photo);
    const url = `${this.env}${username}`
    return this.httpClient.put(url, file).pipe();
  }
}
