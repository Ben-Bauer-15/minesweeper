
//Imports
import { Component, OnInit } from '@angular/core';
import { Minesweeper } from "../minesweeper";
import { HostListener } from "@angular/core";
import { AppComponent } from "../../app.component";
import { MinesweeperHeaderComponent } from "../minesweeper-header/minesweeper-header.component";
import { ActivatedRoute, Params } from '@angular/router'
import * as io from 'socket.io-client'
import { HttpService } from "../../http.service";


@Component({
  selector: 'app-multi',
  templateUrl: './multi.component.html',
  styleUrls: ['./multi.component.css']
})
export class MultiComponent implements OnInit {


  //neccessary variables
  difficulty : string
  diffConfirmed = false
  minesweeper : Minesweeper
  dropdownHidden : boolean
  flaggingEnabled : boolean
  colorCode : object
  socket;
  otherUser : boolean
  opponentBoard : Minesweeper
  roomID : string
  hoveredButton;
  userChose = false
  linkToShare : string
  hoveredCell = [-1,-1]
  shareWindowDisplay;
  initialLoad = true
  IP : string
  gameMode : string
  friendEmail = ""
  firstUserToPublic = false
  topScores;

  constructor(private _component : MinesweeperHeaderComponent, 
    private _route : ActivatedRoute,
    private _http : HttpService) {
   }

