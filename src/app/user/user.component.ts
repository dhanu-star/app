import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl}from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
page:FormGroup
  constructor() { 
  //   this.page=new FormGroup({
  //     username:new FormControl(''),
  //     email:new FormControl(''),
  //     mobile:new FormControl(''),
  //     password:new FormControl('')
  //   })
  // }
  this.page=new FormGroup({
        empname:new FormControl(''),
         email:new FormControl(''),
         mobile:new FormControl(''),
         accountdet:new FormControl(''),
         address:new FormControl(''),
         password:new FormControl('')
       })
     }
  
  ngOnInit() {
    
  }
  submit(data){
    console.log("value",data.value);
    let profile={
      name:data.value.name,
      email:data.value.email,
      mobile:data.value.mobile,
      password:data.value.password
    }
    localStorage.setItem("UserDetails",JSON.stringify(profile))
  }

}
