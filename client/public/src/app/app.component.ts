import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'public';
  selected = ''
  constructor(){}

  mouseEnter(elem){
    this.selected = elem
  }
  
  mouseLeave(elem){
    this.selected = ''
  }
}
