import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl} from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {
  signupform:FormGroup
  constructor(public router:Router) { 
    this.signupform=new FormGroup({
    username:new FormControl(''),
      email:new FormControl(''),
      mobile:new FormControl(''),
      password:new FormControl('')
    });
  }

  ngOnInit() {
  }
  signup(data){
    console.log("value",data.value);
    let profile={
      name:data.value.name,
      email:data.value.email,
      mobile:data.value.mobile,
      password:data.value.password
    };
    localStorage.setItem("personDetails",JSON.stringify(profile));
    
  }

}