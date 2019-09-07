import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tolist1',
  templateUrl: './tolist1.component.html',
  styleUrls: ['./tolist1.component.css']
})
export class Tolist1Component implements OnInit {
  newTodo: string;
  todos: any[];
  todoObj: { newTodo: string; completed: boolean; };
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