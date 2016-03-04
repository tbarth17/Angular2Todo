import {Component} from 'angular2/core';
import {TodoService} from './todo-service';

@Component({
  selector: 'todo-input',
  template: `<div>
    <form (submit)="pushTodo">
      <input type="text" [(ngModel)]="todoModel"/>
      <button (click)="pushTodo()">Add Todo</button>
      {{ todoModel }}
    </form>
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
