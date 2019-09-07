import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-descending',
  templateUrl: './descending.component.html',
  styleUrls: ['./descending.component.css']
})
export class DescendingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  rev(){
  for(var i=9;i>=0;i--){
    alert("descending of 9 is "+i)
  }
  }
}
