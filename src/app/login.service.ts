import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Utility } from './utility';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //Session storage
  private _user_session = undefined;
  public surveys;
  public requests;
  public user_logged = false;

  constructor(private http: HttpClient) { }

  //asuthentication


  public set user_session(value) {
    this._user_session = value;
    Utility.getQuestions(this.http).subscribe(data => {
      console.log(data);
      this.surveys = data.surveys;
    }, error => {
      console.log(error);
    })
    if(!value){
      return;
    }
    if (value.type == 'admin') {
      Utility.getRequests(this.http).subscribe(data => {
        if (data.success) {
          console.log(data.requests)
          this.requests = data.requests;
        }
        else {
          console.log(data);

        }
      }, error => {
        console.log(error);
      })
    } else {

    }
    //LoadQuestions

  }
  public get user_session() {
    return this._user_session;
  }
  public signIn(obj) {
    let { username, password } = obj;
    return this.http.post<any>('/api/users', {
      username, password
    })
  }
  public updateRequests() {
    Utility.getRequests(this.http).subscribe(data => {
      if (data.success)
        this.requests = data.requests;
      else console.log(data);
      
    }, error => {

    })
  }

  changePassword(obj){
    let username= this._user_session.username;
    return this.http.patch<any>('api/users/password',{...obj,username})
  }
}
