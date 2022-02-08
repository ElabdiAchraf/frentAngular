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
    return this.http.get(this.host2 + `/sell_immobiliers`);
  }
  myImmobilier() {
    return this.http.get(this.host2 + `/myImmobiliers`, { headers: { 'Authorization':  `Bearer ${localStorage.getItem('token')}` }});
  }
  changeOnwership(data) {
    return this.http.post(this.host2 + "/changeOwnerShip", data, { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } });
  }
  addImmobilier(data) {
    return this.http.post(this.host2 + "/addImmobillier", data, { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } });
  }
  approveImmobilier(data) {
    return this.http.post(this.host2 + "/approveImmobillier", data, { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } });
  }
  approveChangeOwnership(data) {
    return this.http.post(this.host2 + "/approveChangeOwnerShip", data, { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } });
  }
  waitingChangeImmobiliers() {
    return this.http.get(this.host2 + "/waitingChangeImmobiliers", { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } });
  }
  waitingImmobiliers() {
    return this.http.get(this.host2 + "/waitingImmobiliers", { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } });
  }
  sellImmobilier(data) {
    return this.http.post(this.host2 + "/sellImmobilier",data ,{ headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } });
  }
}
