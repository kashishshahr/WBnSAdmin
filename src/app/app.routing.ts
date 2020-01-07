import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { SignupDisplayComponent } from './signup/signup-display/signup-display.component';
import { UserLoginComponent } from './user_login/user-login/user-login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomepageComponent } from './homepage/homepage/homepage.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { EdituserdataComponent } from './signup/edituserdata/edituserdata.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { UserauthguardService } from './userauthguard.service';
import { ProductComponent } from './product/product.component';
import { UsersComponent } from './users/users.component';
import { EmployeeComponent } from './employee/employee.component';
import { CustomerComponent } from './customer/customer.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { EditproductComponent } from './product/editproduct/editproduct.component';
import { OrderComponent } from './order/order.component';
import { AddOrderComponent } from './order/add-order/add-order.component';
import { EditOrderComponent } from './order/edit-order/edit-order.component';
import { EditcustomerComponent } from './customer/editcustomer/editcustomer.component';
import { EditemployeeComponent } from './employee/editemployee/editemployee.component';
const arr: Routes = [
  { path: '', component: UserLoginComponent },
  {
    path: 'nav', canActivate:[UserauthguardService], component: MainNavComponent, children: [
      { path: '', component: HomepageComponent },
      { path: 'users', component: UsersComponent },

      { path: 'employees', component: EmployeeComponent },
      { path: 'AddEmp', component: AddEmployeeComponent },
      { path: 'EditEmployee/:employee_id', component: EditemployeeComponent },


      { path: 'customers', component:  CustomerComponent},
      { path: 'signupDisplay', component: SignupDisplayComponent },
      { path: 'EditCustomer/:customer_id', component:  EditcustomerComponent},

      { path: 'products', component: ProductComponent},
      { path: 'AddProduct', component: AddProductComponent },
      { path: 'EditProduct/:product_id', component: EditproductComponent },

      { path: 'HomePage', component: HomepageComponent },
      { path: 'MyProfile', component: MyprofileComponent },
      { path: 'EditUserData', component: EdituserdataComponent },

      { path: 'orders', component:OrderComponent },
      { path: 'AddOrder', component:AddOrderComponent},
      { path: 'EditOrder/:order_id', component:EditOrderComponent},


      { path: '**', component: PagenotfoundComponent },
    ]
  },
];
export const routingArr = RouterModule.forRoot(arr);
