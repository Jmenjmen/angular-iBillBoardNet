import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetIpService {

  constructor(private http: HttpClient) { }

  url = 'http://test.com:5500'

  getIp(): Observable<any> {
    return from(fetch("https://checkip.amazonaws.com/").then(res => res.text()));
  }

  sendDataOnServer(data): Observable<any> {
    return this.http.post<any>(this.url + 'api', {data});
  }

  sendFormData(data): Observable<any> {
    return this.http.post<any>(this.url + 'api/form/data', {data})
  }

  sendPresenterData(product): Observable<any> {
    return this.http.post<any>(this.url + 'api/presenter/count', {
      product
    })
  }
}
