import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategorydataService } from '../categorydata.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Category } from '../category';

@Component({
  selector: 'app-categoryadd',
  templateUrl: './categoryadd.component.html',
  styleUrls: ['./categoryadd.component.css']
})
export class CategoryaddComponent implements OnInit {
  categoryAddForm: FormGroup;
  constructor(private _route: Router, private _data: CategorydataService) { }

  ngOnInit() {
    this.categoryAddForm = new FormGroup({
      category_name: new FormControl(null, [Validators.required])
    });
  }

  selectedfile:File=null;

  onChange(value){
    this.selectedfile=<File>value.target.files[0];
  }
  onSubmit() {
    let fd=new FormData();
    fd.append('category_id ',this.categoryAddForm.value.category_id);
    fd.append('category_name',this.categoryAddForm.value.category_name);
    fd.append('category_img',this.selectedfile,this.selectedfile.name);

    this._data.addCategory(fd).subscribe(
      (data: Category[]) => {
        this._route.navigate(['/nav/categories']);
      }
    );
  }
  onCancel() {
    this._route.navigate(['/nav/categories']);
  }
}


