import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { routingArr } from './app.routing';
import { SignupDisplayComponent } from './signup/signup-display/signup-display.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserLoginComponent } from './user_login/user-login/user-login.component';
import { HttpClientModule } from '@angular/common/http';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomepageComponent } from './homepage/homepage/homepage.component';
import { ViewmoreComponent } from './viewmore/viewmore.component';
import { MatInputModule, MatTableModule, MatDialogModule, MatSelectModule, MatRadioModule, MatCardModule, MatSortModule, MatPaginatorModule } from '@angular/material';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { EdituserdataComponent } from './signup/edituserdata/edituserdata.component';
import { ProductComponent } from './product/product.component';
import { UsersComponent } from './users/users.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { CustomerpageComponent } from './customerpage/customerpage.component';
import { CustomeraddComponent } from './customerpage/customeradd/customeradd.component';
import { CustomereditComponent } from './customerpage/customeredit/customeredit.component';
import { ViewmorecustmoreComponent } from './customerpage/viewmorecustmore/viewmorecustmore.component';
import { CartpageComponent } from './cartpage/cartpage.component';
import { CartaddComponent } from './cartpage/cartadd/cartadd.component';
import { CarteditComponent } from './cartpage/cartedit/cartedit.component';
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


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    SignupDisplayComponent,
    UserLoginComponent,
    PagenotfoundComponent,
    HomepageComponent,
    ViewmoreComponent,
    ViewmorecustmoreComponent,
    MyprofileComponent,
    EdituserdataComponent,
    AddProductComponent,
    ProductComponent,
    UsersComponent,
    EmployeeComponent,
    AddEmployeeComponent,
    CustomerpageComponent,
    CustomeraddComponent,
    CustomereditComponent,
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
    PurchaseviewmoreComponent
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
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,

  ],
  entryComponents: [
    ViewmoreComponent,
    ViewmorecustmoreComponent,
    SupplierviewmoreComponent,
    PurchaseviewmoreComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
