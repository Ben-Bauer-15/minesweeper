import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-benbauer',
  templateUrl: './benbauer.component.html',
  styleUrls: ['./benbauer.component.css']
})
export class BenbauerComponent implements OnInit {

  constructor(private _title : Title) { }

  ngOnInit() {
    this.setTitle()
  }

  setTitle(){
    this._title.setTitle("Ben Bauer")
  }

}
