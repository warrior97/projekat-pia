import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username;
  public password;

  constructor(private router: Router, private loginService: LoginService) { }
 
  ngOnInit() {
  }
  signIn() {
    let obj={
      username:this.username,
      password:this.password
    }
    console.log(obj);
    this.loginService.signIn(obj).subscribe(data => {
      console.log(data)
        if(data.success==true){
          this.loginService.user_session=data.user;
          this.loginService.user_logged=true;
          this.router.navigate(['/dashboard'])
        }
    }, error => {
      console.log(error)
    })
  }
}
