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
  showDismissAnimation = false
  user;
  gameStarted = false

  constructor(private _titleService : Title, private _router : Router){
    this.setTitle()
  }
  
  ngOnInit(){
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
    if (this.currentPage != 'single' && this.gameStarted){
      this.confirmPopUpVisible = true
      this.pageToGoTo = 'single'
    }
    else if (this.currentPage != 'single' && !this.gameStarted){
      this.navigate('single')
      
    }
  }
  
  confirmMulti(){
    if (this.currentPage != 'multi' && this.gameStarted){
      this.confirmPopUpVisible = true
      this.pageToGoTo = ''
    }
    else if (this.currentPage != 'multi' && !this.gameStarted){
      this.navigate('')
      
    }
  }
  
  confirmLogin(){
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
