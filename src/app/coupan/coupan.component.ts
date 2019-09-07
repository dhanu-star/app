import { Component, OnInit } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-coupan',
  templateUrl: './coupan.component.html',
  styleUrls: ['./coupan.component.css']
})
export class CoupanComponent implements OnInit {
  number1 = Math.random().toString(35).substring(6);

  constructor() { }

  ngOnInit() {
  }

}
//math.random.floor(),uppercase and lower case in pipes
