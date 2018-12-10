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
    this.placeMines("easy")
    console.log(this.gameArray)
  }


  //reveals a cell that is clicked`
  uncover(i,j){
    console.log(this.gameArray[i][j])
    this.gameArray[i][j].clicked = true
  }


  //this will determine where each mine will randomly be placed on the map
  placeMines(diff){

    //this will dictate how many mines we randomly place
    var numMines = this.difficulties[diff]

    //create a duplicate array of the game array, but instead of storing cell objects, it stores indices
    var gameArrayDummy = []
    for (var i = 0; i < this.gameArray.length; i ++){
      for (var j = 0; j < this.gameArray.length; j ++){
        gameArrayDummy.push([i,j])
      }
    }

    //this will store all the indices for the mines
    var mines = []

    //loop through the array dummy numMines times
    for (var i = 0; i < numMines; i++){

      //choose a random index between 0 and array dummy length
      var random = Math.floor(Math.random() * gameArrayDummy.length)
      
      //store this random index
      mines.push(gameArrayDummy[random])

      //delete it from the dummy so we can't choose the same location again!
      gameArrayDummy.splice(random, 1)
    }

    //now loop through mines and change the targeted cells to mines
    for (var i = 0; i < mines.length; i++){
      var row = mines[i][0]
      var column = mines[i][1]
      console.log(row, column)
      this.gameArray[row][column].mine = true
    }
  }

}
