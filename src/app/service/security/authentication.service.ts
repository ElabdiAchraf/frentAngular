import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {JwtHelperService} from '@auth0/angular-jwt';
import {Observable} from "rxjs";
import {CookieService} from 'ngx-cookie-service';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

    host2: string = "http://127.0.0.1:9999/AUTH-SERVICE/";
    jwt:string;
    username:string
    roles:Array<string>

    constructor(private http: HttpClient ,private cook: CookieService) { }
    // saveToken(jwt: string) {
    //     localStorage.setItem('token',jwt);
    //     this.jwt=jwt;
    //     this.parseJWT()
    //
    // }


    isAdmin(){
        return this.roles.indexOf("ADMIN")>=0;
    }

    // loadToken() {
    //     this.jwt= localStorage.getItem('token');
    //     this.parseJWT();
    // }
    // logout(){
    //     localStorage.removeItem('token');
    //     this.initParams();
    // }

    private initParams() {
        this.jwt=undefined;
        this.username=undefined;
        this.roles=undefined;
    }

    private parseJWT() {
        console.log("****************************");
        console.log(this.jwt)
        console.log("****************************");
        let jwtHelper= new JwtHelperService();
        let objJWT=jwtHelper.decodeToken(this.jwt);
        this.username=objJWT.username;
        this.roles=objJWT.roles;
        console.log(this.roles);
    }

    executeAuthentication(username,password): Observable<any>{
        return this.http.post<any>(`${this.host2}login`,{username,password},{ observe: 'response' }).pipe(
            map(
                res =>  {
                    let jwt = res.headers.get('Authorization');
                     this.jwt= jwt;
                     this.parseJWT();
                    sessionStorage.setItem("token",`Bearer ${this.jwt}`)
                    sessionStorage.setItem("username",this.username)
                    this.cook.set("username",this.username)
                    this.cook.set("token",`Bearer ${this.jwt}`)
                    return res;
                }
            )
        )
    }

    userActive(username,password): Observable<any>{
        return this.http.post<any>(`${this.host2}active`,{username,password}).pipe(
            map(
                response => {
                    return response;
                }
            )
        )
    }
    createUser(username,password,confirmedPassword,address):Observable<any>{
        return this.http.post<any>(`${this.host2}register`,{username,password,confirmedPassword,address}).pipe(
            map(
                response => {
                    return response;
                }
            )
        )
    }

    activeAccount(username,code):Observable<any>{
        return this.http.post<any>(`${this.host2}actived`,{username,code}).pipe(
            map(
                response => {
                    return response;
                }
            )
        )
    }


    getAuthentication(){
        return sessionStorage.getItem("username");
    }
    // @ts-ignore
    getMyToken(){
        if(this.getAuthentication()){
            return sessionStorage.getItem('token')
        }
    }
    isLogin(){
        return !(sessionStorage.getItem('username') == null ||
            sessionStorage.getItem('token') == null);
    }
    logOut(){
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('token');
        this.cook.delete('username');
        this.cook.delete('token');
        this.initParams();
    }
}
