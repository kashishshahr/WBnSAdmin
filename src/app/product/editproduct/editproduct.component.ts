import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { prod } from '../product';
import { CategorydataService } from 'src/app/categorypage/categorydata.service';
import { Category } from 'src/app/categorypage/category';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  constructor(private _router: Router, private _act: ActivatedRoute, private _proddata: ProductService, private _catData: CategorydataService) { }
  product_id: number;
  product_img: String = "";
  CategoryDataArr: Category[] = [];
  URl: String = "http://localhost:3000/images";
  imageURL: string;
  EditProductForm: FormGroup;
  ngOnInit() {

    this.product_id = this._act.snapshot.params['product_id']
    this.EditProductForm = new FormGroup({
      product_id: new FormControl(null),
      product_name: new FormControl(null, [Validators.required]),
      fk_cat_id: new FormControl(null),
      product_price: new FormControl(null),
      product_qty: new FormControl(null),
      product_mfg: new FormControl(),
      product_desc: new FormControl(null),
      product_img: new FormControl(null)
    });

    this._catData.getAllCategory().subscribe(
      (data: Category[]) => {
        this.CategoryDataArr = data;
      }
    );

    this._proddata.getProductById(this.product_id).subscribe(
      (data: prod[]) => {
        this.editProductFormDataBind(data[0]);
      }
    );
  }
  prod_img: string;
  editProductFormDataBind(item: prod) {
    console.log(item.product_mfg)
    this.EditProductForm.patchValue({
      product_id: item.product_id,
      product_name: item.product_name,
      fk_cat_id: item.fk_cat_id,
      product_price: item.product_price,
      product_qty: item.product_qty,
      product_mfg: item.product_mfg,
      product_desc: item.product_desc,
      product_img: item.product_img
    });
    this.prod_img = item.product_img;
    this.imageURL = this.URl + '/' + this.prod_img;
  }
  onSubmit() {
    this._proddata.updateProductData(this.EditProductForm.value).subscribe(
      (data: prod[]) => {
        this._router.navigate(['/nav/products']);
      }
    );
  }
  selectedfile: File = null;

  onChange(value) {
    this.selectedfile = <File>value.target.files[0];
    this.prod_img = this.selectedfile.name;
    this.imageURL = this.URl + '/' + this.prod_img;
    console.log(this.imageURL);
  }
  onCancel() {
    this._router.navigate(["/nav/products"]);
  }

}
