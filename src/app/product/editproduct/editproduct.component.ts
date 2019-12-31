import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { prod } from '../product';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  constructor(private _router: Router, private _act: ActivatedRoute, private _proddata: ProductService) { }
  p_id: number;
  p_name: string;
  p_price: number;
  p_qty: number;
  p_desc: Text;
  img:File;

  ngOnInit() {

    this.p_id = this._act.snapshot.params['product_id'];
    this._proddata.getProductById(this.p_id).subscribe(
      (data: prod[]) => {
        this.p_id = data[0].product_id;
        this.p_name = data[0].product_name;
        this.p_price = data[0].product_price;
        this.p_qty = data[0].product_qty;
        this.p_desc = data[0].product_desc;
        this.img = data[0].img;

      }
    );
  }
  onSubmit(f) {
    console.log(f.value.id);
    let item = new prod(f.value.id, f.value.name, f.value.price, f.value.qty, f.value.p_soh,f.value.img);

    this._proddata.updateProductData(item).subscribe(
      (data: prod[]) => {
        this._router.navigate(['product']);
      }
    );
  }
  onAdd() {
    let item = new prod(this.p_id, this.p_name, this.p_price, this.p_qty, this.p_desc,this.img);
    this._proddata.updateProductData(item).subscribe(
      (data: prod[]) => {
        this._router.navigate([""]);
      }
    );
  }
  onCancel() {
    this._router.navigate([""]);
  }

}
