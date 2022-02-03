import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

 host2: string = "http://127.0.0.1:9999/CONTRACT-SERVICE";

  constructor(private http: HttpClient) { }

  Immobiliers() {
    return this.http.get(this.host2 + "/immobiliers", { headers: { 'Authorization':  `Bearer ${localStorage.getItem('token')}` }});
  }
  ImmobilierDetails(id) {
    return this.http.get(this.host2 + `/immobillierDetails/${id}`, { headers: { 'Authorization':  `Bearer ${localStorage.getItem('token')}` }});
  }
  ImmobilierForSale() {
    return this.http.get(this.host2 + `/sell_immobiliers`, { headers: { 'Authorization':  `Bearer ${localStorage.getItem('token')}` }});
  }
  myImmobilier() {
    return this.http.get(this.host2 + `/myImmobiliers`, { headers: { 'Authorization':  `Bearer ${localStorage.getItem('token')}` }});
  }
  changeOnwership(data) {
    return this.http.post(this.host2 + "/changeOwnerShip", data, { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } });
  }
}
