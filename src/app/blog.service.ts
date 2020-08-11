import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private url: string = environment.url + 'blog/';
  constructor(private _http: HttpClient) { }
  getAllblog() {
    return this._http.get(this.url);
  }
  addblog(item) {
    console.log(item);
    // let body = JSON.stringify(item);
    // let x = new HttpHeaders().set('Content-type', 'application/json');
    // return this._http.post(this.url, body, { headers: x });
    return this._http.post(this.url, item);
  }
  deleteblog(blog_id: number) {
    let x = new HttpHeaders().set(environment.header1, environment.header2);
    //console.log(p_id);
    return this._http.delete(this.url + blog_id, { headers: x });
  }
  getblogById(blog_id: number) {
    // console.log(p_id);
    let x = new HttpHeaders().set(environment.header1, environment.header2);
    return this._http.get(this.url + blog_id, { headers: x });
  }
  updateblogData(blog_id,item) {
    // console.log(item);
    // let body = JSON.stringify(item);
    // let x = new HttpHeaders().set('Content-type', 'application/json');
    return this._http.put(this.url+blog_id, item);
    // return this._http.post(this.url+item.blog_id, item);
  }


}
