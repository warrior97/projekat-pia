import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';
import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-questionare',
  templateUrl: './questionare.component.html',
  styleUrls: ['./questionare.component.css']
})
export class QuestionareComponent implements OnInit {


  get quiz(){
    return this.surveyService.survey;
  };

  constructor(private surveyService:SurveyService) { }

  ngOnInit() {
  }
 

}
