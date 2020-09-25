import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient , HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpclient: HttpClient) { }

  getAlbums(): Observable<any>
  {
    return this.httpclient.get("https://jsonplaceholder.typicode.com/albums");
  }
}
