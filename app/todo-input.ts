import {Component} from 'angular2/core';
import {TodoService} from './todo-service';

@Component({
  selector: 'todo-input',
  template: `<div>
    <input type="text" [(ngModel)]="todoModel"/>
    <button (click)="pushTodo()">Add Todo</button>
    {{ todoModel }}
  </div>`
})
export class TodoInput {
  todoModel;

  constructor(public todoService: TodoService){
    console.log('todoService', todoService);
  }

  pushTodo () {
    console.log('this.todoModel', this.todoModel);
    this.todoService.todos.push(this.todoModel);
    console.log('this.todoService', this.todoService);
  }
}
