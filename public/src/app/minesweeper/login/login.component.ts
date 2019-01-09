import { Component, OnInit } from '@angular/core';
import { MinesweeperHeaderComponent } from "../minesweeper-header/minesweeper-header.component";
import { HttpService } from "../../http.service";
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
  badCombo = false
  emailExists = false
  newUser = {userName : "", password : "", confirm : "", email : ""}
  email = new FormControl('', [Validators.required, Validators.email])
  password = new FormControl('', [Validators.required, Validators.minLength(8)])
  userName = new FormControl('', [Validators.required])
  
  returnEmail = new FormControl('', [Validators.required, Validators.email])
  returnPassword = new FormControl('', [Validators.required])

  constructor(private _component : MinesweeperHeaderComponent, 
    private _http : HttpService,
    private _router : Router) { }

  ngOnInit() {
  }

  submitRegister(){
    let obs = this._http.newUser(this.newUser)
    obs.subscribe(data => {
    })
    this._router.navigate(['minesweeper/newUser/' + this.newUser.userName])
    this.newUser = {userName : "", password : "", email : "", confirm : ""}
  }
  
  submitLogin(){
    let obs = this._http.loginUser(this.returningUser)
    obs.subscribe(data => {
      if (data.message == 'Success'){
        this._router.navigate(['minesweeper/returningUser/' + data.data])
        this.badCombo = false
      }
      else {
        this.badCombo = true
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

  getReturnPasswordErrorMessage(){
    return this.returnPassword.hasError('required') ? 'You must enter a value' : ""
  }

  getReturningEmailErrorMessage(){
    return this.returnEmail.hasError('required') ? 'You must enter a value' : 
      this.returnEmail.hasError('email') ? 'Not a valid email' : '';
  }


  getUserNameErrorMessage(){
    return this.userName.hasError('required') ? 'You must enter a value' : '';
  }

  keyup(){
    if (this.newUser.email != ""){
      let obs = this._http.checkForExistingEmail(this.newUser.email)
      obs.subscribe(data => {
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
