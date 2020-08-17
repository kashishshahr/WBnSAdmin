import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginsService } from '../logins.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  loginForm: FormGroup;

  showPassw: string = "password";
  constructor(private _route: Router, private _login: LoginsService) { }
  ngOnInit() {
    this.showPassw = 'password';
    this.loginForm = new FormGroup({
      user_email: new FormControl(null, [Validators.required, Validators.email]),
      user_password: new FormControl(null, [Validators.required])
    });
  }
  id: number = 1;
  onLogin() {
    this._login.login(this.loginForm.value).subscribe(
      (data: any) => {
        // console.log(data);
        if (data.length == 1) {
          // alert('valid');
          localStorage.setItem('user_email', this.loginForm.get('user_email').value);
          this._route.navigate(['nav']);
        }
        else {
          alert('invalid');

        }
      }
    );
  }
  hide = true;
  onShowPass() {
    if (this.hide == true) {
      this.hide = false;
    } else {
      this.hide = true;

    }

  }
}
