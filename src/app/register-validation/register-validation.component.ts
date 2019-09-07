import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { regExpEscape } from '@ng-bootstrap/ng-bootstrap/util/util';
import { registerLocaleData } from '@angular/common';
import { Router } from '@angular/router';
​
@Component({
  selector: 'app-register-validation',
  templateUrl: './register-validation.component.html',
  styleUrls: ['./register-validation.component.css']
})
export class RegisterValidationComponent implements OnInit {
​
   registerValidationform: FormGroup
   constructor(public FormBuilder: FormBuilder,private router:Router) {
     this.registerValidationform = FormBuilder.group({
       firstname: ['', Validators.required],
       lastname: ['', Validators.required],
       middlename: ['', Validators.required]
     })
  }
​

  ngOnInit() {
  }

  hii(){
    this.router.navigateByUrl('login');
  }
  register(data) {
    this.registerValidationform.controls['firstname'].markAsTouched();
    this.registerValidationform.controls['lastname'].markAsTouched()
    this.registerValidationform.controls['middlename'].markAsTouched()
​
    if (data.firstname && data.lastname && data.middlename) {
      let registerdata = {
        firstname: data.firstname,
        lastname: data.lastname,
        middlename: data.middlename
      }
     console.log('checking', registerdata)
       }
    }
}
​
​
