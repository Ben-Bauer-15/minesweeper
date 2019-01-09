//This component will control navigation inside the minesweeper app

import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-minesweeper-header',
  templateUrl: './minesweeper-header.component.html',
  styleUrls: ['./minesweeper-header.component.css'],
})
export class MinesweeperHeaderComponent implements OnInit {

  title = 'Minesweeper';
  selected = ''
  user;
  gameStarted = false
  
  constructor(private _titleService : Title) { }

  ngOnInit() {
    this.setTitle()
  }

  setTitle(){
    this._titleService.setTitle("Minesweeper")
  }

  mouseEnter(elem){
    this.selected = elem
  }
  
  mouseLeave(){
    this.selected = ''
  }

}
