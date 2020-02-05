import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //Session storage

  public user_session=undefined;


  constructor(private http:HttpClient) { }

  //authentication


  public signIn(obj) {
    let {username,password}= obj;
    return this.http.post<any>('/api/users', {
      username,password
    })
  }

}
