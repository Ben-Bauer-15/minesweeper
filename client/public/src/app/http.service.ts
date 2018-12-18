import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http : HttpClient) { }

  newUser(obj){
    return this._http.post('/newUser', obj)
  }

}
