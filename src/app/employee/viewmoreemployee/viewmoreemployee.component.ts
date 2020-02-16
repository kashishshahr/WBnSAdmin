import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { empClass } from '../employee';

@Component({
  selector: 'app-viewmoreemployee',
  templateUrl: './viewmoreemployee.component.html',
  styleUrls: ['./viewmoreemployee.component.css']
})
export class ViewmoreemployeeComponent implements OnInit {

  constructor(private dialogRef:MatDialogRef<ViewmoreemployeeComponent>,

    @Inject(MAT_DIALOG_DATA) public data:empClass) {
     }
     employee_name:string="";
     employee_salary:number;
     employee_mobileno:number;

  ngOnInit() {
    this.employee_name=this.data.employee_name;
    this.employee_salary=this.data.employee_salary;
    this.employee_mobileno=this.data.employee_mobileno;
  }

}
