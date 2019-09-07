import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setdate',
  templateUrl: './setdate.component.html',
  styleUrls: ['./setdate.component.css']
})
export class SetdateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
   myFunction() {
    var d = new Date();
    d.setFullYear(2020);
    alert(d);
  }
}
