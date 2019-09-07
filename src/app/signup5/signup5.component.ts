import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroupName, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
 selector: 'app-signup5',
 templateUrl: './signup5.component.html',
 styleUrls: ['./signup5.component.css']
})
export class Signup5Component implements OnInit {
 signform:FormGroup;
 name: any
 age:number
 mobile:number
 gender:string
 uname:string
 pass:string
 data1=JSON.parse(localStorage.getItem("user"))
 constructor(private router:Router,private formBuilder:FormBuilder,public http:HttpClient) {
   this.signform= formBuilder.group({
     n1:['',Validators.compose([Validators.required])],
     n2:['',Validators.compose([Validators.required])],
     n3:['',Validators.compose([Validators.required])],
     n4:['',Validators.compose([Validators.required])],
     n5:['',Validators.compose([Validators.required])],
     n6:['',Validators.compose([Validators.required])]
   })
 }
 ngOnInit() {
   this.name=this.data1.name;
   this.age=this.data1.age;
this.mobile=this.data1.mobile;
 this.gender=this.data1.gender;
 this.uname=this.data1.uname;
 this.pass=this.data1.pass;
 }
 sign(dt){
 let data={
   name:dt.value.n1,
   age:dt.value.n2,
   mobile:dt.value.n3,
   gender:dt.value.n4,
   uname:dt.value.n5,
   pass:dt.value.n6,
 }
 localStorage.setItem("user",JSON.stringify(data))
 }
 view(){
   this.router.navigateByUrl("crud")
 }
}
