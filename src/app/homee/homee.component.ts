import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Component({
selector: 'app-homee',
templateUrl: './homee.component.html',
styleUrls: ['./homee.component.css']
})
export class HomeeComponent implements OnInit {

constructor(private Httpservice:HttpClient) { }
public states=[]

ngOnInit() {

this.Httpservice.get('./assets/data2.json').subscribe(data=>
{
this.states.push(data);
console.log(this.states[0]);
})
}

}
