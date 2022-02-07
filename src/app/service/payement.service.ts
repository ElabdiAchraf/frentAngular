import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PayementService {
host2: string = "http://127.0.0.1:9999/PAYMENT-SERVICE";
  constructor(private http: HttpClient) { }

  sell(data) {
    return this.http.post(this.host2 + "/sell", data, { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } });
  }
  taxe(data) {
    return this.http.post(this.host2 + "/payTaxe", data, { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } });
  }
  buy(data) {
    return this.http.post(this.host2 + "/buy", data, { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } });
  }

}
