import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
  
  //sum: number;
  //calculate(first:number, second:number) {
   //this.sum = +first - +second;
  //  this.sub=+first - +second;
  

  constructor() { }

  ngOnInit() {

  }
  abc()
  {
    var opr;
    var a,b,c;
    a=prompt("enter first val");
    b=prompt("enter second val");
    opr=prompt("enter a operation" +"");
    switch(opr)
    {
        case '+':
        c=(parseInt(a)+parseInt(b));
        alert("val is" +c);
        break;

        case '-':
        alert("val is" +(a-b));
        break;

        case '*':
        alert("val is" +(a*b));
        break;

        case '%':
        alert("val is" +(a%b));
        break;
    }
  }
}