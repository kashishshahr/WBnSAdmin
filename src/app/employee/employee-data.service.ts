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
  deleteEmployee(employee_id) {
    let header = new HttpHeaders().set(environment.header1, environment.header2);
    return this._http.delete(this.emp_url + employee_id, { headers: header });
  }

  deleteAllEmployeeData(id: empClass[]) {
    let body = JSON.stringify(id);
    let head = new HttpHeaders().set(environment.header1, environment.header2);
    return this._http.post(this.emp_url + id, body, { headers: head });
  }
  getEmployeeById(employee_id) {
    let header = new HttpHeaders().set(environment.header1, environment.header2);
    return this._http.get(this.emp_url + employee_id, { headers: header });
  }
  updateEmployee(obj) {
    let body = JSON.stringify(obj);
    let header = new HttpHeaders().set(environment.header1, environment.header2);
    return this._http.put(this.emp_url + obj.employee_id, body, { headers: header });
  }
}
