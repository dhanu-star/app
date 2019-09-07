import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiples',
  templateUrl: './multiples.component.html',
  styleUrls: ['./multiples.component.css']
})
export class MultiplesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  click()
  {
    for(var i=0;i<10;i++)
    {
      if(i%2==0)
      alert(i)
    }
   }
  
    
}