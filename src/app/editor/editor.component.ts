import { Component, OnInit } from '@angular/core';
import { Question } from '../question';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  questions=[];
  title:string;
  description:string;
  isTest:boolean;
  constructor() { }

  ngOnInit() {
  }
  private addQuestion(type:string){
    let ques=new Question();
    ques.type=type;
    this.questions.push(ques);

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
 
}
