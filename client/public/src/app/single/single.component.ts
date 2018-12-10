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
  mines;
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
        

        //i represents rows and is thus more appropriate to use as a cell's 'y' variable, and vice versa for j
        var newCell = new Cell(j, i)
        this.gameArray[i].push(newCell)

        //detect all the neighbors for this new cell and add them to its list of neighbors
        this.populateNeighbors(newCell)

      }
    }

    //invoke the placeMines method to populate the grid with mines as well as update all of the non-mine cells
    this.placeMines("expert")
    console.log(this.gameArray)

  }


  //recursively uncovers cells when one is clicked
  uncover(i,j){


    //if a cell is a mine, game over and uncover the rest of the mines
    if (this.gameArray[i][j].mine && !this.gameArray[i][j].clicked){
      for (var idx = 0; idx < this.mines.length; idx++){
        var x = this.mines[idx][0]
        var y = this.mines[idx][1]
        this.gameArray[i][j].clicked = true
        this.uncover(x,y)
      }
    
    }

    //this is optional, but the original version of the game uncovers all cells that don't have any mines adjacent
    //it stops uncovering once it reaches a cell with adjacent > 0

    //if a cell doesn't have any mines adjacent and it HASNT been uncovered, recursively uncover all of its neighbors
    else if (this.gameArray[i][j].adjacentMines == 0 && !this.gameArray[i][j].clicked){
      for (var idx = 0; idx < this.gameArray[i][j].neighbors.length; idx++){

        //all cell neighbors are stored as coordinates, NOT cells
        var neighborCoords = this.gameArray[i][j].neighbors[idx]

        //go into neighbor coords to get the actual cell
        var neighbor = this.gameArray[neighborCoords[0]][neighborCoords[1]]
        this.gameArray[i][j].clicked = true
        this.uncover(neighbor.x, neighbor.y)
      }
    }
    else {
      //uncover this cell but don't call this function again, since it has > 0 adjacent
      this.gameArray[i][j].clicked = true
    }

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
    this.mines = []

    //loop through the array dummy numMines times
    for (var i = 0; i < numMines; i++){

      //choose a random index between 0 and array dummy length
      var random = Math.floor(Math.random() * gameArrayDummy.length)
      
      //store this random index
      this.mines.push(gameArrayDummy[random])

      //delete it from the dummy so we can't choose the same location again!
      gameArrayDummy.splice(random, 1)
    }

    //now loop through mines and change the targeted cells to mines
    for (var i = 0; i < this.mines.length; i++){
      var row = this.mines[i][0]
      var column = this.mines[i][1]
      // console.log(row, column)
      this.gameArray[row][column].mine = true
    }

    //loop through mines again and update the neighbors adjacency property
    for (var i = 0; i < this.mines.length; i++){
      var row = this.mines[i][0]
      var column = this.mines[i][1]
      this.increaseAdjacents(this.gameArray[row][column])
    }
  }

  populateNeighbors(cell){
    let max = this.gameSize

    //edge case: cell is at the upper left corner
    if (cell.x == 0 && cell.y == 0){
      cell.neighbors = [
        [0,1],
        [1,1],
        [1,0]
      ]
    }

    //edge case: cell is in upper right corner
    else if (cell.y == 0 && cell.x == this.gameSize - 1){
      cell.neighbors = [
        [max - 2, 0],
        [max - 1, 1],
        [max - 2, 1]
      ]
    }

    //edge case: cell is in lower right corner
    else if (cell.y == this.gameSize - 1 && cell.x == this.gameSize -1){
      cell.neighbors = [
        [max - 1, max - 2],
        [max - 2, max - 1],
        [max - 2, max - 2]
      ]
      
    }

    //edge case: cell is in lower left corner
    else if (cell.y == this.gameSize - 1 && cell.x == 0){
      cell.neighbors = [
        [0, max - 2],
        [1, max - 1],
        [1, max - 2]
      ]
    }

    //edge case: cell is along left margin
    else if (cell.x == 0){
      cell.neighbors = [
        [0, cell.y - 1],
        [0, cell.y + 1],
        [1, cell.y],
        [1, cell.y - 1],
        [1, cell.y + 1]
      ]
    }

    //edge case: cell is on top margin
    else if (cell.y ==0){
      cell.neighbors = [
      [cell.x - 1, 0],
      [cell.x + 1, 0],
      [cell.x, 1],
      [cell.x - 1, 1],
      [cell.x + 1, 1]
      ]
    }

    //edge case: cell is on right margin
    else if (cell.x == this.gameSize - 1){
      cell.neighbors = [
        [max - 1, cell.y - 1],
        [max - 1, cell.y + 1],
        [max - 2, cell.y],
        [max - 2, cell.y - 1],
        [max - 2, cell.y + 1]
      ]
    }

    //final edge case: cell on on bottom margin
    else if (cell.y == this.gameSize - 1){
      cell.neighbors = [
        [cell.x - 1, max - 1],
        [cell.x + 1, max - 1],
        [cell.x, max - 2],
        [cell.x - 1, max - 2],
        [cell.x + 1, max - 2]
      ]
    }

    //cell is somewhere 'in the middle' and can be treated differently
    else {
      cell.neighbors = [
        [cell.x - 1, cell.y],
        [cell.x + 1, cell.y],
        [cell.x, cell.y - 1],
        [cell.x, cell.y + 1],
        [cell.x - 1, cell.y - 1],
        [cell.x - 1, cell.y + 1],
        [cell.x + 1, cell.y - 1],
        [cell.x + 1, cell.y + 1]
      ]
    }
  }

  //for each mine (cell) that is placed, loop through all of its neighbors and increase their property for adjacents by 1
  increaseAdjacents(mine){

    console.log("the mine is: ", mine)
    //loop through the neighbors of each mine...
    for (var i = 0; i < mine.neighbors.length; i++){

      //coord is an array of length 2
      let coord = mine.neighbors[i]

      //neighbor is a cell from the gameArray given by the x,y from the coord variable
      let neighbor = this.gameArray[coord[1]][coord[0]]

      //if the neighbor isn't a mine, increase its adjacent mines property by 1
      if (!neighbor.mine){
        neighbor.adjacentMines ++
      }


    }
  }

}
