import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { identity } from 'rxjs';

import { Image } from '../api/image';

@Injectable()
export class PhotoService {
 host2: string = "http://127.0.0.1:9999/PHOTO-SERVICE";
    constructor(private http: HttpClient) { }

    getImages() {
    return this.http.get<any>('assets/demo/data/photos.json')
      .toPromise()
      .then(res => res.data as Image[])
      .then(data => data);
    }

  uploadPhoto(data) {
    return this.http.post(this.host2+`/file/upload`,data,{ headers: { 'Authorization':  `Bearer ${localStorage.getItem('token')}` }});
  }
  getPhotosByAnncId(id) {
    return this.http.get(this.host2+`/file/getPhotosByAnncId/${id}`,{ headers: { 'Authorization':  `Bearer ${localStorage.getItem('token')}` }});
  }
  
  
}
