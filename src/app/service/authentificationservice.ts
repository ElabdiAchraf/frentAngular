// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import {JwtHelperService} from '@auth0/angular-jwt';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   host2: string = "http://127.0.0.1:9999/AUTH-SERVICE";
//   jwt:string;
//   username:string
//   roles:Array<string>
//
//   constructor(private http: HttpClient) { }
//   login(data) {
//     return this.http.post(this.host2 + "/login", data, { observe: 'response' });
//   }
//
//
//     saveToken(jwt: string) {
//     localStorage.setItem('token',jwt);
//     this.jwt=jwt;
//     this.parseJWT()
//
//     }
//
//   private parseJWT() {
//     let jwtHelper= new JwtHelperService();
//     let objJWT=jwtHelper.decodeToken(this.jwt);
//     this.username=objJWT.obj;
//     this.roles=objJWT.roles;
//   }
//   isAdmin(){
//     return this.roles.indexOf("ADMIN")>=0;
//   }
//
//   loadToken() {
//     this.jwt= localStorage.getItem('token');
//     this.parseJWT();
//   }
//   logout(){
//     localStorage.removeItem('token');
//     this.initParams();
//   }
//
//   private initParams() {
//     this.jwt=undefined;
//     this.username=undefined;
//     this.roles=undefined;
//   }
// }
