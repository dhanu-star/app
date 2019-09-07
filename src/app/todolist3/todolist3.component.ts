import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
@Component({
  selector: 'app-todolist3',
  templateUrl: './todolist3.component.html',
  styleUrls: ['./todolist3.component.css']
})
export class Todolist3Component implements OnInit {

   public value;
   loc: any;
   constructor(public http:HttpClient) { }
 ngOnInit() {
     this.http.get("http://localhost:3000/employees").subscribe(a=> {
       this.value = a;
       console.log(a);
   });
   }
  
   create(x){
     const create = x;
     this.http.post("http://localhost:3000/employees", create).subscribe(data => {
   console.log(data);
     });
   }
   delete(v){
     this.http.delete('http://localhost:3000/employees' + '/' + v).subscribe(data=>{
       console.log("deleted",data)
     })
   }
   update(forUPdate) {
     this.http.put('http://localhost:3000/employees' + '/' + forUPdate.id , forUPdate).subscribe(data => {
       console.log(data);
     });
   }
   }

  