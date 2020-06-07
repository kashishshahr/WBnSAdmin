import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {



  constructor(private _route: Router) { }
  ngOnInit() {
  }
  onBookClick() {
    this._route.navigate(['/nav/books']);

  }
  onStationeryClick() {
    this._route.navigate(['/nav/products']);
  }

}
