import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { ProfileDesriptionComponent } from './profile-desription/profile-desription.component';
import { HomePageComponent } from './home-page/home-page.component';


@NgModule({
  
  imports: [
    RouterModule.forRoot([
        { path: 'Home', component: HomePageComponent },
        { path: 'desription', component: ProfileDesriptionComponent }
    ])
  ],

exports: [ RouterModule ]

})


export class AppRoutingModule { }
