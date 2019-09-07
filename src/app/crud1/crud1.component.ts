import { Component, OnInit } from '@angular/core';
@Component({
 selector: 'app-comp3',
 templateUrl: './comp3.component.html',
 styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {
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
 edit(i){
   this.index=1
   this.employee=this.employeeList[i]
 }
 remove(i){
   this.employeeList.splice(i,1)
 }
}
