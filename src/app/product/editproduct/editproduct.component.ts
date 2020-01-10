import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { prod } from '../product';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  constructor(private _router: Router, private _act: ActivatedRoute, private _proddata: ProductService) { }
  product_id: number;
  product_img: String = "";
  imageURl: String = "http://localhost:3000/images";
  EditProductForm: FormGroup;
  ngOnInit() {

    this.product_id = this._act.snapshot.params['product_id'];


    this.EditProductForm = new FormGroup({
      product_id: new FormControl,
      product_name: new FormControl(null, [Validators.required]),
      product_price: new FormControl(null),
      product_qty: new FormControl(null),
      product_mfg: new FormControl(null),
      product_desc: new FormControl(null),
      product_img: new FormControl(null)
    });
    this._proddata.getProductById(this.product_id).subscribe(
      (data: prod[]) => {
        this.editProductFormDataBind(data[0]);

        //this.product_img=data[0].product_img;
        console.log(data[0].product_img);
      }
    );
  }
  editProductFormDataBind(item: prod) {
    this.EditProductForm.patchValue({
      product_id: item.product_id,
      product_name: item.product_name,
      product_price: item.product_price,
      product_qty: item.product_qty,
      product_mfg: item.product_mfg,
      product_desc: item.product_desc,
      product_img: item.product_img
    });
    this.imageURl=this.imageURl+'/'+item.product_img;
      console.log(this.imageURl);
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
    console.log(this.selectedfile);
  }
  onCancel() {
    this._router.navigate(["/nav/products"]);
  }

}
