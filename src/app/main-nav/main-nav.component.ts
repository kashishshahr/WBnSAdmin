import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  user_email: string = "";
  user_var:number;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,private _route:Router) { }
  ngOnInit() {
    this.user_email = localStorage.getItem('user_email');
  this.user_var=this.user_email.indexOf('@');
  // console.log(this.user_var);

    this.user_email=this.user_email.substring(0,this.user_var);
  }
  onLogOut(){
    localStorage.clear();
    this._route.navigate(['']);
  }
}
