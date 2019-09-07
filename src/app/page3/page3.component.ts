import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {

  constructor() { }
list : any;
public element=[];

  ngOnInit() {
  }
add(){
  this.element.push(this.list)
  this.list=""
  console.log(this.element)
}
delete(i){
  this.element.splice(i,1);
}
}
