import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { empClass } from './employee';

@Injectable({
  providedIn: 'root'
})

export class EmployeeDataService {
  private url: string = environment.url + 'user/';
  private emp_url: string = environment.url + 'employee/';
  constructor(private _http: HttpClient) { }
  addUser(obj) {
    console.log(obj);
    let body = JSON.stringify(obj);
    let header = new HttpHeaders().set(environment.header1, environment.header2);

    return this._http.post(this.url, body, { headers: header });
  }
  addEmployee(obj) {
    console.log(obj);
    let body = JSON.stringify(obj);
    let header = new HttpHeaders().set(environment.header1, environment.header2);
    return this._http.post(this.emp_url, body, { headers: header });
  }
  getAllEmployee() {
    return this._http.get(this.emp_url);
  }
  getEmployeebyid(employee_id: string) {
    return this._http.get(this.url + employee_id);
  }
  updateEmployee(item: empClass) {
    let body = JSON.stringify(item);
    let head1 = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.put(this.url + item.employee_id, body, { headers: head1 });
  }
}
