import { Component, OnInit } from '@angular/core';
import {ProfileInfoService } from '../profile-info.service';
import { Profile} from '../profile';
@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  ProfileInfo: Profile;

  constructor(private _profileinfoservice: ProfileInfoService) { }

  ngOnInit() {
    this._profileinfoservice.getprofile(1).subscribe(response => this.ProfileInfo = response);

  }

}
