import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private formBuilder : FormBuilder,
    private loginService:LoginService
  ) { }

  public form : FormGroup;

  ngOnInit() {

    this.form = this.formBuilder.group({
      oldPassword:['', Validators.required],
      newPassword:['',Validators.required],
      confirmPassword:['',Validators.required]
    })

  }

  public changePassword(){
    console.log(this.form.value)
    let {oldPassword, newPassword,confirmPassword}=this.form.value;
    if(newPassword!=confirmPassword){
      console.log('Ne podudaraju se sifre!');
      return;
    }
    this.loginService.
    changePassword({oldPassword,newPassword,confirmPassword})
    .subscribe(data=>{
      console.log(data);
      if(data.success){

      }
      
    },error=>{
      console.log(error);
    })
  }

}
