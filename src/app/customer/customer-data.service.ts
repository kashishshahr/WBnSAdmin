import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerDataService {
private url:string=environment.url+'customer/'
  constructor(private _http:HttpClient) { }

  getAllCustomer()
  {
    return this._http.get(this.url);
  }
}
