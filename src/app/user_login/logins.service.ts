import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginsService {
  private url:string=environment.url+'login/';
  constructor(private _http:HttpClient) { }
  login(item)
  {
    // console.log(item)
    let x = new HttpHeaders().set(environment.header1,environment.header2);
    let body=JSON.stringify(item);
    return this._http.post(this.url,body,{headers:x});
  }
  UpdateOtp(item)
  {
    let body = JSON.stringify(item);
    let x = new HttpHeaders().set(environment.header1, environment.header2);
    return this._http.put(this.url + item.user_id, body, { headers: x });
  }

}
