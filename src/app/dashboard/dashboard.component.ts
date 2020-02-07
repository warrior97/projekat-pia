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

  constructor(private loginService: LoginService, private surveyService: SurveyService, private router: Router) { }

  get userType() {
    if (this.loginService.user_session)
      return this.loginService.user_session.type;
    else return 'none'
  }




  get welcomeMessage(): String {
    return `Welcome ${this.loginService.user_session.firstname} ${this.loginService.user_session.lastname}!`;
  }

  ngOnInit() {
  }



}
