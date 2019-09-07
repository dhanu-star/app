import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-banglore',
  templateUrl: './banglore.component.html',
  styleUrls: ['./banglore.component.css']
})
export class BangaloreComponent implements OnInit {
  ngOnInit() {
    
  }
  title = 'angular examples';
  email="";
   name = "";
   aa: boolean = true;
   users = [{
     sl:"1",
     bank:"indian bank",
      id: '223',
     name: 'danu',
     email: 'abc@gmail.com'
   }, {
     sl:"2",
     bank:"sbi",
     id: '2234',
     name: 'shree',
     email: 'xyz@hotmail.com'
   }, {
     sl:"3",
     bank:"sbbi",
     id: '12345',
     name: 'abc',
     email: 'jsgsbh@kk.com'
   }, 
   {
     sl:"4",
     bank:"sbi",
     id: '123456',
     name: 'def',
     email: 'TEST@gmail.com'
   }]
   setIndex(ii) {
     this.aa = ii;
     console.log
   }
}



