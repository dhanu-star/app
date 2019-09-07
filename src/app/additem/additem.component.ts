import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {
name:string;
items=["angular","web"];
addItems()
{
  
  this.items.push("js");
}

constructor() { }

  ngOnInit() {}
  
  }



  //adding items to array