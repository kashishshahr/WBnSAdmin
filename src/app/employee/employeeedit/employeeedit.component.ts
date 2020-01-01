import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeDataService } from '../employee-data.service';
import { empClass } from '../employee';

@Component({
  selector: 'app-employeeedit',
  templateUrl: './employeeedit.component.html',
  styleUrls: ['./employeeedit.component.css']
})
export class EmployeeeditComponent implements OnInit {
  EmployeeEditForm: FormGroup;
  employee_id: number;
  constructor(private _route: Router, private _activate_route: ActivatedRoute, private _data: EmployeeDataService) { }

  ngOnInit() {
    this.employee_id = this._activate_route.snapshot.params['employee_id'];
    console.log(this.employee_id);
    this.EmployeeEditForm = new FormGroup({
      employee_name: new FormControl(null),
      employee_mobileno: new FormControl(null),
      employee_salary: new FormControl(null),
      employee_id: new FormControl(null),
      fk_user_email: new FormControl(null),
    });
    this._data.getEmployeebyid(this.employee_id.toString()).subscribe(
      (data: empClass[]) => {
        this.formDataBind(data[0]);
      }
    );
  }
  formDataBind(item: empClass) {
    console.log(item);
    this.EmployeeEditForm.patchValue({
      employee_name: item.employee_name,
      employee_mobileno: item.employee_mobileno,
      employee_salary: item.employee_salary,
      employee_id: item.employee_id,
      fk_user_email: item.fk_user_email
    });
  }
  onEmployeeEdit(employee_id) {
    this._data.updateEmployee(this.EmployeeEditForm.value).subscribe(
      (data: empClass) => {
        this._route.navigate(['employee', employee_id]);
      }
    );
  }
}
