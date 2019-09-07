import { Component, OnInit } from '@angular/core';
​import { Routes,Router} from '@angular/router';
@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent implements OnInit {
  router: any;
  public btnHide = false;
  constructor() {
  }
​
  ngOnInit() {
  }
  openNav(){
this.btnHide = true;
  }
  close(){
    this.btnHide = false;
  }
​
}