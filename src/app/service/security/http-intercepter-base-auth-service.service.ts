import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from "rxjs";
import {AuthenticationService} from "./authentication.service";

@Injectable({
  providedIn: 'root'
})

export class HttpIntercepterBaseAuthService implements HttpInterceptor{

    constructor(private auth: AuthenticationService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(this.auth.getAuthentication() && this.auth.getMyToken()){
            req = req.clone({
                setHeaders: {
                    Authorization: this.auth.getMyToken()
                }
            })
        }
        return next.handle(req);
    }
}
