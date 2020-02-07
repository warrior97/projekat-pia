import { Component, OnInit, Input, AfterContentInit, Output, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
import { SurveyService } from '../survey.service';
import { QuestionComponent } from '../question/question.component';
import { Utility } from '../utility';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-questionare',
  templateUrl: './questionare.component.html',
  styleUrls: ['./questionare.component.css']
})
export class QuestionareComponent implements OnInit {
  _survey
  answers = []
  @ViewChild('questionContainer', { read: ViewContainerRef, static: false }) entry: ViewContainerRef;



  constructor(private loginService:LoginService,
    private surveyService: SurveyService,
    private resolver: ComponentFactoryResolver) { }
  ngOnInit() {

  }
  @Input()
  set survey(value) {
    this._survey = value;
    // setTimeout(()=>{this.generateSurvey();},1000)

  }
  get survey() {
    return this._survey;
  }

  ngAfterContentInit() {
    setTimeout(() => {
      this.generateSurvey();
    }, 1500)


  }
  public generateSurvey() {


    console.log(this._survey)
    for (let question of this.survey.questions) {
      const factory = this.resolver.resolveComponentFactory(QuestionComponent)
      const componentRef = this.entry.createComponent(factory);
      componentRef.instance.question = question;
    }

  }
  submit() {
    let answers = [];
    let repsonse={
      id:this._survey.id,
      answers,
      points:0
    }
    let points = 0;
    let point=0;
    for (let question of this.survey.questions) {
      switch (question.type) {
        case 'text':
        case 'number':
          point = question.reply == question.answer ? question.points : 0;
          answers.push({
            question,
            point
          })
          points+=point;
          break;
        case 'select':
          point = question.reply == question.selected ? question.points : 0;
          answers.push({
            question,
            point
          })
          points+=point;
          break;
          case 'checkbox':
            question.choices.forEach((x,index) => {
              point=x.val==x.answer?question.points : 0;
              points+=point;
            });
      }
    }
    repsonse.points=points;
    let username=this.loginService.user_session.username;
    this.surveyService.submitResponse(username,repsonse).subscribe(data=>{
      console.log(data);
    },error=>{
      console.log(error);
    })
    console.log(points)
  }
}
