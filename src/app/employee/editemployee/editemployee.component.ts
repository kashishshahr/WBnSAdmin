import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeDataService } from '../employee-data.service';
import { empClass } from '../employee';

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit {

  constructor(private _route:Router,private _emp:EmployeeDataService,private _act:ActivatedRoute) { }
EditEmployeeForm:FormGroup;
employee_id:number;
  ngOnInit() {
    this.employee_id=this._act.snapshot.params['employee_id'];
    this.EditEmployeeForm=new FormGroup({
      employee_id: new FormControl,
      employee_name: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-z]*')]),
      employee_gender: new FormControl(null, [Validators.required]),
      employee_mobileno: new FormControl(null, [Validators.required, Validators.pattern('[0-9]*')]),
      employee_salary: new FormControl(null, [Validators.required]),
      fk_user_email: new FormControl(null)
    });

    this._emp.getEmployeeById(this.employee_id).subscribe((data:empClass[])=>{
      this.editEmployeeFormDataBind(data[0]);
    });
  }
  editEmployeeFormDataBind(item:empClass)
  {

    this.EditEmployeeForm.patchValue({
      employee_id:item.employee_id,
      employee_name:item.employee_name,
      employee_salary:item.employee_salary,
      employee_mobileno:item.employee_mobileno,
      employee_gender:item.employee_gender,
    });

  }

  onEditSubmit()
  {
    this._emp.updateEmployee(this.EditEmployeeForm.value).subscribe((data:any)=>{
      this._route.navigate(['/nav/employees']);
    });
  }
  onCancel()
  {
    this._route.navigate(['/nav/employees']);
  }
}
