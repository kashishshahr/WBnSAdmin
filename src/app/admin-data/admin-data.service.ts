import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminDataService {

  public url: string = environment.url + "dashboard/";

  public status_url: string = environment.url + "orderStatus/";

  constructor(public _http: HttpClient) { }

  getOrder() {
    return this._http.get(this.url + '2020');
  }

  getAllSimpleCustomer() {
    return this._http.get(this.url);
  }

  getStatus() {
    return this._http.get(this.status_url);
  }
}
