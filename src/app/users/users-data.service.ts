import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
private url:string=environment.url+'user/';
  constructor(private _http:HttpClient) { }
  getAllEmployee()
  {
    return this._http.get(this.url);
  }
  addEmployee(item)
  {
    let body=JSON.stringify(item);
    let x=new HttpHeaders().set(environment.header1,environment.header2);
    return this._http.post(this.url+item,{headers:x});
  }
  deleteEmployee(employee_id:number)
  {
    let x=new HttpHeaders().set(environment.header1,environment.header2);
    return this._http.delete(this.url+employee_id,{headers:x});
  }
}
