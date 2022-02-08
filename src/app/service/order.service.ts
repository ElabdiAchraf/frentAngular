import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
 host2: string = "http://127.0.0.1:9999/ORDER-SERVICE";

  constructor(private http: HttpClient) { }

  ImmobilierOrders(idImmobilier) {
    return this.http.get(this.host2 + `/GetImmobilierOrders/${idImmobilier}`, { headers: { 'Authorization':  `Bearer ${localStorage.getItem('token')}` }});
  }
  OrderImmobilier(data) {
    return this.http.post(this.host2 + `/OrderImmobilier`,data, { headers: { 'Authorization':  `Bearer ${localStorage.getItem('token')}` }});
  }

  DeleteImmobilierOrders(idImmobilier) {
    return this.http.delete(this.host2 + `/DeleteImmobilierOrders/${idImmobilier}`, { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } });
  }
  userOrders(id) {
    return this.http.get(this.host2 + `/UserOrders/${id}`, { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } });
  }
}
