import { Component, OnInit } from '@angular/core';
import { Cell } from "../cell";


@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css'],
})
export class SingleComponent implements OnInit {

  gameArray;
  gameSize;
  gameDifficulty;
  difficulties;
  constructor() { }

  ngOnInit() {

    //will need to have each cell keep track of whether or not it's been clicked, if or if not it has a mine, and/or how many adjacent mines there are next to it. see app/cell.ts for more

    this.difficulties = {expert : 50, hard : 40, normal : 30, easy : 20, beginner : 10}
  
    //the number of rows and columns in each game. The grid will be a  n x n grid for now
    this.gameSize = 20

    this.gameArray = []
    for (var i = 0; i < this.gameSize; i++){
      this.gameArray.push([])
      for (var j = 0; j < this.gameSize; j++){
        this.gameArray[i].push(new Cell())
      }
    }

    //invoke the placeMines method to populate the grid with mines
    this.placeMines("expert")
    console.log(this.gameArray)
  }

  uncover(i,j){
    console.log(this.gameArray[i][j])
    this.gameArray[i][j].clicked = true
  }

  //this will determine where each mine will randomly be placed on the map
  placeMines(diff){
    
    //determine the appropriate number of mines to place given a difficulty input
    var numMines = this.difficulties[diff]
    
    //loop through our list of cells...
    for (var i = 0; i < this.gameArray.length; i++){
      for (var j = 0; j < this.gameArray.length; j++) {
        var random = Math.random()
        
        //if random is above 0.5 and we haven't run out of mines to place, make the cell in question a mine
        if (random > 0.7 && numMines > 0){
          this.gameArray[i][j].mine = true
          numMines--
        }
        
      }
    }
    console.log(numMines)
    
  }

}
