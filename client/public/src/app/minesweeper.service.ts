import { Injectable, OnInit } from '@angular/core';
import * as socketIO from 'socket.io'


@Injectable({
  providedIn: 'root'
})
export class MinesweeperService {

  io : socketIO

  constructor() { }

  ngOnInit() {
    this.connect()
  }
  
  connect(){
    this.io.socket.on('welcome', (data) =>{
      console.log(data)
    })
  }
  

}
