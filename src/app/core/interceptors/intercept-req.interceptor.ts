import {Injectable} from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class InterceptReqInterceptor implements HttpInterceptor {

  constructor() {
  }

  // 'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const modifiedReq = req.clone({
      headers: req.headers.set('X-RapidAPI-Key', '33d4c5ab85msh1d803df4c05e054p19715ejsnd04087f5e3d4'),
    });
    return next.handle(modifiedReq);
  }
}
