import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.css']
})
export class AddnewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
   myfun(){
     var array=["Angular", "Node", "JavaScript", "React"];
      array.push("IOS","AWS","Java","html","web");
      alert(array)
   }
}
