import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl} from "@angular/forms"


@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css']
})
export class RegistrationformComponent implements OnInit {
  signup:FormGroup;
  constructor() {
    this.signup = new FormGroup({
      name: new FormControl(''),
      gender: new FormControl(''),
      mobile: new FormControl(''),
      email: new FormControl(''),
      password:new FormControl('')
    })
}

  ngOnInit() {
  }
  submit(data){
    let obj={
    name: data.value.name,
    gender:data.value.gender,
    mobile:data.value.mobile,
    email: data.value.email,
    password: data.value.password
     }
     localStorage.setItem("userdata",JSON.stringify(obj))
     
  }
  validation(data){
    var name=data.value.name;
    let mobile=data.value. mobile;
   var email =data.value.email;
    if(name==""||name.length<5||mobile==""||mobile.length<10||email=="")
    {
        window.alert("Field is mandatory")
    }
    else{
      window.alert("check mobile number")
    }
    
}
}
