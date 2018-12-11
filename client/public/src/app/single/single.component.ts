import { Component, OnInit } from '@angular/core';
import { Minesweeper } from "../minesweeper";
import { HostListener } from "@angular/core";



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
  constructor() { }

  ngOnInit() {
    this.dropdownHidden = true
    this.difficulty = "easy"
    this.flaggingEnabled = false
    this.minesweeper = new Minesweeper("easy")
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
    this.minesweeper = new Minesweeper(this.difficulty)
  }

  toggleDropdown(){

    if (!this.dropdownHidden){
      this.dropdownHidden = true
    }
    else {
      this.dropdownHidden = false
    }
  }

  changeDiff(diff){
    this.difficulty = diff
    this.dropdownHidden = true 
    this.minesweeper = new Minesweeper(this.difficulty)
  }

  @HostListener('window:keyup', ['$event'])
  handleKeyBoardEvent(event : KeyboardEvent){
    if (event.key == 'f'){
      this.flaggingEnabled = !this.flaggingEnabled
      console.log(this.flaggingEnabled)
    }
  }

}
