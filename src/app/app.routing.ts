import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

// import { ComponentsComponent } from './components/components.component';
// import { ProfileComponent } from './examples/profile/profile.component';
// import { SignupComponent } from './examples/signup/signup.component';
// import { LandingComponent } from './examples/landing/landing.component';
// import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';

import { MainComponent } from './components/main/main.component';
import { ProjectComponent } from './components/project/project.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { OpenWeatherApiComponent } from './components/open-weather-api/open-weather-api.component';

const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',             component: MainComponent },
    { path: 'project',     component: ProjectComponent },
    { path: 'about-us',     component: AboutUsComponent },
    { path: 'open-weather-api',     component: OpenWeatherApiComponent },

    // { path: 'user-profile',     component: ProfileComponent },
    // { path: 'signup',           component: SignupComponent },
    // { path: 'landing',          component: LandingComponent },
    // { path: 'nucleoicons',      component: NucleoiconsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
