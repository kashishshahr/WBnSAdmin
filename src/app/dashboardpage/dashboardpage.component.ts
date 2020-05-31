import { Component } from '@angular/core';
import { UsersDataService } from '../users/users-data.service';
import { userCLass } from '../users/users';

class model {
  constructor(public kind: string, public share: string) { }
}

@Component({
  selector: 'app-dashboardpage',
  templateUrl: './dashboardpage.component.html',
  styleUrls: ['./dashboardpage.component.css']
})

export class DashboardpageComponent {
  public data: model[] = [];
  public userData: any[];
  constructor(private _user: UsersDataService) { }

  ngOnInit() {
    this._user.getAllUser().subscribe(
      (_data: any[]) => {
        this.userData = _data;
        for (let i = 0; i < _data.length; i++) {
          this.data.push(
            new model(
              this.userData[i].user_email,
              this.userData[i].user_password
            )
          );
        }
      }
    );
  }

}
