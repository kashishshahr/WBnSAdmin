import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { prod } from '../product';
import { CategorydataService } from 'src/app/categorypage/categorydata.service';
import { Category } from 'src/app/categorypage/category';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  constructor(private _router: Router,
    private _act: ActivatedRoute,
    private _proddata: ProductService, private _catData: CategorydataService) { }
  product_id: number;

  img1: string = '';
  CategoryDataArr: Category[] = [];

  // URl: String = "http://localhost:3000/images";
  // imageURL: string;

  EditProductForm: FormGroup;
  producturl: string = "http://localhost:3000/";

  ngOnInit() {

    this.product_id = this._act.snapshot.params['product_id']
    this.EditProductForm = new FormGroup({
      product_id: new FormControl(null),
      product_name: new FormControl(null, [Validators.required,Validators.pattern('[0-9a-zA-Z -/]*')]),
      fk_cat_id: new FormControl(null),
      product_price: new FormControl(null,[Validators.required]),
      product_qty: new FormControl(null,[Validators.required]),
      product_mfg: new FormControl(null,[Validators.required]),
      product_desc: new FormControl(null,[Validators.required]),
      product_img: new FormControl(null)
    });

    this._catData.getAllCategory().subscribe(
      (data: Category[]) => {
        this.CategoryDataArr = data;
      }
    );

    this._proddata.getProductById(this.product_id).subscribe(
      (data: prod) => {
        console.log(data)
        this.editProductFormDataBind(data[0]);
      }
    );

  }

  editProductFormDataBind(item: prod) {
    this.img1 = item.product_img;
    this.producturl = environment.url + item.product_img;
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
    console.log(this.EditProductForm.value);
  }

  onSubmit() {
    console.log(this.EditProductForm.value);
    let fd = new FormData();
    fd.append('product_name', this.EditProductForm.value.product_name);
    fd.append('product_price', this.EditProductForm.value.product_price);
    fd.append('product_qty', this.EditProductForm.value.product_qty);
    fd.append('product_mfg', this.EditProductForm.value.product_mfg);
    fd.append('product_desc', this.EditProductForm.value.product_desc);
    if (this.selectedfile != null) {
      fd.append('pic', this.selectedfile, this.selectedfile.name);
    }
    else {
      fd.append('pic', this.EditProductForm.get('product_img').value);
    }
    fd.append('fk_cat_id', this.EditProductForm.value.fk_cat_id);

    this._proddata.updateProductData(this.product_id, fd).subscribe(
      (data: prod) => {
        // alert("SUCCESSSS");
console.log(data);

        this._router.navigate(['/nav/products']);

      }
    );

  }
  selectedfile: File = null;

  onChange(value) {
    this.selectedfile = <File>value.target.files[0];

    // this.prod_img = this.selectedfile.name;
    // this.imageURL = this.URl + '/' + this.prod_img;
    // console.log(this.imageURL);
  }

  onCancel() {
    this._router.navigate(["/nav/productList"]);
  }

}
