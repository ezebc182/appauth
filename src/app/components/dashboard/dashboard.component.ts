import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {
  profile: any;

  constructor( private auth: AuthService) { }

  ngOnInit() {
     if (this.auth.userProfile) {
       this.profile = this.auth.userProfile;
     } else {
       this.auth.getProfile((err, profile) => {
         this.profile = profile;
       });
     }
  }

}
