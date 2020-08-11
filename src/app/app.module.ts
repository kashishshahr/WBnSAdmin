// DHRUViiiiiiiiiiiiiiiiiiiiiiii
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { routingArr } from './app.routing';
import { SignupDisplayComponent } from './signup/signup-display/signup-display.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserLoginComponent } from './user_login/user-login/user-login.component';
import { HttpClientModule } from '@angular/common/http';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomepageComponent } from './homepage/homepage/homepage.component';
import { ViewmoreComponent } from './product/viewmore/viewmore.component';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';

import { MyprofileComponent } from './myprofile/myprofile.component';
import { EdituserdataComponent } from './signup/edituserdata/edituserdata.component';
import { ProductComponent } from './product/product.component';
import { EditproductComponent } from './product/editproduct/editproduct.component';
import { UsersComponent } from './users/users.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { EditemployeeComponent } from './employee/editemployee/editemployee.component';
import { ViewmoreemployeeComponent } from './employee/viewmoreemployee/viewmoreemployee.component';

import { CustomerComponent } from './customer/customer.component';
import { CustomerdataService } from './customer/customerdata.service';
import { EditcustomerComponent } from './customer/editcustomer/editcustomer.component';
import { ViewmorecustomerComponent } from './customer/viewmorecustomer/viewmorecustomer.component';
import { CartpageComponent } from './cartpage/cartpage.component';
import { CartaddComponent } from './cartpage/cartadd/cartadd.component';
import { CarteditComponent } from './cartpage/cartedit/cartedit.component';
import { ViewmorecartpageComponent } from './cartpage/viewmorecartpage/viewmorecartpage.component';
import { CategorypageComponent } from './categorypage/categorypage.component';
import { CategoryaddComponent } from './categorypage/categoryadd/categoryadd.component';
import { CategoryeditComponent } from './categorypage/categoryedit/categoryedit.component';
import { SupplierComponent } from './supplier/supplier.component';
import { SupplieraddComponent } from './supplier/supplieradd/supplieradd.component';
import { SuppliereditComponent } from './supplier/supplieredit/supplieredit.component';
import { SupplierviewmoreComponent } from './supplier/supplierviewmore/supplierviewmore.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { PurchaseaddComponent } from './purchase/purchaseadd/purchaseadd.component';
import { PurchaseeditComponent } from './purchase/purchaseedit/purchaseedit.component';
import { PurchaseviewmoreComponent } from './purchase/purchaseviewmore/purchaseviewmore.component';

import { OrderComponent } from './order/order.component';
import { EditOrderComponent } from './order/edit-order/edit-order.component';
import { OrderdeliveryComponent } from './orderdelivery/orderdelivery.component';
import { OrderdetailComponent } from './orderdetail/orderdetail.component';

import { ForgottenPasswordComponent } from './user_login/forgotten-password/forgotten-password.component';
import { OtppageComponent } from './user_login/forgotten-password/otppage/otppage.component';
import { BookPageComponent } from './book-page/book-page.component';
import { ProductsComponent } from './products/products.component';
import { ViewmorebookComponent } from './book-page/viewmorebook/viewmorebook.component';
import { BookaddComponent } from './book-page/bookadd/bookadd.component';
import { BookeditComponent } from './book-page/bookedit/bookedit.component';
import { OrdertosupplierComponent } from './supplier/ordertosupplier/ordertosupplier.component';
import { ChartsModule } from '@progress/kendo-angular-charts';
import 'hammerjs';
import { AdminDataComponent } from './admin-data/admin-data.component';
import { MatMenuModule } from '@angular/material/menu';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { SnackbarcompComponent } from './snackbarcomp/snackbarcomp.component';
import { ThankyouComponent } from './thankyou/thankyou.component';



import 'hammerjs';
import { DashboardpageComponent } from './dashboardpage/dashboardpage.component';
import { BlogComponent } from './blog/blog.component';
import { AddblogComponent } from './blog/addblog/addblog.component';

import { MatSelectModule } from '@angular/material/select';
import { EditBlogComponent } from './blog/editblog/editblog.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    SignupDisplayComponent,
    UserLoginComponent,
    PagenotfoundComponent,
    HomepageComponent,
    ViewmoreComponent,
    ViewmorebookComponent,
    MyprofileComponent,
    EdituserdataComponent,
    AddProductComponent,
    ProductComponent,
    UsersComponent,
    EmployeeComponent,
    AddEmployeeComponent,
    EditemployeeComponent,
    DashboardpageComponent,
    ViewmoreemployeeComponent,
    CustomerComponent,
    EditcustomerComponent,

    EditproductComponent,
    OrderComponent,
    EditOrderComponent,

    ViewmorecustomerComponent,

    CartpageComponent,
    CartaddComponent,
    CarteditComponent,
    CategorypageComponent,
    CategoryaddComponent,
    CategoryeditComponent,
    SupplierComponent,
    SupplieraddComponent,
    SuppliereditComponent,
    PurchaseComponent,
    PurchaseaddComponent,
    PurchaseeditComponent,
    SupplierviewmoreComponent,
    PurchaseviewmoreComponent,
    OrderdetailComponent,
    OrderdeliveryComponent,
    ViewmorecartpageComponent,

    ForgottenPasswordComponent,
    OtppageComponent,
    BookPageComponent,
    ProductsComponent,
    ViewmorebookComponent,
    BookaddComponent,
    BookeditComponent,
    OrdertosupplierComponent,
    AdminDataComponent,
    SnackbarcompComponent,
    ThankyouComponent,
    BlogComponent,
    AddblogComponent,
EditBlogComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    routingArr,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatGridListModule,
    MatToolbarModule,

    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatCardModule,
    MatRadioModule,
    HttpClientModule,
    ChartsModule,
    MatSnackBarModule,
    MatMenuModule,
    MatSelectModule,


  ],

  entryComponents: [
    OrdertosupplierComponent,
    ViewmoreComponent,
    SupplierviewmoreComponent,
    PurchaseviewmoreComponent,
    ViewmoreComponent,
    ViewmorebookComponent,
    ViewmoreemployeeComponent,
    ViewmorecustomerComponent,
    ViewmorecartpageComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
