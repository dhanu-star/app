import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
 selector: 'app-crud',
 templateUrl: './crud.component.html',
 styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
 data1=JSON.parse(localStorage.getItem("user"))
 constructor(private router:Router) { }
 ngOnInit() {
   console.log(this.data1.name);
 }
 up(){
   this.router.navigateByUrl("signup5")
 }
 rem(){
   this.data1=""
 }
}
