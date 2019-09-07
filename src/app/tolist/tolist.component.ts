import { Component, OnInit } from '@angular/core';
​
@Component({
  selector: 'app-tolist',
  templateUrl: './tolist.component.html',
  styleUrls: ['./tolist.component.css']
})
export class TolistComponent implements OnInit {
  newTodo: string;
  todos: any;
  todoObj: any;
​
​
  constructor() { 
    this.newTodo = '';
    this.todos = [];
  }
​e
  ngOnInit() {
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
}