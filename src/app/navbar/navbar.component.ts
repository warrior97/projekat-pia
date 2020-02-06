import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService) { }

  get profile_picture() {
    return this.loginService.user_session.picture;
  }

  ngOnInit() {
  }
  navigateSignIn(event) {
    this.router.navigate(['/signin'])
  }
  navigateSignUp(event) {
    this.router.navigate(['/signup'])
  }
  navigateHome() {
    if (this.loginService.user_logged)
      this.router.navigate(['/dashboard'])
    else
      this.router.navigate(['/']);
  }
  navigateProfile() {
    this.router.navigate(['/profile']);
  }
  logOut(){
    this.loginService.user_logged=false;
    this.loginService.user_session=undefined;
    this.router.navigate(['/'])
  }

}
