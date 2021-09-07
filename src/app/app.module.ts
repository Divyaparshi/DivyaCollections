import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { TrendyapparelComponent } from './trendyapparel/trendyapparel.component';
import { PrettyjewelryComponent } from './prettyjewelry/prettyjewelry.component';
import { CustomizedgiftsComponent } from './customizedgifts/customizedgifts.component';
import { StylishbagsComponent } from './stylishbags/stylishbags.component';
import { PujasilveritemsComponent } from './pujasilveritems/pujasilveritems.component';
import { MaggamworkblousesComponent } from './maggamworkblouses/maggamworkblouses.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FooterComponent } from './footer/footer.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    TrendyapparelComponent,
    PrettyjewelryComponent,
    CustomizedgiftsComponent,
    StylishbagsComponent,
    PujasilveritemsComponent,
    MaggamworkblousesComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
