import { Component, OnInit, PipeTransform, Pipe, Input } from '@angular/core';
import { Router } from '@angular/router';
​
@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
  arr = ""
public arr1 = ["vishnu", "sharan", "basavaraj"];
@Input() id="vishnu"
​
  constructor(private router: Router) { }
​
  ngOnInit() {
​
  }
​
  add(value) {
​
    this.arr1.push(value)
    this.arr = ""
    console.log(this.arr1)
  }
  r(value) {
    //this.arr1.delete(["value"])
    this.arr1.pop()
  }
  delete(i){
    this.arr1.splice(i,1);
    
​
  }
}
