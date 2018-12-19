import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Minesweeper';
  selected = ''
  currentPage;
  confirmPopUpVisible;
  pageToGoTo;
  initialVisit;
  user;
  gameStarted = false

  constructor(private _titleService : Title, private _router : Router){
    this.setTitle()
  }
  
  ngOnInit(){
    this.initialVisit = true
    this.confirmPopUpVisible = false
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
    this.initialVisit = false
    if (this.currentPage != 'single' && this.gameStarted){
      this.confirmPopUpVisible = true
      this.pageToGoTo = ''
    }
    else if (this.currentPage != 'single' && !this.gameStarted){
      this.navigate('')
      
    }
  }
  
  confirmMulti(){
    this.initialVisit = false
    if (this.currentPage != 'multi' && this.gameStarted){
      this.confirmPopUpVisible = true
      this.pageToGoTo = 'multi'
    }
    else if (this.currentPage != 'multi' && !this.gameStarted){
      this.navigate('multi')
      
    }
  }
  
  confirmLogin(){
    this.initialVisit = false
    if (this.currentPage != 'login' && this.gameStarted){
      this.confirmPopUpVisible = true
      this.pageToGoTo = 'login'
    }
    else if (this.currentPage != 'login' && !this.gameStarted){
      this.navigate('login')
      
    }
  }
  
  navigate(page){
    this.gameStarted = false
    this.initialVisit = false
    this._router.navigate([page])
    this.confirmPopUpVisible = false
  }
  
  dismiss(){
    this.initialVisit = false
    this.confirmPopUpVisible = false
  }
}
