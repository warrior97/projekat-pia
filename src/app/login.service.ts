import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  //authentication


  public signIn(username:string,password:string) {

    return this.http.post('/api/users/login', {
      //data
    })
  }

}
