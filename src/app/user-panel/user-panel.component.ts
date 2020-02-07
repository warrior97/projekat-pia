import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { SurveyService } from '../survey.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {


  constructor(private loginService: LoginService, private surveyService: SurveyService, private router: Router) { }

welcomeMessage='Welcome to our survey app!'
  ngOnInit() {
  }
  get surveys() {
    return this.loginService.surveys;
  }
  take(event) {
    let id = event.target.id;
    console.log(id);
    this.surveyService.survey = this.loginService.surveys.find(x => { return x.id == id });
    if (this.surveyService.survey) {
      this.router.navigate(['/questionare'])
    }
  }
}
