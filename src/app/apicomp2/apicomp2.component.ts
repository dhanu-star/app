import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ServiceService } from '../service.service';
import { HttpClient } from '@angular/common/http';
​
@Component({
  selector: 'app-apicomp2',
  templateUrl: './apicomp2.component.html',
  styleUrls: ['./apicomp2.component.css']
})
export class Apicomp2Component implements OnInit {
  registerForm2: FormGroup;
  baseapi='https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/authenticate'
  constructor(private a:Router,private fb:FormBuilder,private http:ServiceService,private hp:HttpClient) {
    this.registerForm2 = this.fb.group({
      name: new FormControl(),
      pass: new FormControl(),
    })
  }
  ngOnInit() {
  }
  website()
  {
    this.a.navigateByUrl("website")
  }
  login(val)
  {
 this.a.navigateByUrl("pipe")
  }
  check(val) {
    this.http.loginuser(val).subscribe(data=>{
     // console.log(data)
    })
 }
 }