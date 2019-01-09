import { Component, OnInit } from '@angular/core';
import { Minesweeper } from "../minesweeper";
import { HostListener } from "@angular/core";
import { AppComponent } from "../../app.component";
import { MinesweeperHeaderComponent } from "../minesweeper-header/minesweeper-header.component";
import { Params, ActivatedRoute } from "@angular/router";
import { HttpService } from "../../http.service";


@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css'],
})
export class SingleComponent implements OnInit {
  difficulty;
  minesweeper;
  topScores;
  dropdownHidden = true
  flaggingEnabled = false
  colorCode;
  hoveredCell = [-1, -1]
  initialDropdownLoad = true
  initialPopUpLoad = true
  infoPopUp = false;

  constructor(private _component : MinesweeperHeaderComponent,
    private _route : ActivatedRoute,
    private _http : HttpService) { }

  ngOnInit() {
    this._route.params.subscribe((params : Params) => {

      if (params['newUserID']){
        this._component.user = params['newUserID']
      }

      else if (params['returningUserID']){
        this._component.user = params['returningUserID']
      }

    })



    this.difficulty = "easy"

    this.colorCode = {
    1 : 'one', 
    2 : 'two', 
    3 : 'three', 
    4 : 'four', 
    5 : 'five', 
    6 : 'six', 
    7 : 'seven',
    8 : 'eight'}

    this.minesweeper = new Minesweeper('easy', 'single')

  }

  uncover(i, j){
    
    this._component.gameStarted = true
    if (this.flaggingEnabled){
      this.minesweeper.flag(i,j)
    }
    else {
      this.minesweeper.uncover(i,j)
    }
    // console.log(this._component.gameStarted)
    // console.log(this.minesweeper.winner)

    var self = this

    if (this.minesweeper.winner && this._component.gameStarted){
      this._component.gameStarted = false
      // console.log('line 75')

      var postObj = {userID : undefined, difficulty : this.minesweeper.difficulty, time : this.minesweeper.gamePlayTime}
      if (this._component.user){
        postObj.userID = this._component.user
        var obs = this._http.saveSinglePlayerGame(postObj)
        obs.subscribe(data => {
          var topScoresObs = this._http.getGlobalScores(this.difficulty)
          // console.log('getting scores')
          topScoresObs.subscribe(data => {
            // console.log(data)
            self.topScores = data.data
          })
        })
      }
      
      else {
        // console.log(postObj)
        var obs = this._http.saveSinglePlayerGame(postObj)
        obs.subscribe(data => {
          var topScoresObs = this._http.getGlobalScores(this.difficulty)
          // console.log('getting scores')
          topScoresObs.subscribe(data => {
            // console.log(data)
            self.topScores = data.data
          })
        })
      }
    }
  }

  reset(){
    this._component.gameStarted = false
    this.minesweeper = new Minesweeper(this.difficulty, 'single')
    this.flaggingEnabled = false
  }

  toggleDropdown(){
    this.initialDropdownLoad = false

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
    this._component.gameStarted = false
    // console.log(this.difficulty)
    this.dropdownHidden = true 
    this.minesweeper = new Minesweeper(this.difficulty, 'single')
    // console.log(this.minesweeper.difficulty)
  }


  //this method toggles the users ability to place flags
  @HostListener('window:keyup', ['$event'])
  handleKeyBoardEvent(event : KeyboardEvent){
    if (event.key == 'f'){
      this.flaggingEnabled = !this.flaggingEnabled
      // console.log(this.flaggingEnabled)
    }
  }

  mouseEnter(i, j){
    this.hoveredCell = [i, j]
  }
  
  mouseLeave(){
    this.hoveredCell = [-1, -1]
  }

  displayInfo(){
    this.initialPopUpLoad = false
    this.infoPopUp = !this.infoPopUp
  }
}
