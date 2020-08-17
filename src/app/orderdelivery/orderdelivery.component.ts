import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { OrderdeliveryDataService } from './orderdelivery-data.service';
import { orderClass } from '../order/order';
import { EmployeeDataService } from 'src/app/employee/employee-data.service';
import { empClass } from 'src/app/employee/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orderdelivery',
  templateUrl: './orderdelivery.component.html',
  styleUrls: ['./orderdelivery.component.css']
})
export class OrderdeliveryComponent implements OnInit {

  order_delivery_id: any;

  displayedColumnsProduct: string[] = ['check', 'customer_name'];
  selectedProductArr: number[] = [];
  dataSourceProduct: MatTableDataSource<orderClass>;

  displayedColumnsEmployee: string[] = ['check', 'employee_name'];
  selectedEmployeeID: number = 0;
  dataSourceEmployee: MatTableDataSource<empClass>;

  constructor(private _productAssignedData: OrderdeliveryDataService, private _emp: EmployeeDataService, private _router: Router) {
    this.dataSourceProduct = new MatTableDataSource();
    this.dataSourceEmployee = new MatTableDataSource();
  }

  ngOnInit(): void {
    this._productAssignedData.getDeliveryNotByEmp().subscribe(
      (dataProduct: any[]) => {
        console.log(dataProduct)
        this.dataSourceProduct.data = dataProduct;
      }
    );

    this._emp.getAllEmployee().subscribe(
      (dataEmployee: any[]) => {
        this.dataSourceEmployee.data = dataEmployee;
      }
    );
  }

  onRadioBtnChangeEmployee(item: number) {
    this.selectedEmployeeID = item;
  }

  onCheckboxChangeProduct(item: orderClass) {
    console.log(item)
    if (this.selectedProductArr.find(x => x == item.order_id)) {
      console.log(this.selectedProductArr)
      this.selectedProductArr.splice(this.selectedProductArr.indexOf(item.order_id), 1);
    }
    else {
      this.selectedProductArr.push(item.order_id);
    }
  }

  onSubmit() {
    if (this.dataSourceProduct.data.length > 0) {
      let objProductAssigned = {
        'selectedEmployeeID': this.selectedEmployeeID,
        'selectedProductArr': this.selectedProductArr
      };

      this._productAssignedData.addOrder_delivery(objProductAssigned).subscribe(
        (x: any) => {
          if (x.insertId > 0) {
            alert('Successfully Assgined');
            this._productAssignedData.getDeliveryNotByEmp().subscribe(
              (dataProduct: any[]) => {
                console.log(dataProduct)
                this.dataSourceProduct.data = dataProduct;
              }
            );
          }
        });

    }
  }

}

