// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Import HomeComponent
import { PartnersComponent } from './partners/partners.component';
import { AboutComponent } from './about/about.component';
import { JoinUsComponent } from './join-us/join-us.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Use HomeComponent for the empty route
  { path: 'partners', component: PartnersComponent },
  { path: 'about', component: AboutComponent },
  { path: 'join-us', component: JoinUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
