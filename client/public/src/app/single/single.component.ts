import { Component, OnInit } from '@angular/core';
import { Minesweeper } from "../minesweeper";
import { HostListener } from "@angular/core";
import { AppComponent } from "../app.component";


@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css'],
})
export class SingleComponent implements OnInit {
  difficulty;
  minesweeper;
  dropdownHidden;
  flaggingEnabled;
  colorCode;
  hoveredCell = [-1, -1]
  initialLoad;

  constructor(private _component : AppComponent) { }

  ngOnInit() {
    this._component.currentPage = 'single'
    this.dropdownHidden = true
    this.initialLoad = true
    this.difficulty = "easy"
    this.flaggingEnabled = false

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
    if (this.flaggingEnabled){
      this.minesweeper.flag(i,j)
    }
    else {
      this.minesweeper.uncover(i,j)
    }
  }

  reset(){
    this.minesweeper = new Minesweeper(this.difficulty, 'single')
    this.flaggingEnabled = false
  }

  toggleDropdown(){
    this.initialLoad = false

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
    this.minesweeper = new Minesweeper(this.difficulty, 'single')
  }


  //this method toggles the users ability to place flags
  @HostListener('window:keyup', ['$event'])
  handleKeyBoardEvent(event : KeyboardEvent){
    if (event.key == 'f'){
      this.flaggingEnabled = !this.flaggingEnabled
      console.log(this.flaggingEnabled)
    }
  }

  mouseEnter(i, j){
    this.hoveredCell = [i, j]
  }
  
  mouseLeave(){
    this.hoveredCell = [-1, -1]
  }

}
