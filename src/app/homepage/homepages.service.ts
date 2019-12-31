import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HomepagesService {
  private url:string=environment.url+"product/";

    constructor(private _http:HttpClient) { }
    getAllProducts()
    {
      return this._http.get(this.url);
    }

}
