import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FooterComponent } from './footer/footer.component';

import { MaggamworkblousesComponent} from './maggamworkblouses/maggamworkblouses.component';
import { PujasilveritemsComponent } from './pujasilveritems/pujasilveritems.component';
import { StylishbagsComponent } from './stylishbags/stylishbags.component';
import { CustomizedgiftsComponent } from './customizedgifts/customizedgifts.component';
import { PrettyjewelryComponent } from './prettyjewelry/prettyjewelry.component';
import { TrendyapparelComponent } from './trendyapparel/trendyapparel.component';



import { SignupComponent} from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';



const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'footer',component:FooterComponent},


  {path:'trendyapparel',component:TrendyapparelComponent},
  {path:'prettyjewelry',component:PrettyjewelryComponent},
  {path:'customizedgifts',component:CustomizedgiftsComponent},
  {path:'stylishbags',component:StylishbagsComponent},
  {path:'maggamworkblouses',component:MaggamworkblousesComponent},
  {path:'pujasilveritems',component:PujasilveritemsComponent},

  
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',component:PagenotfoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
