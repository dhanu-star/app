import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide3',
  templateUrl: './slide3.component.html',
  styleUrls: ['./slide3.component.css']
})
export class Slide3Component implements OnInit {
  images = [1,2,3,4,5].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  constructor() { }

  ngOnInit() {
  }

}
