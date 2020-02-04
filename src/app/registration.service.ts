import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  public tryRegister(){
      return this.http.post('/api/users',{
        //data
      })
  }
}
