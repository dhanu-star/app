import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';
​
@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.css']
})
export class EmptyComponent implements OnInit {
public getarray:any
  gopi: any;
  constructor() { }
​
  ngOnInit() {
  }
  empty(){
    var array=[1,2,3,4];
    array.length=0;
    console.log(array)
    alert(array.length)
​
  }
  exempty(){{
    console.log(length)
    alert(length)
  }
}
  }