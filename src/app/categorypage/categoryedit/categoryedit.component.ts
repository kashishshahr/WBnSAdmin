import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategorydataService } from '../categorydata.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../category';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-categoryedit',
  templateUrl: './categoryedit.component.html',
  styleUrls: ['./categoryedit.component.css']
})
export class CategoryeditComponent implements OnInit {

  category_id: number;
  CategoryUpdateForm: FormGroup;
  img1: string = '';
  producturl: string = "http://localhost:3000/";

  constructor(private _route: Router, private _data: CategorydataService, private _activate_route: ActivatedRoute) { }

  ngOnInit() {
    this.category_id = this._activate_route.snapshot.params['category_id'];
    this.CategoryUpdateForm = new FormGroup({
      category_id: new FormControl,
      category_name: new FormControl(null, [Validators.required, Validators.pattern('[0-9a-zA-Z -/]*')]),
      category_img: new FormControl(null)
    });
    this._data.getCategorybyid(this.category_id).subscribe(
      (data: Category) => {

        this.formDataBind(data[0]);
      }
    );
  }
  formDataBind(item: Category) {
    this.img1 = item.category_img;
    this.producturl = environment.url + item.category_img;
    this.CategoryUpdateForm.patchValue({
      category_id: item.category_id,
      category_name: item.category_name,
      category_img: item.category_img
    });
  }

  selectedfile: File = null;

  onChange(value) {
    this.selectedfile = <File>value.target.files[0];
  }


  onCategoryEdit() {
    let fd = new FormData();
    fd.append('category_name', this.CategoryUpdateForm.value.category_name);
    if (this.selectedfile != null) {
      fd.append('pic', this.selectedfile, this.selectedfile.name);
    }
    else {

      fd.append('pic', this.CategoryUpdateForm.get('category_img').value);
    }
    this._data.updateCategory(this.category_id, fd).subscribe(
      (data: Category) => {
        this._route.navigate(['/nav/categories']);
      }
    );
  }
  onCancel() {
    this._route.navigate(['/nav/categories']);
  }
}
