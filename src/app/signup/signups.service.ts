import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SignupsService {
  private url:string=environment.url+"user/";
  private cust_url:string=environment.url+"customer/";
  constructor(private _http:HttpClient) { }
signUp(obj)
{
  console.log(obj);
  let body=JSON.stringify(obj);
  let x=new HttpHeaders().set(environment.header1,environment.header2);

  return this._http.post(this.url,body,{headers:x});
}
customerAdd(obj){
  let body=JSON.stringify(obj);
  let head1=new HttpHeaders().set(environment.header1,environment.header2);
  return this._http.post(this.cust_url,body,{headers:head1});
}

}
