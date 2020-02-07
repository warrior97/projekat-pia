import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { Question } from '../question';
import {QuestionEditComponent} from '../question-edit/question-edit.component'
import { SurveyService } from '../survey.service';
import { Quiz } from '../quiz';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  public quiz=new Quiz();


  isTest:boolean;
  @ViewChild('questionContainer', {read:ViewContainerRef,static:false}) entry: ViewContainerRef;
  
  constructor(
    private resolver: ComponentFactoryResolver,
    private surveyService:SurveyService,
    private loginService:LoginService
    ) { }

  ngOnInit() {
  }
  private addQuestion(type:string){

    let ques=new Question();
    ques.type=type;
    this.quiz.questions.push(ques);
    const factory= this.resolver.resolveComponentFactory(QuestionEditComponent)
    const componentRef = this.entry.createComponent(factory);
    componentRef.instance.isTest=this.quiz.test;
    componentRef.instance.question=ques;

  }

  addQuestionNumber(){
    this.addQuestion('number');
  }
  
  addQuestionText(){
    this.addQuestion('text');
  }
  addQuestionTextBig(){
    this.addQuestion('textarea');
  }
  addQuestionSelect(){
    this.addQuestion('select');
  }
  addQuestionCheckBox(){
    this.addQuestion('checkbox');
  }
  submitQuestionare(){

    console.log(this.quiz);
    this.quiz.username=this.loginService.user_session.username;
    this.surveyService.addSurvey(this.quiz).subscribe(data=>{
      console.log(data);
    },error=>{
      console.log(error);
    });
  }
 
}
