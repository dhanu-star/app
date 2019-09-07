import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empdata',
  templateUrl: './empdata.component.html',
  styleUrls: ['./empdata.component.css']
})
export class EmpdataComponent implements OnInit {
  public Emdata = [
    {
    "userId" : "18",
    "name": {
    "firstName" : "Ashok",
    "lastName": "Reddy" 
    },
    
    "jobTitleName":"Web Developer",
    "phoneNumber":"8142560057",
    "region":"Bangalore"
    },
    {
    "userId" : "96",
    "name": {
    "firstName" : "Venkatesh",
    "lastName": "Reddy" 
    },
    "jobTitleName":"Web Developer",
    "phoneNumber":"9989778052",
    "region":"Bangalore"
    },
    {
    "userId" : "3",
    "name": {
    "firstName" : "Ananth",
    "lastName": "Ram" 
    },
    "jobTitleName":"Web Developer",
    "phoneNumber":"6667893421",
    "region":"Bangalore"
    }
    ]
  constructor() { }

  ngOnInit() {
  }

}
