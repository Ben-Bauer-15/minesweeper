import { Component, OnInit } from '@angular/core';
import { AppComponent } from "../app.component";
import { HttpService } from "../http.service";
import { FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true
  returningUser = {email : "", password : ""}
  emailExists = false
  newUser = {userName : "", password : "", confirm : "", email : ""}
  email = new FormControl('', [Validators.required, Validators.email])
  password = new FormControl('', [Validators.required, Validators.minLength(8)])
  userName = new FormControl('', [Validators.required])

  constructor(private _component : AppComponent, 
    private _http : HttpService,
    private _router : Router) { }

  ngOnInit() {
    this._component.currentPage = 'login'
  }

  submitRegister(){
    console.log(this.newUser)
    let obs = this._http.newUser(this.newUser)
    obs.subscribe(data => {
    })
    this._router.navigate(['/newUser/' + this.newUser.userName])
    this.newUser = {userName : "", password : "", email : "", confirm : ""}
  }
  
  submitLogin(){
    let obs = this._http.loginUser(this.returningUser)
    obs.subscribe(data => {
      if (data.message == 'Success'){
        this._router.navigate(['/returningUser/' + data.data])
      }
    })
  }

  getEmailErrorMessage(){
    if(this.email.hasError('required')){
      return 'You must enter a value'
    }
    if(this.email.hasError('email')){
      return 'Not a valid email'
    } 
    if(this.emailExists) {
      return 'Email already exists'
    }
  }


  getPasswordErrorMessage(){
    return this.password.hasError('required') ? 'You must enter a value' : 
      this.password.hasError('minlength') ? 'Password is too short' : '';
  }

  getUserNameErrorMessage(){
    return this.userName.hasError('required') ? 'You must enter a value' : '';
  }

  keyup(){
    if (this.newUser.email != ""){
      let obs = this._http.checkForExistingEmail(this.newUser.email)
      obs.subscribe(data => {
        console.log(data.data[0])
        if (data.data[0] != undefined){
          this.emailExists = true
        }
        else {
          this.emailExists = false
        }
      })
    }
    else {
      this.emailExists = false
    }

  }



  

}
