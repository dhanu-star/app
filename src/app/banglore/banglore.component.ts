import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-banglore',
  templateUrl: './banglore.component.html',
  styleUrls: ['./banglore.component.css']
})
export class BangloreComponent implements OnInit {
  newTodo: string;
  todos: any;
  todoObj: any;
​
​
  constructor() { 
    this.newTodo = '';
    this.todos = [];
  }
  addTodo(event) {
    this.todoObj = {
      newTodo: this.newTodo,
      completed: false
    }
    this.todos.push(this.todoObj);
    this.newTodo = '';
    event.preventDefault();
  }
​
  deleteTodo(index) {
    this.todos.splice(index, 1);
  }
​

  deleteTodos() {
    
    for(var i=(this.todos.length -1); i > -1; i--) {
      if(this.todos[i].completed) {
        this.todos.splice(i, 1);
      }
    }
  }
  ngOnInit() {
    
  }
  title = 'angular examples';
  email="";
   name = "";
   aa: boolean = true;
   users = [{
     sl:"1",
     bank:"bharath corperative bank",
      id: '223',
     name: 'dhanushree',
     email: 'shree18@gmail.com',
     ifsc:'bh7893487n'
   }, {
     sl:"2",
     bank:"indian overseas bank",
     id: '2234',
     name: 'sonika',
     email: '12sonu@hotmail.com',
     ifsc:'y56789nm0987g'
   }, {
     sl:"3",
     bank:"state bank",
     id: '12345',
     name: 'fyle',
     email: '17state@gmail.com',
     ifsc:'bn34567890bp'
   }, 
   {
     sl:"4",
     bank:"cooperative society bank",
     id: '123456',
     name: 'ranjitha',
     email: 'test@gmail.com',
     ifsc:'k53fd57899'
   }]
   
   setIndex(ii) {
     this.aa = ii;
     console.log
   }
}
