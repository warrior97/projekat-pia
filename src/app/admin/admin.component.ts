import { Component, OnInit, ViewChild } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { LoginService } from '../login.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private registrationService: RegistrationService, private loginService: LoginService, private userService: UserService) { }
  public users;
  ngOnInit() {
   
  }
  get requests() {
    return this.loginService.requests;
  }

  allow(event) {
    let username = event.target.id;
    this.submit(true, username);
  }
  deny(event) {
    let username = event.target.id;
    this.submit(false, username);

  }
  submit(decision, username) {
    this.registrationService.sendDecision(decision, username).subscribe(data => {
      console.log(data);

    }, error => {
      console.log(error);

    })
  }
  kill(event){
    let username=event.target.id;
    this.userService.deleteUser(username).subscribe(data=>{
      console.log(`User deleted succesfully!`);
      this.loadUsers();
    },error=>{
      console.log(error)
    })
  }
  loadUsers(){
    this.userService.getUsers().subscribe(data => {
      console.log(data.users);
      this.users = data.users;
    }, error => { console.log(error) })
  }
}
