import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { EmployeeDataService } from '../employee-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  addEmpForm: FormGroup;
  constructor(private _emp: EmployeeDataService, private _route: Router) { }

  ngOnInit() {
    this.addEmpForm = new FormGroup({
      user_email: new FormControl(null, [Validators.required, Validators.email]),
      password_group: new FormGroup({
        user_password: new FormControl(null, [Validators.required, Validators.minLength(5)]),
        user_confirm_password: new FormControl(null)
      }, [this.passwordmatch.bind(this)]),
      user_type: new FormControl('Employee'),
      employee_name: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-z]*')]),
      employee_gender: new FormControl(null, [Validators.required]),
      employee_mobileno: new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]*')]),
      employee_salary: new FormControl(null, [Validators.required])

    });
  }

  onAddEmp() {
    let userobj = {
      user_email: this.addEmpForm.value.user_email,
      user_password: this.addEmpForm.value.password_group.user_password,
      user_type: this.addEmpForm.value.user_type
    };

    let empobj = {
      employee_name: this.addEmpForm.value.employee_name,
      employee_gender: this.addEmpForm.value.employee_gender,
      employee_mobileno: this.addEmpForm.value.employee_mobileno,
      employee_salary: this.addEmpForm.value.employee_salary,
      fk_user_email: this.addEmpForm.value.user_email
    };
    console.log(empobj)
    this._emp.addUser(userobj).subscribe(
      (x: any) => {
        this._emp.addEmployee(empobj).subscribe(
          (y: any) => {
            this._route.navigate(['/nav/employees']);
          }
        );
      }
    );
  }
  passwordmatch(c: AbstractControl): { [s: string]: boolean } {
    {
      const pass = c.get('user_password').value;
      const cpass = c.get('user_confirm_password').value;
      if (pass != cpass) {
        return { 'PasswordMatch': true };
      }
      return null;
    }
  }

  onClick()
  {
    this._route.navigate(['/nav/employees']);
  }
}
