import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { bookClass } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookDataService {
  private url: string = environment.url + 'book/';
  constructor(private _http: HttpClient) { }
  getAllBook() {
    return this._http.get(this.url);
  }
  addBook(item) {
    console.log(item);
    // let body = JSON.stringify(item);
    // let x = new HttpHeaders().set('Content-type', 'application/json');
    // return this._http.post(this.url, body, { headers: x });
    return this._http.post(this.url, item);
  }
  deleteBookById(b_id: number) {
    let x = new HttpHeaders().set(environment.header1, environment.header2);
    //console.log(p_id);
    return this._http.delete(this.url + b_id, { headers: x });
  }
  getBookById(b_id: number) {
    // console.log(p_id);
    let x = new HttpHeaders().set(environment.header1, environment.header2);
    return this._http.get(this.url + b_id, { headers: x });
  }
  updateBookData(b_id, item) {
    console.log(item);
    console.log(b_id);
    return this._http.put(this.url + b_id, item);
  }
  deleteAllBookData(id: bookClass[]) {
    let body = JSON.stringify(id);
    let head = new HttpHeaders().set(environment.header1, environment.header2);
    return this._http.post(this.url + id, body, { headers: head });
  }
}
