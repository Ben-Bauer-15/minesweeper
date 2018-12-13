import { Component, OnInit } from '@angular/core';
import { AppComponent } from "../app.component";
import { Router } from "@angular/router";

@Component({
  selector: 'app-multiplayer-gateway',
  templateUrl: './multiplayer-gateway.component.html',
  styleUrls: ['./multiplayer-gateway.component.css']
})
export class MultiplayerGatewayComponent implements OnInit {

  constructor(private _component : AppComponent, private _router : Router) { }

  ngOnInit() {
    this._component.currentPage = 'gateway'
  }

  navigate(page){
    this._router.navigate(['multi'])
  }
}
