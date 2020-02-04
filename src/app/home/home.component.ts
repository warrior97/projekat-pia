import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Quiz } from '../quiz';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  quiz: Quiz;

  constructor(private router: Router) {
    this.quiz = new Quiz();
    this.quiz.name = 'Boban';
    this.quiz.description = 'Hello';
    this.quiz.title = 'Best QUIZ eVER';
    this.quiz.questions = [
      {
        name: 'q1',
        question: 'Hmm',
        type:'text',
        answer:'aaa',
        choices:[],
        correct: ['abc'],
        randomize:true,
        points:100
      },
      {
        name: 'q2',
        question: 'sgsdfgdg',
        type:'radio',
        answer:'aaa',
        choices:['hmm'],
        correct: ['abc'],
        randomize:true,
        points:100
      }
    ]

  }

  ngOnInit() {
  }

  navigateSignIn(event) {
    this.router.navigate(['/signin'])
  }
  navigateSignUp(event) {
    this.router.navigate(['/signup'])
  }
}
