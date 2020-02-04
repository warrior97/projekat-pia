import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-questionare',
  templateUrl: './questionare.component.html',
  styleUrls: ['./questionare.component.css']
})
export class QuestionareComponent implements OnInit {
  @Input()
  quiz;

  constructor() { }

  ngOnInit() {
  }
 

}
