import { Component, OnInit } from '@angular/core';
import {ProfileInfoService } from '../profile-info.service';
import {Profile} from '../profile';


const staticProfiles = [
  {
    "id": 1,
    "Profile": {
      "name": "Jada Codwell",
      "coverImage": "/assets/jada.jpg",
      "Desription": "About Me: I love Chocolate"
                }
   },
   {
    "id": 2,
    "Profile": {
      "name": "Sidharth Dewan",
      "coverImage": "/assets/sid.jpg",
      "Desription": "About Me: I don't like Jada"
                }     
   },
   {
    "id": 3,
    "Profile": {
      "name": "Joseph Park",
      "coverImage": "/assets/joseph.jpg",
      "Desription":"About Me: I like Jada"
                }     
   }
  ]; 

@Component({
  selector: 'app-profile-desription',
  templateUrl: './profile-desription.component.html',
  styleUrls: ['./profile-desription.component.css']
})
export class ProfileDesriptionComponent implements OnInit {
  ProfileInfo: any[];

  constructor(private _profileinfoservice: ProfileInfoService) { }

  ngOnInit() {

   this.ProfileInfo = staticProfiles;

  }

}
