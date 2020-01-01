import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CartdataService } from '../cartdata.service';
import { Router } from '@angular/router';
import { cart } from '../cart';

@Component({
  selector: 'app-cartadd',
  templateUrl: './cartadd.component.html',
  styleUrls: ['./cartadd.component.css']
})
export class CartaddComponent implements OnInit {
  cartAddForm: FormGroup;

  constructor(private _data: CartdataService, private _route: Router) { }

  ngOnInit() {
    this.cartAddForm = new FormGroup({
      fk_user_email: new FormControl(null),
      fk_product_id: new FormControl(null)
    });
  }
  onCartAdd() {
    this._data.addCart(this.cartAddForm.value).subscribe(
      (data: cart[]) => {
        this._route.navigate(['/nav/cart']);
      }
    );
  }
}
