import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { SignupsService } from '../signups.service';
import { userCLass } from 'src/app/users/users';
import { UsersDataService } from 'src/app/users/users-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edituserdata',
  templateUrl: './edituserdata.component.html',
  styleUrls: ['./edituserdata.component.css']
})
export class EdituserdataComponent implements OnInit {

  constructor(private _route: Router, private _admin: UsersDataService) { }
  AdminPassChangeForm: FormGroup;
  adminMail: string;
  ngOnInit() {
    this.adminMail = localStorage.getItem("user_email");
    // console.log(this.adminMail);
    this.AdminPassChangeForm = new FormGroup({
      user_email: new FormControl(null),

      password_group: new FormGroup({
        user_password: new FormControl(null, [Validators.required, Validators.minLength(5)]),
        user_confirm_password: new FormControl(null)
      }, [this.passwordmatch.bind(this)]),
      user_type: new FormControl('admin'),
    });
  }


  passwordmatch(c: AbstractControl): { [s: string]: boolean } {
    const pass = c.get('user_password').value;
    const cpass = c.get('user_confirm_password').value;
    if (pass != cpass) {
      return { 'PasswordMatch': true };
    }
    return null;
  }
  onDone() {
    let userobj = {
      user_email: this.adminMail,
      user_password: this.AdminPassChangeForm.value.password_group.user_password,
      user_type: this.AdminPassChangeForm.value.user_type
    };

    console.log(userobj);
    this._admin.updateAdminPass(userobj).subscribe((data: userCLass) => {
      this._route.navigate(['/nav/MyProfile']);

      localStorage.clear();
      this._route.navigate(['']);

    });
  }

  onCancelClick() {
    this._route.navigate(['/nav/MyProfile']);
  }


}
