import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-descorder',
  templateUrl: './descorder.component.html',
  styleUrls: ['./descorder.component.css']
})
export class DescorderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  desc1() {
    var arr = [40, 100, 1, -5, -25, 10, 25, 5];
    arr.sort(function (a, b) { return b - a })
    for (var i = 0; i < arr.length; i++) {
      alert(arr[i])
    }
  }


}




