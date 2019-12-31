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
const arr: Routes = [
  { path: '', component: UserLoginComponent },
  {
    path: 'nav', canActivate:[UserauthguardService], component: MainNavComponent, children: [
      { path: '', component: HomepageComponent },
      { path: 'signupDisplay', component: SignupDisplayComponent },
      { path: 'users', component: UsersComponent },
      { path: 'employees', component: EmployeeComponent },
      { path: 'customers', component:  CustomerComponent},
      { path: 'AddEmp', component: AddEmployeeComponent },
      { path: 'products', component: ProductComponent},
      { path: 'HomePage', component: HomepageComponent },
      { path: 'MyProfile', component: MyprofileComponent },
      { path: 'EditUserData', component: EdituserdataComponent },
      { path: 'AddProduct', component: AddProductComponent },
      { path: '**', component: PagenotfoundComponent },
    ]
  },
];
export const routingArr = RouterModule.forRoot(arr);
