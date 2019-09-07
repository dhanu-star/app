import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agelimit',
  templateUrl: './agelimit.component.html',
  styleUrls: ['./agelimit.component.css']
})
export class AgelimitComponent implements OnInit {
  
public age(){
  
  var a = document.getElementById("age1");
  var b = document.getElementById("age2");
  var result = (a < b) ? 'not old enough':'old enough';
  alert(result);
}
  constructor() { }

  ngOnInit() {
  }

}


//using ternary operator