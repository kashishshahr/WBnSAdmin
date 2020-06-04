import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { userCLass } from './users';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
private url:string=environment.url+'user/';
private udurl:string=environment.url+'userDelete/';

  constructor(private _http:HttpClient) { }
  getAllUser()
  {
    return this._http.get(this.url);
  }
  addUser(item)
  {
    let body=JSON.stringify(item);
    let x=new HttpHeaders().set(environment.header1,environment.header2);
    return this._http.post(this.url+item,{headers:x});
  }
  deleteUser(User_id:number)
  {
    let x=new HttpHeaders().set(environment.header1,environment.header2);
    return this._http.delete(this.url+User_id,{headers:x});
  }
  getUserById(user_email: string) {
    // console.log(p_id);
    let x = new HttpHeaders().set(environment.header1, environment.header2);
    return this._http.get(this.url + user_email, { headers: x });
  }

  deleteAllUserData(id: userCLass[]) {
    // console.log(id);
    let body = JSON.stringify(id);
    let head = new HttpHeaders().set(environment.header1, environment.header2);
    return this._http.post(this.url + id, body, { headers: head });
  }

  DeleteUserByEmail(obj) {
    let x = new HttpHeaders().set(environment.header1, environment.header2);
    let body = JSON.stringify(obj);
    return this._http.post(this.udurl,body, { headers: x });
  }
updateAdminPass(obj)
{ console.log(obj);
  let body=JSON.stringify(obj);
  let header=new HttpHeaders().set(environment.header1,environment.header2);
  return this._http.put(this.url+obj.user_email,body,{headers:header});
}
}
