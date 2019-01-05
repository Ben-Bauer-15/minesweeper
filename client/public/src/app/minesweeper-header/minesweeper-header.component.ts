//This component will control navigation inside the minesweeper app

import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-minesweeper-header',
  templateUrl: './minesweeper-header.component.html',
  styleUrls: ['./minesweeper-header.component.css']
})
export class MinesweeperHeaderComponent implements OnInit {

  title = 'Minesweeper';
  selected = ''
  currentPage;
  confirmPopUpVisible;
  pageToGoTo;
  showDismissAnimation = false
  user;
  gameStarted = false
  
  constructor(private _titleService : Title, private _router : Router) { }

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

  confirmSingle(){
    if (this.currentPage != 'single' && this.gameStarted){
      this.confirmPopUpVisible = true
      this.pageToGoTo = 'minesweeper/single'
    }
    else if (this.currentPage != 'single' && !this.gameStarted){
      this.navigate('minesweeper/single')
      
    }
  }
  
  confirmMulti(){
    if (this.currentPage != 'multi' && this.gameStarted){
      this.confirmPopUpVisible = true
      this.pageToGoTo = 'minesweeper'
    }
    else if (this.currentPage != 'multi' && !this.gameStarted){
      this.navigate('minesweeper')
      
    }
  }
  
  confirmLogin(){
    if (this.currentPage != 'login' && this.gameStarted){
      this.confirmPopUpVisible = true
      this.pageToGoTo = 'minesweeper/login'
    }
    else if (this.currentPage != 'login' && !this.gameStarted){
      this.navigate('minesweeper/login')
      
    }
  }
  
  navigate(page){
    this.gameStarted = false
    this._router.navigate([page])
    this.confirmPopUpVisible = false
  }
  
  dismiss(){
    this.showDismissAnimation = true
    setTimeout(() => {
      this.confirmPopUpVisible = false
      this.showDismissAnimation = false
    }, 500);
  }

}
