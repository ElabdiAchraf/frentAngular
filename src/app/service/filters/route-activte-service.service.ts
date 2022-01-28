import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthenticationService} from "../security/authentication.service";


@Injectable({
    providedIn: 'root'
})
export class RouteActivteService implements CanActivate{

    constructor(private auth: AuthenticationService,
                private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if(this.auth.isLogin()){
            return true;
        }
        this.router.navigateByUrl("/login")
        return false;
    }
}
