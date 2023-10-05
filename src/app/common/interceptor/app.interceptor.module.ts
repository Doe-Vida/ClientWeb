import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable, NgModule } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {
   intercept(req: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>> {
      let token = localStorage.getItem('access_token');
      const dupReq = req.clone({
         headers: req.headers.set('authorization', (token) ? 'Bearer ' + token : '')
      });
      return next.handle(dupReq);
   }
}@NgModule({
   providers: [{
      provide: HTTP_INTERCEPTORS,
      useClass: HttpsRequestInterceptor,
      multi: true,
   }]
})
export class Interceptor { }
