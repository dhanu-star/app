import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-year2020',
  templateUrl: './year2020.component.html',
  styleUrls: ['./year2020.component.css']
  })
  export class Year2020Component implements OnInit {
  date;
  
  constructor() { }
  
  ngOnInit() {
  }
  function(){
  this.date=new Date();
  this.date.setFullYear(2020);
  alert(this.date);
  }
  }
  




