// import { Component, OnInit } from '@angular/core';
// ​
// @Component({
//   selector: 'app-website',
//   templateUrl: './website.component.html',
//   styleUrls: ['./website.component.css']
// })
// export class WebsiteComponent implements OnInit {
// ​
//   constructor() { }
// ​
//   ngOnInit() {
//   }
// ​
// }
 import { Component, OnInit } from '@angular/core';

 @Component({
   selector: 'app-website',
  templateUrl: './website.component.html',   styleUrls: ['./website.component.css']
})
export class WebsiteComponent implements OnInit {
 employee;
 employeeList=[];
 index=0
 constructor() { }
 ngOnInit() {
   this.employeeInit()
 }
 employeeInit(){
   this.employee = {
     fname1: '',
     lname: '',
     mobile: '',
     email: ''
   }
 }
 saveData() {
   //console.log('employee',this.employee)
   if(this.index ==0){
   this.employeeList.push(this.employee)
   }else{
     this.index=0
   }
   this.employeeInit()
 }
 update(i){
   this.index=1
   this.employee=this.employeeList[i]
 }
 delete(i){
   this.employeeList.splice(i,1)
 }
}
