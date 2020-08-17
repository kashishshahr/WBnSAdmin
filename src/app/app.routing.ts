import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { SignupDisplayComponent } from './signup/signup-display/signup-display.component';
import { UserLoginComponent } from './user_login/user-login/user-login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DashboardpageComponent } from './dashboardpage/dashboardpage.component';
import { HomepageComponent } from './homepage/homepage/homepage.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { EdituserdataComponent } from './signup/edituserdata/edituserdata.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { UserauthguardService } from './userauthguard.service';
import { ProductComponent } from './product/product.component';
import { UsersComponent } from './users/users.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';

import { EditproductComponent } from './product/editproduct/editproduct.component';
import { OrderComponent } from './order/order.component';
import { EditOrderComponent } from './order/edit-order/edit-order.component';
import { EditcustomerComponent } from './customer/editcustomer/editcustomer.component';
import { EditemployeeComponent } from './employee/editemployee/editemployee.component';
import { CustomerComponent } from './customer/customer.component';
import { CartpageComponent } from './cartpage/cartpage.component';
import { CartaddComponent } from './cartpage/cartadd/cartadd.component';
import { CategorypageComponent } from './categorypage/categorypage.component';
import { CategoryaddComponent } from './categorypage/categoryadd/categoryadd.component';
import { CategoryeditComponent } from './categorypage/categoryedit/categoryedit.component';
import { SupplierComponent } from './supplier/supplier.component';
import { SupplieraddComponent } from './supplier/supplieradd/supplieradd.component';
import { SuppliereditComponent } from './supplier/supplieredit/supplieredit.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { PurchaseaddComponent } from './purchase/purchaseadd/purchaseadd.component';
import { PurchaseeditComponent } from './purchase/purchaseedit/purchaseedit.component';
import { OrderdeliveryComponent } from './orderdelivery/orderdelivery.component';
import { OrderdetailComponent } from './orderdetail/orderdetail.component';

import { ForgottenPasswordComponent } from './user_login/forgotten-password/forgotten-password.component';
import { OtppageComponent } from './user_login/forgotten-password/otppage/otppage.component';
import { ProductsComponent } from './products/products.component';
import { BookPageComponent } from './book-page/book-page.component';
import { BookaddComponent } from './book-page/bookadd/bookadd.component';
import { BookeditComponent } from './book-page/bookedit/bookedit.component';
import { OrdertosupplierComponent } from './supplier/ordertosupplier/ordertosupplier.component';
import { AdminDataComponent } from './admin-data/admin-data.component';
import { BlogComponent } from './blog/blog.component';
import { AddblogComponent } from './blog/addblog/addblog.component';
import {EditBlogComponent } from './blog/editblog/editblog.component';

const arr: Routes = [
  { path: '', component: UserLoginComponent },
  { path: 'ForgotPassword', component: ForgottenPasswordComponent },
  { path: 'OtpPage/:uid?', component: OtppageComponent },

  {
    path: 'nav', canActivate: [UserauthguardService], component: MainNavComponent, children: [
      { path: '', component: DashboardpageComponent },
      { path: 'adminData', component: AdminDataComponent },
      { path: 'DashBoard', component: DashboardpageComponent },
      { path: 'users', component: UsersComponent },
      { path: 'EditUserData', component: EdituserdataComponent },
      { path: 'MyProfile', component: MyprofileComponent },


      { path: 'blog', component: BlogComponent},
      { path: 'AddBlog', component: AddblogComponent},
      { path: 'EditBlog/:blog_id', component: EditBlogComponent},


      { path: 'employees', component: EmployeeComponent },
      { path: 'AddEmp', component: AddEmployeeComponent },
      { path: 'EditEmployee/:employee_id', component: EditemployeeComponent },

      { path: 'customers', component: CustomerComponent },
      { path: 'signupDisplay', component: SignupDisplayComponent },
      { path: 'EditCustomer/:customer_id', component: EditcustomerComponent },

      { path: 'products', component: ProductComponent },
      { path: 'AddProduct', component: AddProductComponent },
      { path: 'EditProduct/:product_id', component: EditproductComponent },

      { path: 'productList', component: ProductsComponent },
      { path: 'books', component: BookPageComponent },
      { path: 'AddBook', component: BookaddComponent },
      { path: 'EditBook/:product_id', component: BookeditComponent },


      { path: 'HomePage', component: HomepageComponent},
      { path: 'MyProfile', component: MyprofileComponent },
      { path: 'EditUserData', component: EdituserdataComponent },


      { path: 'orders', component: OrderComponent },
      { path: 'EditOrder/:order_id', component: EditOrderComponent },
      { path: 'order_details/:order_id', component: OrderdetailComponent },
      { path: 'order_delivery', component: OrderdeliveryComponent },

      { path: 'cart', component: CartpageComponent },
      { path: 'cartadd', component: CartaddComponent },

      { path: 'categories', component: CategorypageComponent },
      { path: 'categoryadd', component: CategoryaddComponent },
      { path: 'categoryedit/:category_id', component: CategoryeditComponent },

      { path: 'supplier', component: SupplierComponent },
      { path: 'supplieradd', component: SupplieraddComponent },
      { path: 'supplieredit/:supplier_id', component: SuppliereditComponent },
      { path: 'ordertosuppliers', component: OrdertosupplierComponent },

      { path: 'purchase', component: PurchaseComponent },
      { path: 'purchaseadd', component: PurchaseaddComponent },
      { path: 'purchaseedit/:purchase_id', component: PurchaseeditComponent },

      { path: '**', component: PagenotfoundComponent },
    ]
  },
];
export const routingArr = RouterModule.forRoot(arr);