  ngOnInit() {


    this.opponentBoard = new Minesweeper('easy', 'multi')

    this._route.params.subscribe((params : Params) => {
      if (params['id']){
        this.userChose = true
        this.roomID = params['id']
        this.connectToPrivateRoom()
      }
    })
    
    this.dropdownHidden = true
    this.difficulty = "easy"
    this.flaggingEnabled = false
    this.otherUser = false

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


  //minesweeper game logic functions
  uncover(i, j){
    if (this.flaggingEnabled && this.otherUser){
        this._component.gameStarted = true
        this.minesweeper.flag(i,j)
        this.socket.emit('clicked', {board : this.minesweeper, id : this.roomID})

        if (this.minesweeper.winner){
          var self = this
          if (this._component.user){
            this._component.gameStarted = false
            let postObj = {userID : this._component.user, difficulty : this.minesweeper.difficulty, time : this.minesweeper.gamePlayTime}
            let obs = this._http.saveSinglePlayerGame(postObj)
            obs.subscribe(data => {
            })
          }
          let topScores = this._http.getGlobalScores(this.minesweeper.difficulty)
          console.log('getting scores')
          topScores.subscribe(data => {
            console.log(data)
            self.topScores = data.data
          })
        }
    }
    else if (this.otherUser) {
        this._component.gameStarted = true
        this.minesweeper.uncover(i,j)
        this.socket.emit('clicked', {board : this.minesweeper, id : this.roomID})
    }
  }

  reset(){
    this.minesweeper = new Minesweeper(this.difficulty, 'multi')
    this.opponentBoard = new Minesweeper(this.difficulty, 'multi')
    this.socket.emit('reset', {roomID : this.roomID})
    this.flaggingEnabled = false
  }

  changeDiff(diff){
    this.difficulty = diff
    if (this.otherUser){
      this.socket.emit('difficulty', {room : this.roomID, difficulty : this.difficulty})
    }
    this.minesweeper = new Minesweeper(this.difficulty, 'multi')
    this.opponentBoard = new Minesweeper(this.difficulty, 'multi')
  }

  confirmDiff(){ 
    this.diffConfirmed = true
    this.toggleDifficultyWindow()
  }
  
  //this method toggles the users ability to place flags
  @HostListener('window:keyup', ['$event'])
    handleKeyBoardEvent(event : KeyboardEvent){
        if (event.key == 'f' && this.otherUser){
          this.flaggingEnabled = !this.flaggingEnabled
        }
    }

 
  

  //socket room functions
  
  //this is for the user who initially connects
  choosePrivateGame(){

    this.gameMode = 'private'

    this.initialLoad = false

    this.userChose = true
    this.socket = io()


    this.socket.on('welcome', (data) => {
      this.socket.emit("userChosePrivateRoom", data.roomID)
      this.roomID = data.roomID
      this.IP = data.address
      this.shareWindowDisplay = true
      this.linkToShare = 'http://ben-bauer.net/room/' + data.roomID
    })
    
    this.socket.on('gameStarted', () => {
      this.otherUser = true
      this.socket.emit('difficulty', {room : this.roomID, difficulty : this.difficulty})
    })
    
    this.socket.on('clicked', (data) => {
      this.opponentBoard = data
      console.log(data)

      if (data.gameOver && !data.winner &&  this.minesweeper.gameOver){
        this.minesweeper = new Minesweeper(this.difficulty, 'multi')
        this.opponentBoard = new Minesweeper(this.difficulty, 'multi')
        this.socket.emit('reset', {roomID : this.roomID})
      }
    })
    
    this.socket.on('disconnect', () => {
      this.otherUser = false
      this.opponentBoard = new Minesweeper(this.difficulty, 'multi')
      this.minesweeper = new Minesweeper(this.difficulty, 'multi')
    })

    this.socket.on('reset', () => {
      console.log('reset')
      this.minesweeper = new Minesweeper(this.difficulty, 'multi')
      this.opponentBoard = new Minesweeper(this.difficulty, 'multi')
    })
    
    
    
  }
  
  //this is for the user who was invited to play
  connectToPrivateRoom(){
    this.socket = io()
    console.log(this.roomID)
    this.socket.on('welcome', () => {
      this.socket.emit('connectToPrivateRoom', this.roomID)
    })
    
    this.socket.on('gameStarted', () =>{
      this.otherUser = true
    })
    
    this.socket.on('difficulty', (data) => {
      this.difficulty = data
      this.minesweeper = new Minesweeper(this.difficulty, 'multi')
      this.opponentBoard = new Minesweeper(this.difficulty, 'multi')
    })
    
    this.socket.on('clicked', (data) => {
      this.opponentBoard = data
      console.log(data)
      if (data.gameOver && !data.winner && this.minesweeper.gameOver){
        this.minesweeper = new Minesweeper(this.difficulty, 'multi')
        this.opponentBoard = new Minesweeper(this.difficulty, 'multi')
        this.socket.emit('reset', {roomID : this.roomID})
      }
    })
    
    this.socket.on('reset', () => {
      this.minesweeper = new Minesweeper(this.difficulty, 'multi')
      this.opponentBoard = new Minesweeper(this.difficulty, 'multi')
    })

    this.socket.on('disconnect', () => {
      this.otherUser = false
      this.opponentBoard = new Minesweeper(this.difficulty, 'multi')
      this.minesweeper = new Minesweeper(this.difficulty, 'multi')
    })
    
  }
  
  
  choosePublicGame(){
    this.initialLoad = false

    this.userChose = true
    this.socket = io()

    this.socket.on('welcome', ()  => {
      this.socket.emit('connectToPublicRoom')
    })

    this.socket.on('welcomeToPublic', (data) => {
      this.roomID = data.id
      if (data.numUsers == 2){
        if (this.firstUserToPublic){
          this.socket.emit('difficulty', {room : this.roomID, difficulty : this.difficulty})
        }
        this.otherUser = true
      }
      else {
        this.toggleDifficultyWindow()
        this.firstUserToPublic = true
      }
    })

    this.socket.on('difficulty', (data) => {
      this.difficulty = data
      this.minesweeper = new Minesweeper(this.difficulty, 'multi')
      this.opponentBoard = new Minesweeper(this.difficulty, 'multi')
    })

    this.socket.on('clicked', (data) => {
      this.opponentBoard = data
      console.log(data)
      if (data.gameOver && !data.winner && this.minesweeper.gameOver){
        this.minesweeper = new Minesweeper(this.difficulty, 'multi')
        this.opponentBoard = new Minesweeper(this.difficulty, 'multi')
        this.socket.emit('reset', {roomID : this.roomID})
      }
    })

    this.socket.on('reset', () => {
      this.minesweeper = new Minesweeper(this.difficulty, 'multi')
      this.opponentBoard = new Minesweeper(this.difficulty, 'multi')
    })

    this.socket.on('disconnect', () => {
      this.otherUser = false
      this.opponentBoard = new Minesweeper(this.difficulty, 'multi')
      this.minesweeper = new Minesweeper(this.difficulty, 'multi')
    })
  }
  

  


  //sharing link functions
  copyToClipboard(val: string){
    this.shareWindowDisplay = false
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);

    this.toggleDifficultyWindow()
  }

  sendEmailTo(){
    let obj = {link : this.linkToShare, email : this.friendEmail}
    let obs = this._http.sendEmailTo(obj)
    obs.subscribe(data => {

    })
    this.shareWindowDisplay = false
    this.friendEmail = ''

    this.toggleDifficultyWindow()
  }




  //mouse hovering functions
  mouseEnter(buttonName){
    this.hoveredButton = buttonName
  }
  
  mouseLeave(){
    this.hoveredButton = ""
  }

  hoverOnCell(i, j){
    this.hoveredCell = [i, j]
  }
  
  mouseLeaveCell(){
    this.hoveredCell = [-1, -1]
  }




  //various pop up window display functions
  closeShareWindow(){
    this.shareWindowDisplay = false
    this.toggleDifficultyWindow()
  }

  displayShareWindow(){
    if (this.gameMode == 'private'){
      this.shareWindowDisplay = true
    }
  }

  closeGoWindow(){
    this.diffConfirmed = false
  }

  toggleDifficultyWindow(){
    this.dropdownHidden = !this.dropdownHidden
  }

}
