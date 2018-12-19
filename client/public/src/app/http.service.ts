import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http : HttpClient) { }

  newUser(obj){
    return this._http.post('/newUser', obj, {
      withCredentials : true
    })
  }

  loginUser(obj){
    return this._http.post('/login', obj, {
      withCredentials : true
    })
  }

  getAllUserScores(){
    return this._http.get('/userScores')
  }

  getGlobalScores(diff){
    return this._http.get('/allScores/' + diff)
  }

  checkForExistingEmail(email){
    return this._http.get('/checkEmail/' + email)
  }

  saveSinglePlayerGame(obj){
    return this._http.post('/newSingle', obj)
  }

  
}
