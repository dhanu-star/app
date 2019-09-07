


import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { HttpClient } from '@angular/common/http';
​
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  registerForm: FormGroup;
  
​
  constructor(private a:Router,private fb:FormBuilder,private http:ServiceService,private hp:HttpClient) {
    this.registerForm = this.fb.group({
      name: new FormControl(),
      pass: new FormControl(),
      cpass: new FormControl(),
    })
   }
​
  ngOnInit() {
  }
  todolist3()
  {
    this.a.navigateByUrl("todolist3")
  }
  log(val)
  {
 this.a.navigateByUrl("pipe")
  }
  check(val) {
    this.http.loginuser(val).subscribe(data=>{
     
    })
  // check12(val) {
  //   this.http.loginuser(val).subscribe(data=>{
     
  //   })
  } 
}
​
