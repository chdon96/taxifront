import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './athentification/sign-in/sign-in.component';
import { SignUpComponent } from './athentification/sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
 // { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: "signin", component: SignInComponent },
  { path: "landing", component: LandingComponent },

  { path: "signup", component: SignUpComponent },
  { path: "home", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
