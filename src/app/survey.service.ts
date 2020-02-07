import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor(private http:HttpClient) { }
  survey;
  addSurvey(survey){
    return this.http.put('/api/surveys',{...survey})
  }
  submitResponse(username,response){
    return this.http.put('/api/responses',{username,response})
  }
}
