import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './athentification/sign-in/sign-in.component';
import { SignUpComponent } from './athentification/sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { TaxiComponent } from './taxis/taxi/taxi.component';
import { CompanyComponent } from './Companies/company/company.component';
import { HeaderComponent } from './header/header.component';
import { CompanyDetailsComponent } from './Companies/company-details/company-details.component';
import { AddCompanyComponent } from './Companies/add-company/add-company.component';
import { AddtaxiComponent } from './taxis/addtaxi/addtaxi.component';
const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: "signin", component: SignInComponent },
  { path: "landing", component: LandingComponent },

  { path: "signup", component: SignUpComponent },
  { path: "home", component: HomeComponent },
  { path: "taxi", component: TaxiComponent },
  { path: "companies", component: CompanyComponent },
  { path: "company/:id", component: CompanyDetailsComponent },
  { path: "addcompany", component: AddCompanyComponent },
  { path: "addtaxi", component: AddtaxiComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
