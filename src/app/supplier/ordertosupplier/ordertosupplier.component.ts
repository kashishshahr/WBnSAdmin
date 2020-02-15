import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { bookClass } from 'src/app/book-page/book';
import { supplier } from '../supplier';
import { ForgettenPasswordDataService } from 'src/app/user_login/forgotten-password/forgetten-password-data.service';

@Component({
  selector: 'app-ordertosupplier',
  templateUrl: './ordertosupplier.component.html',
  styleUrls: ['./ordertosupplier.component.css']
})
export class OrdertosupplierComponent implements OnInit {

  constructor(private mail:ForgettenPasswordDataService,private _dialogRef: MatDialogRef<OrdertosupplierComponent>,
    @Inject(MAT_DIALOG_DATA) public data: supplier, ) { }


  ngOnInit() {

  }

  email = new FormControl(this.data.supplier_email, [Validators.required, Validators.email]);
subject=new FormControl(null,[Validators.required]);
message=new FormControl(null,[Validators.required]);
getMailErrorMessage() {
  return this.email.hasError('required') ? 'You must enter a value' :
    this.email.hasError('email') ? 'Not a valid email' :
      '';

}
getErrorMessage() {
  return this.subject.hasError('required') ? 'You must enter a Subject' :
    '';

}
getMessageErrorMessage() {
  return this.message.hasError('required') ? 'You must enter a Message' :
    '';

}
  onDoneClick()
  {
this.mail.sendMail(this.email.value,this.subject.value,this.message.value).subscribe(
  (data)=>{
this._dialogRef.close();
});
  }

}