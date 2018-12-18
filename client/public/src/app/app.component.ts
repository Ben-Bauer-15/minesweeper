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
    if (this.currentPage != 'single'){
      this.confirmPopUpVisible = true
      this.pageToGoTo = ''
    }
  }
  
  confirmMulti(){
    this.initialVisit = false
    if (this.currentPage != 'multi'){
      this.confirmPopUpVisible = true
      this.pageToGoTo = 'multi'
    }
  }

  confirmLogin(){
    this.initialVisit = false
    if (this.currentPage != 'login'){
      this.confirmPopUpVisible = true
      this.pageToGoTo = 'login'
    }
  }

  navigate(page){
    this.initialVisit = false
    this._router.navigate([page])
    this.confirmPopUpVisible = false
  }

  dismiss(){
    this.initialVisit = false
    this.confirmPopUpVisible = false
  }
}
