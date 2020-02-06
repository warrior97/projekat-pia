import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { SurveyService } from '../survey.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private loginService:LoginService,private surveyService:SurveyService,private router:Router) { }
  get welcomeMessage():String{
    return `Welcome ${this.loginService.user_session.firstname} ${this.loginService.user_session.lastname}!`;
  }
  get surveys(){
    return this.loginService.surveys;
  }
  ngOnInit() {
  }

  take(event){
    let id=event.target.id;
    console.log(id);
    this.surveyService.survey=this.loginService.surveys.find(x=>{return x.id==id});
    if(this.surveyService.survey){
      this.router.navigate(['/questionare'])
    }
  }

}
