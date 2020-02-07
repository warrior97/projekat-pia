import { Component, OnInit, ViewContainerRef, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { LoginService } from '../login.service';
import { SurveyService } from '../survey.service';
import { Router } from '@angular/router';
import { Question } from '../question';
import { QuestionComponent } from '../question/question.component';
import { QuestionareComponent } from '../questionare/questionare.component';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {


  constructor(private loginService: LoginService,
    private surveyService: SurveyService,
    private router: Router,
    private resolver: ComponentFactoryResolver) { }

  welcomeMessage = 'Welcome to our survey app!'
  @ViewChild('quizzContainer', { read: ViewContainerRef, static: false }) entry: ViewContainerRef;
  ngOnInit() {
  }
  get surveys() {
    return this.loginService.surveys;
  }
  take(event) {
    let id = event.target.id;
    this.entry.clear();
    console.log(id);
    this.surveyService.survey = this.loginService.surveys.find(x => { return x.id == id });
    console.log(this.surveyService.survey);
    const factory = this.resolver.resolveComponentFactory(QuestionareComponent)
    const componentRef = this.entry.createComponent(factory);
    componentRef.instance.survey = this.surveyService.survey;

  }
}
