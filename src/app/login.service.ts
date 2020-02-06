import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Utility} from './utility';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //Session storage
  private _user_session=undefined;
  public surveys;

  public user_logged=false;

  constructor(private http:HttpClient) { }

  //authentication


  public set user_session(value){
    this._user_session=value;
    Utility.getQuestions(this.http).subscribe(data=>{
      console.log(data);
      this.surveys=data.surveys;
    },error=>{
      console.log(error);
    })
    //LoadQuestions

  }
  public get user_session(){
    return this._user_session;
  }
  public signIn(obj) {
    let {username,password}= obj;
    return this.http.post<any>('/api/users', {
      username,password
    })
  }

}
