import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

host2: string = "http://127.0.0.1:9999/PROFILE-SERVICE";

  constructor(private http: HttpClient) { }
  myProfile() {
    return this.http.get(this.host2 + "/myProfile", { headers: { 'Authorization':  `Bearer ${localStorage.getItem('token')}` }});
  }
  createProfile(data) {
    return this.http.post(this.host2 + "/createProfile",data ,{ headers: { 'Authorization':  `Bearer ${localStorage.getItem('token')}` }});
  }
  updateProfile(data) {
    return this.http.put(this.host2 + "/updateProfile",data ,{ headers: { 'Authorization':  `Bearer ${localStorage.getItem('token')}` }});
  }

}
