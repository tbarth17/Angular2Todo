import {Component} from 'angular2/core';
import {TodoService} from './todo-service';

@Component({
  selector: 'todo-input',
  template: `<div>
    <input type="text" #myInput/>
    <button (click)="doStuff(myInput.value)">Do Stuff</button>
  </div>`
})
export class TodoInput {
  constructor(todoService: TodoService){
    console.log('todoService', todoService);
  }

  doStuff (value) {
    console.log('value', value);
    this.todoService.todos.push(value);
    console.log('this.todoService', this.todoService);
  }
}
