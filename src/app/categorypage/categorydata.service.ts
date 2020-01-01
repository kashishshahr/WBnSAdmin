import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category } from './category';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategorydataService {
  url: string =environment.url +  "category/";
  constructor(private _http: HttpClient) { }
  getAllCategory() {
    return this._http.get(this.url);
  }
  deleteCategory(category_id) {
    console.log(category_id)
    let x = new HttpHeaders().set(environment.header1, environment.header2);
    return this._http.delete(this.url + category_id, { headers: x });
  }
  addCategory(item) {
    let body = JSON.stringify(item);
    let x = new HttpHeaders().set(environment.header1, environment.header2);
    return this._http.post(this.url, item);
  }
  getCategorybyid(category_id: string) {
    return this._http.get(this.url + category_id);
  }
  updateCategory(item: Category) {
    let body = JSON.stringify(item);
    let head1 = new HttpHeaders().set(environment.header1, environment.header2);
    return this._http.put(this.url + item.category_id, body, { headers: head1 });
  }
}
