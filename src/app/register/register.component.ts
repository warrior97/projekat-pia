import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';

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
  public birthday;
  public placeofbirth;
  public citizenNumber;
  public phone;
  public email;


  private image: any;
  private image_data;
  constructor(private registrationService: RegistrationService) { }

  ngOnInit() {
  }

  updateSelected(event) {
    console.log(event.target.files[0]);
    let input = event.target;
    if (input.files && input.files[0]) {
      let reader = new FileReader();
      reader.onloadend = (e) => {
        console.log('Hello!')
        //BASE64 Slike!!!
        console.log(reader.result)
        this.image_data = reader.result;
        this.image = reader.result;
      }

      reader.readAsDataURL(input.files[0]);
    }

  }

  private validateInputs() {
    console.log(this.firstname, this.lastname, this.username, this.password, this.confirmpassword,
      this.birthday,
      this.placeofbirth,
      this.citizenNumber,
      this.phone,
      this.email)

    //Validation
    if (this.password != this.confirmpassword) {
      return false;
    }
    return true;

  }

  submitRegistration(event) {
    event.preventDefault();
    console.log(event.target[9].validity);
    this.validateInputs();
    console.log('It Works!');

    //this.registrationService.tryRegister().subscribe(data=>console.log(data));
  }

}
