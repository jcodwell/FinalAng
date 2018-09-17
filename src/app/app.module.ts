import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ProfileInfoService} from "./profile-info.service";
import { AppComponent } from './app.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AppRoutingModule } from './/app-routing.module';
import { ProfileDesriptionComponent } from './profile-desription/profile-desription.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    ProfilePageComponent,
    HomePageComponent,
    ProfileDesriptionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ProfileInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
