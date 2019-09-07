import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  formdata:FormGroup;
   constructor() {
     
    }
   
   ngOnInit() {
    
   }
   
   
   getdata1(data){
    var getdata=JSON.parse(localStorage.getItem("userdata"));
    let email=getdata.mail;
     let   password=getdata.password;
     if(email==data.value.mail&&password==data.value.password){
      alert("login in successfull")
 }
else{
  alert("email and password is incorrect");
}
   }
   
   }
 
 
