import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  
  constructor() { }

  ngOnInit() {
  }
//Po referenci
  @Input()
  public question;

}
