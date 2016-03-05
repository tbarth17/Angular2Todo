import {Component}    from 'angular2/core';
import {TodoService}  from './todo-service';
import {TodoModel}    from './todo-model';

@Component({
  selector: 'todo-input',
  template: `<div>
    <form (submit)="pushTodo">
      <input type="text" [(ngModel)]="todoModel.title"/>
      <button (click)="pushTodo()">Add Todo</button>
      {{ todoModel.title }}
    </form>
  </div>`
})
export class TodoInput {
  todoModel:TodoModel = new TodoModel();

  constructor(public todoService: TodoService){
    console.log('todoService', todoService);
  }

  pushTodo () {
    console.log('this.todoModel', this.todoModel);
    this.todoService.addTodo(this.todoModel);
    console.log('this.todoService', this.todoService);
    this.todoModel = new TodoModel();
  }
}
