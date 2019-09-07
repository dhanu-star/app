import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unorder',
  templateUrl: './unorder.component.html',
  styleUrls: ['./unorder.component.css']
})
export class UnorderComponent implements OnInit {
  arr = ["Angular", "Node", "JavaScript", "React"]
  constructor() { }

  ngOnInit() {
  }

}
