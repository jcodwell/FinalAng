import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ProfileInfoService} from "./profile-info.service";
import { AppComponent } from './app.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { IndividualProfilePageComponent } from './individual-profile-page/individual-profile-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    ProfilePageComponent,
    HomePageComponent,
    IndividualProfilePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ProfileInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
