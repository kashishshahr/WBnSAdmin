import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { prod } from '../product';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  // proarr: prod[] = [];
  // p_id: number;
  // p_name: string;
  // p_price: number;
  // p_qty: number;
  // p_soh: number;
  constructor(private _Router: Router, private proddata: ProductService, private _act: ActivatedRoute) { }
  ngOnInit() {  }

  onSubmit(f) {
    // console.log(f);
    let fd=new FormData();
    fd.append('product_id',f.value.product_id);
    fd.append('product_name',f.value.product_name);
    fd.append('product_price',f.value.product_price);
    fd.append('product_qty',f.value.product_qty);
    fd.append('product_mfg',f.value.product_mfg);

    fd.append('product_desc',f.value.product_desc);
    fd.append('product_img',this.selectedfile,this.selectedfile.name);
    console.log(fd);
    this.proddata.addProduct(fd).subscribe(
      (data: prod[]) => {
        // console.log(data);
        this._Router.navigate(['/nav/products']);
      }
    );
  }
  onCancel() {
    this._Router.navigate(['/nav/products']);
  }


  selectedfile:File=null;

  onChange(value){
    this.selectedfile=<File>value.target.files[0];
  }
  // onAddtoCart(item) {
  //   this.p_id=item.p_id;
  //   this.p_name=item.p_name;
  //   this.p_price=item.p_price;
  //   this.p_qty=item.p_qty;
  //   this.p_soh=item.p_soh;
  // }

}
