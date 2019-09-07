import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css']
})
export class StatesComponent implements OnInit {

  constructor(public HttpService:HttpClient) { }

public states = [];

  ngOnInit() {

    this.HttpService.get ('./assets/states.json').subscribe(data => {

          this.states.push(data);

    });

  }

}

 
//use subscribe and http service with json file declaring states data in notepad
