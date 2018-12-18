import { Component, OnInit } from '@angular/core';
import { AppComponent } from "../app.component";
import { HttpService } from "../http.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true
  newUser = {userName : "", password : "", confirm : "", email : ""}
  constructor(private _component : AppComponent, private _http : HttpService) { }

  ngOnInit() {
    this._component.currentPage = 'login'
  }

  submit(){
    console.log(this.newUser)
    let obs = this._http.newUser(this.newUser)
    obs.subscribe(data => {
      console.log(data)
    })
    this.newUser = {userName : "", password : "", email : "", confirm : ""}
  }

}
