import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { QuestionareComponent } from './questionare/questionare.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'signin',
    component:LoginComponent
  },
  {
    path:'signup',
    component:RegisterComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  },
  {
    path:'questionare',
    component:QuestionareComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
