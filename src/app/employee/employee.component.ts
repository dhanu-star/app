import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
 
  employeeData = [
    {
    "UserId" : "18",
    "Name": {
    "firstName" : "Ashok",
    "lastName": "Reddy" 
    },
    "Job_Title_Name":"Web Developer",
    "Phone_Number":"8142560057",
    "Region":"Bangalore"
    },
    {
    "UserId" : "96",
    "Name": {
    "firstName" : "Venkatesh",
    "lastName": "Reddy" 
    },
    "Job_Title_Name":"Web Developer",
    "Phone_Number":"9989778052",
    "Region":"Bangalore"
    },
    {
    "UserId" : "3",
    "Name": {
    "firstName" : "Ananth",
    "lastName": "Ram" 
    },
    "Job_Title_Name":"Web Developer",
    "Phone_Number":"6667893421",
    "Region":"Bangalore"
    }
    ]
  constructor() { }

  ngOnInit() {
  }

}
