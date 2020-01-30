import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SignupsService } from '../signup/signups.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {

  constructor(private _route:Router,private _act:ActivatedRoute,private _sign:SignupsService) { }
uid:number;
  ngOnInit() {
  }
  OnEditMyProfile()
  {
    this._route.navigate(['/nav/EditUserData']);
  }
}
