import { Component, OnInit } from '@angular/core';
import { Minesweeper } from "../minesweeper";
import { HostListener } from "@angular/core";
import { AppComponent } from "../app.component";
import { ActivatedRoute, Params } from '@angular/router'

import * as io from 'socket.io-client'


@Component({
  selector: 'app-multi',
  templateUrl: './multi.component.html',
  styleUrls: ['./multi.component.css']
})
export class MultiComponent implements OnInit {

  difficulty : string
  minesweeper : Minesweeper
  dropdownHidden : boolean
  flaggingEnabled : boolean
  colorCode : object
  socket;
  otherUser : boolean
  opponentBoard : Minesweeper
  opponentTime : number
  otherUserFirstClick : boolean
  timerID;
  roomID : string
  hoveredButton;
  userChose = false

  constructor(private _component : AppComponent, private _route : ActivatedRoute) {
    console.log('constructor is running')
   }

  ngOnInit() {

    this._route.params.subscribe((params : Params) => {
      if (params['id']){
        this.userChose = true
        this.roomID = params['id']
        this.connectToPrivateRoom()
      }
    })
    
    console.log('init is running')
    this._component.currentPage = 'multi'
    this.dropdownHidden = true
    this.difficulty = "easy"
    this.flaggingEnabled = false
    this.otherUser = false
    this.otherUserFirstClick = false

    this.colorCode = {
      1 : 'one', 
      2 : 'two', 
      3 : 'three', 
      4 : 'four', 
      5 : 'five', 
      6 : 'six', 
      7 : 'seven',
      8 : 'eight'}
  
      this.minesweeper = new Minesweeper('easy', 'multi')

  }

  uncover(i, j){
    if (this.flaggingEnabled){
      this.minesweeper.flag(i,j)
      this.socket.emit('clicked', {board : this.minesweeper, id : this.roomID})
    }
    else {
      if (this.otherUser){
        this.minesweeper.uncover(i,j)
        this.socket.emit('clicked', {board : this.minesweeper, id : this.roomID})
      }
    }
  }

  reset(){
    this.minesweeper = new Minesweeper(this.difficulty, 'multi')
    this.flaggingEnabled = false
  }

  toggleDropdown(){
    if (!this.dropdownHidden){
      if (this.minesweeper.gameStarted){
        this.minesweeper.startTimer()
      }
      this.dropdownHidden = true
    }
    else {
      this.dropdownHidden = false
      this.minesweeper.stopTimer()
    }
  }

  changeDiff(diff){
    this.difficulty = diff
    this.dropdownHidden = true 
    this.minesweeper = new Minesweeper(this.difficulty, 'multi')
  }


  //this method toggles the users ability to place flags
  @HostListener('window:keyup', ['$event'])
  handleKeyBoardEvent(event : KeyboardEvent){
    if (event.key == 'f'){
      this.flaggingEnabled = !this.flaggingEnabled
    }
  }

  incrementOpponentTime(){
    this.opponentTime += 1
  }

  mouseEnter(buttonName){
    this.hoveredButton = buttonName
  }
  
  mouseLeave(){
    this.hoveredButton = ""
  }

  private(){
    this.userChose = true

    this.socket = io()

    this.opponentBoard = new Minesweeper('easy', 'multi')
    this.opponentTime = 0

    this.socket.on('welcome', (data) => {
      console.log(data)
      this.socket.emit("userChosePrivateRoom", data)
      this.roomID = data
    })

    this.socket.on('gameStarted', () => {
      console.log('huzzah!!')
      this.otherUser = true
    })
    
    this.socket.on('clicked', (data) => {
      if (!this.otherUserFirstClick){

        this.timerID = setInterval(() => {
          this.opponentTime += 1
        }, 1000)

        this.otherUserFirstClick = true
      }
      this.opponentBoard = data
    })

    this.socket.on('disconnect', () => {
      this.otherUser = false
      this.opponentTime = 0
      clearInterval(this.timerID)
      this.opponentBoard = new Minesweeper('easy', 'multi')
      this.minesweeper = new Minesweeper('easy', 'multi')
    })

  }
  
  public(){
    this.userChose = true
    
  }


  connectToPrivateRoom(){
    this.socket = io()
    console.log(this.roomID)
    this.socket.on('welcome', () => {
      this.socket.emit('connectToPrivateRoom', this.roomID)
    })

    this.socket.on('gameStarted', () =>{
      console.log('huzzah!')
      this.otherUser = true
    })
  }

  makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 15; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

}
