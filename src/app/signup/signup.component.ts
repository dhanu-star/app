import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
@Component({
 selector: 'app-signup',
 templateUrl: './signup.component.html',
 styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
page:FormGroup
 constructor() {
   this.page = new FormGroup({
     username:new FormControl(''),
     email:new FormControl(''),
     mobile:new FormControl(''),
     password:new FormControl('')
   })
  }
 ngOnInit() {
 }
 submit(data){
   console.log("value", data.value);
   let profile={
     username: data.value.name,
     email:data.value.email,
     mobile:data.value.mobile,
     password:data.value.password
   }
   localStorage.setItem("userDetails",JSON.stringify(profile))
 }
}