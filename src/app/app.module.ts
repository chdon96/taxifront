import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { FooterComponent } from './footer/footer.component';
import { SignInComponent } from './athentification/sign-in/sign-in.component';
import { SignUpComponent } from './athentification/sign-up/sign-up.component';
import { SignOutComponent } from './athentification/sign-out/sign-out.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
//import { ActivatedRoute } from '@angular/router';
//import { Location } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { CompanyComponent } from './Companies/company/company.component';

import { CompanyDetailsComponent } from './Companies/company-details/company-details.component';
import { AddCompanyComponent } from './Companies/add-company/add-company.component';

import { TaxiComponent } from './taxis/taxi/taxi.component';
import { AddtaxiComponent } from './taxis/addtaxi/addtaxi.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MainContentComponent,
    FooterComponent,
    SignInComponent,
    SignUpComponent,
    SignOutComponent,
    DashboardComponent,
    HomeComponent,
    LandingComponent,
    CompanyComponent,
    TaxiComponent,
    CompanyDetailsComponent,
    AddCompanyComponent,
    AddtaxiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
