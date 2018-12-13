import { Component, OnInit } from '@angular/core';
import { Minesweeper } from "../minesweeper";
import { HostListener } from "@angular/core";
import { AppComponent } from "../app.component";

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

  constructor(private _component : AppComponent) {
    console.log('constructor is running')
   }

  ngOnInit() {
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

      console.log("has the user visited multi? " , this._component.hasVisitedMulti)
      // if (!this._component.hasVisitedMulti){
        this.socket = io()
      // }
      this.opponentBoard = new Minesweeper('easy', 'multi')
      this.opponentTime = 0

      this.socket.on('welcome', (data) => {

        if (data == 2){
          this.otherUser = true
        }
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

  uncover(i, j){
    if (this.flaggingEnabled){
      this.minesweeper.flag(i,j)
      this.socket.emit('clicked', this.minesweeper)
    }
    else {
      if (this.otherUser){
        this.minesweeper.uncover(i,j)
        this.socket.emit('clicked', this.minesweeper)
      }
    }
  }

  reset(){
    this.minesweeper = new Minesweeper(this.difficulty, 'multi')
    this.flaggingEnabled = false
  }

  toggleDropdown(){
    console.log("toggled on multi comp")
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

}
