import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  public tryRegister(data) {
    let { firstname, lastname, username, password, email, type, phone, picture, dateofbirth, placeofbirth, jmbg } = data;

    return this.http.put<any>('/api/users', {
      firstname,
      lastname,
      username,
      password,
      email,
      type,
      phone,
      picture,
      dateofbirth,
      placeofbirth,
      jmbg
    });

  }
  public sendApproval(data) {
    return this.http.patch<any>('/api/users', {
      ...data
    })
  }
  public sendDecision(decision, username) {
    return this.http.patch<any>('/api/users', {
      username, type: decision
    });
  }
}
