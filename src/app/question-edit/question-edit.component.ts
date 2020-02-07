import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../question';

@Component({
  selector: 'app-question-edit',
  templateUrl: './question-edit.component.html',
  styleUrls: ['./question-edit.component.css']
})
export class QuestionEditComponent implements OnInit {
  @Input()
  isTest:boolean;

  @Input()
  question:Question;
  constructor() { }


  get choices(){
    return this.question.choices;
  }
  ngOnInit() {
  }
  addOption(){
    this.question.choices.push({name:'',val:false});
  }

}
