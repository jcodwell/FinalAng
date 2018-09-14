import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Profile } from './profile';
//import { Observable } from 'rxjs/Rx/Observable';
//import 'rxjs/add/operator/map';
import { Observable } from 'rxjs'
//import { Observable } from 'rxjs/add/operator/map'
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'


})


export class ProfileInfoService {
  private _profileUrl = '../assets/profile.json';
  
  
constructor(private _http: Http) { }
  getprofile(id: number): Observable<Profile> {
    return this._http.get(this._profileUrl).pipe(map((response) => <Profile>response.json()));
  }

}
