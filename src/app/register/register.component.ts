import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public email_pattern = "[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*"

  public firstname;
  public lastname;
  public username;
  public password;
  public confirmpassword;
  public dateofbirth;
  public placeofbirth;
  public jmbg;
  public phone;
  public email;

  success:string;
  message:string;

  private image: any;
  private image_data;
  constructor(private registrationService: RegistrationService, private router:Router) { }

  ngOnInit() {
  }

  updateSelected(event) {
    //console.log(event.target.files[0]);
    let input = event.target;
    if (input.files && input.files[0]) {
      let reader = new FileReader();
      reader.onloadend = (e) => {
        //console.log('Hello!')
        //BASE64 Slike!!!
       // console.log(reader.result)
        this.image_data = reader.result;
        this.image = reader.result;
      }

      reader.readAsDataURL(input.files[0]);
    }

  }

  private validateInputs() {
    /*console.log(this.firstname, this.lastname, this.username, this.password, this.confirmpassword,
      this.dateofbirth,
      this.placeofbirth,
      this.jmbg,
      this.phone,
      this.email)
*/

    //Validation
    if (this.password != this.confirmpassword) {
      this.message='Passwords must match!'
      return false;
    }
    return true;

  }

  submitRegistration(event) {
    event.preventDefault();
    console.log(event.target[9].validity);
    if(!this.validateInputs()){
      this.success='failed'
      return;
    }
    console.log('It Works!');

    let obj={
      firstname:this.firstname,
      lastname:this.lastname,
      username:this.username,
      password:this.password,
      dateofbirth:this.dateofbirth,
      placeofbirth:this.placeofbirth,
      jmbg:this.jmbg,
      phone:this.phone,
      email:this.email,
      picture:this.image_data
    }
    this.registrationService.tryRegister(obj).subscribe((data)=>{
      console.log(data);
      //console.log(data.toString()) 
      if(data.success==true){
          
          this.router.navigate(['']);
        }
        else{
          this.message=data.message;
        }
    },error=>{
      this.success='failed',this.message="Error occured!";
    });
  }

}
