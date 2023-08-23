import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { HomeComponent } from './home/home.component';
import { ResisterComponent } from './login/resister/resister.component';

const routes: Routes = [
    { path : "", component : WelcomepageComponent},
    { path: "home", component: HomeComponent },
    { path: "login/Resister", component: ResisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
