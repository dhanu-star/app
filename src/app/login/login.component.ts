import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl} from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform:FormGroup
  constructor(public router:Router) { 
    this.loginform=new FormGroup({
    email:new FormControl(''),
      password:new FormControl('')
     
    })
  }

  ngOnInit() {
  }
  hii(){
    this.router.navigate(['/tolist'])
  }
  loginpage(data){
    let data1=JSON.parse(localStorage.getItem("UserDetails"))
    let em=data1.email;
    let pw=data1.password;
    if(em==data.value.email&&pw==data.value.password){
      alert("login in successfull")
 }
else{
  alert("email and password is incorrect");
}
    }
    
//   constructor() { }

//   ngOnInit() {
//   }

 }


//   constructor() { }

//   ngOnInit() {
//   }

// }
