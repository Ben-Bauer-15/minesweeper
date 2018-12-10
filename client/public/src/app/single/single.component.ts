import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css'],
})
export class SingleComponent implements OnInit {

  gameArray;
  gameSize;
  constructor() { }

  ngOnInit() {
    this.gameSize = 20
    this.gameArray = []
    for (var i = 0; i < this.gameSize; i++){
      this.gameArray.push([])
      for (var j = 0; j < this.gameSize; j++){
        this.gameArray[i].push(0)
      }
    }
  }

  uncover(i,j){
    this.gameArray[i][j] = 1
    console.log("row is ", i, "column is ", j)
  }

}
