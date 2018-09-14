import { Component, OnInit } from '@angular/core';
import {ProfileInfoService } from '../profile-info.service';
import {Profile} from '../profile';

const staticProfiles = [
  {
    "id": 1,
    "Profile": {
      "name": "Jada Codwell",
      "coverImage": "/assets/jada.jpg",
      "Email": "jada.codwell@gmail.com",
      "Address": "1234 Not",
      "Desription": "I love Chocolate"
                }
   },
   {
    "id": 2,
    "Profile": {
      "name": "Sidharth Dewan",
      "coverImage": "/assets/sid.jpg",
      "Email": "sidharthdewan@me.com",
      "Address": "456!!",
      "Desription": "I don't like Jada"
                }     
   },
   {
    "id": 3,
    "Profile": {
      "name": "Joseph Park",
      "coverImage": "/assets/jp.jpg",
      "Email": "jp@gmail.com",
      "Address": "1234 Not",
      "Desription": "Shh.. I am in love with Jada"
                }     
   }
  ]; 

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})

export class ProfilePageComponent implements OnInit {

  ProfileInfo: any[];

  constructor(private _profileinfoservice: ProfileInfoService) { }

  ngOnInit() {
   /* this._profileinfoservice.getprofile()
   .subscribe(response => {
    console.log(response);
    this.ProfileInfo = response
   }); */
   this.ProfileInfo = staticProfiles;


  }

}
