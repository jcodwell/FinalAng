import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-individual-profile-page',
  templateUrl: './individual-profile-page.component.html',
  styleUrls: ['./individual-profile-page.component.css']
})
export class IndividualProfilePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  this._profileinfoservice.getprofile(1).subscribe(response => this.ProfileInfo = response);
  }

}
