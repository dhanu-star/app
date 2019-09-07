import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from "@angular/forms";
import { ServiceService } from "../service.service";
@Component({
  selector: 'app-apicomp',
  templateUrl: './apicomp.component.html',
  styleUrls: ['./apicomp.component.css']
})
export class APICOMPComponent implements OnInit {
  registerForm: FormGroup
​
  constructor(private router: Router, private fb: FormBuilder, private http: ServiceService) {
    this.registerForm = this.fb.group({
      name: new FormControl(),
      pass: new FormControl(),
      cpass: new FormControl(),
    })
  }
​
  ngOnInit() {
  }
  log() {
    this.router.navigateByUrl("api2")
  }
  register(values) {
    console.log(values)
    this.http.registerUser(values).subscribe(data => {
      //console.log("2", data)
    })
  }
}
